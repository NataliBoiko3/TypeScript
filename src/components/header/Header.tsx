
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>
        star wars gallery
      </Link>
      <Link className={location.pathname === '/gender-form' ? styles.active : ''} to={'/gender-form'}>
        gender form
      </Link>
      <Link className={location.pathname === '/robot-form' ? styles.active : ''} to={'/robot-form'}>
        robot form
      </Link>
      <Link className={location.pathname === '/my-form' ? styles.active : ''} to={'/my-form'}>
        form example
      </Link>
    </header>
  );
}

export default Header;