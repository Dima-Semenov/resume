import { Navbar } from './components';
import { About, Education, Experience, Portfolio, Skills } from './pages';

const App = () => (
  <>
    <Navbar />
    <div>
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Skills />
    </div>
  </>
);

export default App;
