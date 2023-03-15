import { Title } from '../components';

const Education = () => (
  <section id='education'>
    <Title>Education</Title>
    <div className='flex gap-4 border-b border-b-silver-light pb-12'>
      <div className='w-1 bg-primary mt-14'></div>
      <div
        className='flex w-full relative justify-between pt-12 gap-8
        before:absolute before:-left-6 before:top-14 before:w-3 before:h-3 before:mr-4 before:bg-white before:rounded-full before:border-2 before:border-primary'
      >
        <div>
          <h3 className='font-sairaExtraCondensed font-bold text-silver text-2xl uppercase'>
            Oles Honchar Dnipro National University
          </h3>
          <h4 className='font-sairaExtraCondensed font-medium text-silver-light text-xl uppercase pb-4'>
            Bachelor's degree
          </h4>
          <p className='text-silver-light font-openSans'>
            I am studying computer engineering
          </p>
        </div>
        <div>
          <p className='whitespace-nowrap uppercase font-openSans text-primary font-bold text-sm'>
            September 2019 - Present
          </p>
        </div>
      </div>
    </div>
    <h3 className='font-bold text-4xl uppercase text-silver pt-12 pb-6'>
      self-education
    </h3>
    <ul className='pl-8 list-disc uppercase text-silver-light text-xl font-medium'>
      <li>W3Schools Online Web Tutorials</li>
      <li>developer.mozilla.org</li>
      <li>uk.javascript.info</li>
      <li>codewars(4 kyu), leetCode</li>
      <li>udemy</li>
      <li>YouTube video tutorials</li>
    </ul>
  </section>
);

export default Education;
