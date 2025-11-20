import Typewriter from 'typewriter-effect';
import { DownloadPdfButton, Title } from '../../components';
import { CONTACT_DETAILS } from '../../utils';
import { ContactDetailsItem, DescriptionBlock } from './components';

const About = () => (
  <section id='about' className='justify-center pt-16'>
    <Title
      size='text-8xl mobile:text-7xl mobileSmall:text-6xl mobileVerySmall:text-5xl'
      variant='h1'
    >
      Semenov <span className='text-primary'>Dmytro</span>
    </Title>

    <Title
      size='text-5xl mobile:text-4xl mobileSmall:text-3xl mobileVerySmall:text-2xl'
      variant='h3'
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a Frond-end developer")
            .pauseFor(2500)
            .deleteChars(19)
            .typeString('Next js developer')
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
        options={{ loop: true }}
      />
    </Title>

    <div className='text-silver-light pb-12 text-base pt-4 mobileSmall:pb-8'>
      {CONTACT_DETAILS.map((item, index) => (
        <ContactDetailsItem key={item.id} {...item} index={index} />
      ))}
    </div>

    <DescriptionBlock />

    <div className='pt-6 flex tablet:justify-center'>
      <DownloadPdfButton />
    </div>
  </section>
);

export default About;
