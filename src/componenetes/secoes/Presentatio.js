import styles from './Presentatio.module.css'
import ButtonA from '../elementos/ButtonA'
import ButtonB from '../elementos/ButtonB'

function Presentation(){
    return(
        <div className={styles.Presentatio} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portifolio</strong></h4>
            <h1>Olá, eu sou Welinton Gomes!</h1>
            <p>Sou fissurado em tecnologia e soluções que ajudam a socieadade como um todo.<br/>
               Como Desenvolvndo Front-End busco me aprimora esta sempre denytro das novidades,<br/>
               para poder ajudar a todos. A tecnologia é algo inovador por isso estou sempre curioso <br/>
               e com muita fome de aprender sobre esse
               universo que é impressionante.E buscando sempre me<br/> 
               superar e novos desafios.
            </p>
            <ButtonA link='https://github.com/welinton19' text='Conecte-se comigo!'/>
            
        </div>
    ) 
}
export default Presentation