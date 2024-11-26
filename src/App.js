import './App.css';
import About from './components/About/About';
import ProblemCauseSolution from './components/About/ProblemCauseSolution';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import StatsSection from './components/StatsSection';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <ProblemCauseSolution />
      <StatsSection />
    </div>
  );
}

export default App;
