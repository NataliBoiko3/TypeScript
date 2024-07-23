
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
 import  {Links} from './links'

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
{Links.map((el,index)=> (
  <Link key={index} className={location.pathname === el.pathname  ? styles.active : ''} to={el.pathname}>
       {el.title}
      </Link>

))}

   
    </header>
  );
}

export default Header;
