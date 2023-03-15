import { Title } from '../components';
import { WORKS } from '../utils/constants';

const Experience = () => (
  <section id='experience'>
    <Title>Experience</Title>
    <div className='flex gap-4'>
      <div className='w-2 bg-primary mt-14' />
      <div>
        {WORKS.map((item) => (
          <CardWork key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);

const CardWork = ({ position, company, description, period }) => {
  return (
    <div
      className='flex w-full relative justify-between pt-12 gap-8
      before:absolute before:-left-6 before:top-14 before:w-3 before:h-3 before:mr-4 before:bg-white before:rounded-full before:border-2 before:border-primary'
    >
      <div>
        <h3 className='font-sairaExtraCondensed font-bold text-silver text-2xl uppercase'>
          {position}
        </h3>
        <h4 className='font-sairaExtraCondensed font-medium text-silver-light text-xl uppercase pb-4'>
          {company}
        </h4>
        <p className='text-silver-light font-openSans'>{description}</p>
      </div>
      <div>
        <p className='whitespace-nowrap uppercase font-openSans text-primary font-bold text-sm'>
          {period}
        </p>
      </div>
    </div>
  );
};

export default Experience;
