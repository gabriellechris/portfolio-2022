import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> GCEK's Portfolio
      </SectionTitle>

      <SectionText>
        An inspiring UI/UX Designer who's also open to opportunities in Machine Learning.
      </SectionText>

      <Button onClick={ () => window.location = 'mailto:gabriellachristina33@gmail.com'}>
        Say Hi!
      </Button>

    </LeftSection>
  </Section>
);

export default Hero;