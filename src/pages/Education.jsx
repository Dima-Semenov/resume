import {
  ItemForPeriod,
  PeriodContainer,
  SelfEducationList,
  Title,
} from '../components';

const Education = () => (
  <section id='education'>
    <Title additionalClass='justify-center'>
      Education <span className='text-5xl mobileVerySmall:text-3xl'>🎓</span>
    </Title>
    <PeriodContainer additionClass='border-b border-b-silver-light pb-12'>
      <ItemForPeriod
        mainTitle='Oles Honchar Dnipro National University'
        subTitle="Bachelor's degree"
        description='Bachelor’s degree in Computer Engineering'
        period='September 2019 - June 2023'
      />
    </PeriodContainer>

    <Title variant='h3' size='text-4xl' additionalClass='pt-12 pb-6'>
      Self-education
    </Title>
    <SelfEducationList />
  </section>
);

export default Education;
