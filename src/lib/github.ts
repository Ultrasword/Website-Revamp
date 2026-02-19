import { Octokit } from "octokit";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string | null;
  owner: {
    login: string;
  };
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const octokit = new Octokit();

  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username,
      sort: "updated",
      direction: "desc",
      per_page: 100, // Fetch up to 100 repos
    });

    // Map to our interface and filter out forks if desired (keeping forks for now as user asked for active repos)
    const repos: GitHubRepo[] = response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count ?? 0,
      language: repo.language ?? null,
      updated_at: repo.updated_at ?? null,
      owner: {
        login: repo.owner.login,
      },
    }));

    // Filter to ensure we have valid repos and maybe limit the number displayed initially
    // For now returning all, component can slice
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function fetchRepoCommitStats(owner: string, repo: string): Promise<number> {
  const octokit = new Octokit();
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/stats/participation", {
      owner: owner,
      repo: repo,
    });

    // owner array contains weekly commit counts for the repo owner.
    // The array usually has 52 entries (one per week).
    // We want the last 4 weeks (approx 1 month).
    const ownerCommits = response.data.owner;
    if (!ownerCommits || ownerCommits.length === 0) return 0;

    const last4Weeks = ownerCommits.slice(-4);
    const totalCommits = last4Weeks.reduce((sum: number, count: number) => sum + count, 0);

    return totalCommits;
  } catch (error) {
    console.error(`Error fetching stats for ${repo}:`, error);
    return 0;
  }
}
