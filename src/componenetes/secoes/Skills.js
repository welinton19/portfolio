import styles from './Skills.module.css'
import javascript from '../../image/Skills/javascript.svg'
import html from '../../image/Skills/html.svg'
import css from '../../image/Skills/css.svg'
import react from '../../image/Skills/react.svg'

function Skills(){
    return(
        <div className={styles.Skills} id="Skills">
            <h1> Habilidades </h1>
            <p>Aqui apresento um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                
            </div>
        </div>
    )
}
export default Skills