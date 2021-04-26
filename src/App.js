import './App.css';
import Navbar from './Components/Navbar.js'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Project from './Components/Project.js'
import Certificate from './Components/Certificate.js'
import Skill from './Components/Skill.js'
import Footer from './Components/Footer.js'
import ContactButton from './Components/ContactButton.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactButton />
      <Header />
      <About />
      <Project />
      <Certificate />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
