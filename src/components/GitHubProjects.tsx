"use client";

import React, { useEffect, useState } from "react";
import { fetchGitHubRepos, GitHubRepo, fetchRepoCommitStats } from "@/lib/github";
import styles from "./styles/GitHubProjects.module.css";

interface GitHubProjectsProps {
  username: string;
}

interface RepoWithStats extends GitHubRepo {
  monthlyCommits: number;
}

export function GitHubProjects({ username }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<RepoWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        setLoading(true);
        const data = await fetchGitHubRepos(username);
        
        // Fetch commit stats for each repo
        // Only fetch for non-forks? User didn't specify, but usually "my stats" implies source repos. 
        // But fetchGitHubRepos filters? actually the current implementation of fetchGitHubRepos returns forks too.
        // Let's just fetch for all.
        
        const reposWithStats = await Promise.all(
          data.map(async (repo) => {
            const commits = await fetchRepoCommitStats(repo.owner.login, repo.name);
            return { ...repo, monthlyCommits: commits };
          })
        );
        
        // Sort by monthly commits descending, then by updated_at
        const sorted = reposWithStats.sort((a, b) => {
          if (b.monthlyCommits !== a.monthlyCommits) {
            return b.monthlyCommits - a.monthlyCommits;
          }
          return new Date(b.updated_at || 0).getTime() - new Date(a.updated_at || 0).getTime();
        }).slice(0, 6); 
        
        setRepos(sorted);
      } catch (err) {
        setError("Failed to load repositories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, [username]);

  if (loading) {
    return <div className={styles.loading}>Loading repositories from GitHub...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (repos.length === 0) {
    return <div className={styles.loading}>No active repositories found in the last month.</div>;
  }

  return (
    <div className={styles.container}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", marginTop: "30px" }}>
        Recent Activity 
        <span style={{ fontSize: "0.8em", opacity: 0.6, marginLeft: "10px", fontWeight: "normal" }}>
          (@{username})
        </span>
      </h3>
      <div className={styles.grid}>
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.card}
          >
            <div className={styles.header}>
              <h4 className={styles.title}>{repo.name}</h4>
              <div className={styles.stars}>
                <span>★</span> {repo.stargazers_count}
              </div>
            </div>
            <p className={styles.description}>
              {repo.description || "No description available"}
            </p>
            <div className={styles.footer}>
              {repo.language && (
                <div className={styles.language}>
                  <span className={styles["language-dot"]}></span>
                  {repo.language}
                </div>
              )}
              <div className={styles.updated}>
                Updated {new Date(repo.updated_at || "").toLocaleDateString()}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
