import { Outlet,} from 'react-router-dom';
import styles from './layout.module.css'
//import { log } from 'console';
import Header from '../header/Header';
import Footer from '../footer/Footer';


function Layout(){
    
    
    return(
        <div className={styles.page}>
<header>
<Header/>
</header>
<main className={styles.main}>
    <Outlet/>
</main>
  <Footer/>
        </div>
    );
}
export default Layout;