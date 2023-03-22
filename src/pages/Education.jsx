import {
  ItemForPeriod,
  PeriodContainer,
  SelfEducationList,
  Title,
} from '../components';

const Education = () => (
  <section id='education'>
    <Title>Education</Title>
    <PeriodContainer additionClass='border-b border-b-silver-light pb-12'>
      <ItemForPeriod
        mainTitle='Oles Honchar Dnipro National University'
        subTitle="Bachelor's degree"
        description='I am studying computer engineering'
        period='September 2019 - Present'
      />
    </PeriodContainer>

    <Title variant='h3' size='text-4xl' additionalClass='pt-12 pb-6'>
      Self-education
    </Title>
    <SelfEducationList />
  </section>
);

export default Education;
