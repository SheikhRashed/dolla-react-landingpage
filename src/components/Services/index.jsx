import React from 'react';

// import icons
import icon1 from '../../images/svg-1.svg';
import icon2 from '../../images/svg-2.svg';
import icon3 from '../../images/svg-3.svg';

// components
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  Card,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <Card>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce Expense</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </Card>
        <Card>
          <ServicesIcon src={icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </Card>
        <Card>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership acrd that returns 5% cash back.
          </ServicesP>
        </Card>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
