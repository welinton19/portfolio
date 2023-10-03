
import './App.css';
import Footer from './componenetes/secoes/Footer';
import Navbar from './componenetes/secoes/Navbar'
import Projects from './componenetes/secoes/Porjects';
import Presentation from './componenetes/secoes/Presentatio';
import Skills from './componenetes/secoes/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
