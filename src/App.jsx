import { useEffect, useState } from 'react';
import { Navbar } from './components';
import {
  About,
  Education,
  Experience,
  Loader,
  Portfolio,
  Skills,
} from './pages';

const App = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
  }, []);

  if (isLoader) {
    return <Loader />;
  }

  return (
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
};

export default App;
