import { lazy, useEffect, useState } from 'react';
import { Navbar } from './components';

const About = lazy(() =>
  import('./pages').then(({ About }) => ({ default: About }))
);
const Education = lazy(() =>
  import('./pages').then(({ Education }) => ({ default: Education }))
);
const Experience = lazy(() =>
  import('./pages').then(({ Experience }) => ({ default: Experience }))
);
const Loader = lazy(() =>
  import('./pages').then(({ Loader }) => ({ default: Loader }))
);
const Portfolio = lazy(() =>
  import('./pages').then(({ Portfolio }) => ({ default: Portfolio }))
);
const Skills = lazy(() =>
  import('./pages').then(({ Skills }) => ({ default: Skills }))
);

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
