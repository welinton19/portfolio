import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <ul>
                <li><NavLink href='#Presentation'>Apresentação</NavLink></li>
                <li><NavLink href='#Skills'>Habilidades</NavLink></li>
                <li><NavLink href='#Projects'>Projetos</NavLink></li>
            </ul>
            <ul>
                <li><a href='https://github.com/welinton19'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/welinton-gomes-batista'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
    
}
export default Navbar