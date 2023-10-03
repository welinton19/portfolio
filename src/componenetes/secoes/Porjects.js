import ButtonB from '../elementos/ButtonB'
import styles from './Projects.module.css'
import Cards from '../elementos/Cards'

function Projects(){
    return(
        <div className={styles.Projects} id='Projects'>
            <h1>Projetos</h1>
            <Cards 
            title='Primeiro projeto'
            tech='HTML, CSS e Javascript'
            description='Desenvolvimento de uma landing page para o lançamento em formação de Tecnologia'
            repo='https://github.com/welinton19/primeiro'/>
            <Cards
            title='LP-Arquitetuta'
            tech='HTML, CSS'
            description='Desenvolvendo uma landing page no curso dom os colegas trabalhando junto com a comunicação'
            repo='https://github.com/welinton19/arquitetura'/>
            <Cards
            title='DIO-lab-codigo-aberto'
            tech='Git & Github'
            description='Primeiro versionamento com as ferramentas  '
            repo='https://github.com/welinton19/dio-lab-open-source'/>
            <ButtonB text='Acesse meu Rpositório'link='https://github.com/welinton19?tab=repositories'/>
        </div>
    )
}
export default Projects