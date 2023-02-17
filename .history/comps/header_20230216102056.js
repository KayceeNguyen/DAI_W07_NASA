import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const HeaderBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
