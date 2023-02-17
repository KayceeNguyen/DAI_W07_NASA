import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const HeaderBar = () => {
  const r = useRouter();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
      <img 
        className={styles.headerIcon}
        src="/galaxy-header.png" 
        width="60px"
        onClick={
            ()=>r.push("/")}
        />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">
              <div className={styles.navLink}>Home</div>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/polychromatic">
              <div className={styles.navLink}>Polychromatic</div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBar;
