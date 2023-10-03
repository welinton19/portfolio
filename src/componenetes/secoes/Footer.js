import{FaGithub,FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css'
function Footer(){
    return(
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://github.com/welinton19'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/welinton-gomes-batista'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>welintom025@hotmail.com</p>
            <p>Welinton Gomes © 2023</p>
        </div>
    )
}
export default Footer