
import styles from './Header.module.css'


function HeaderCard(name: string) {
    return (
        <div className={styles.card}>
            <a href={`#${name}`} style={{ textDecoration: 'none' }}>
                <p>{name}</p>
            </a>
        </div>
    )
}



export default function HeaderSection() {

    // open a file
    const names = ['Home', 'About', 'Contact'];

    return (
        <header id={'Header'} className={styles.header}>
            <div>
                <div className={styles.container}>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Header</p>
                    <div style={{ width: '30px' }}></div>
                    <div className={styles.nav}>
                        {names.map((name, key) => (
                            HeaderCard(name)
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}