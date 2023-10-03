import styles from './Cards.module.css'
import ButtonB from './ButtonB'

function Cards({title,tech,description,repo}){
    return(
        <section className={styles.Cards}>
            <h3>{title}</h3>
              <p><strong>Tecnologia:</strong>{tech}</p>
              <p>{description}</p>
            <ButtonB text='Acesse o Repositório'link={repo}/>
        </section>
    )
}

export default Cards