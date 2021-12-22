import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Section = styled.section`
  background-color: ${colors.midGreen};
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 2rem 1.5rem;
`;

const Heading = styled.h1`
  color: ${colors.white};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.address`
  letter-spacing: 0.1rem;
  margin-bottom: 3rem;
  color: ${colors.white};
`;

const Link = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  justify-self: center;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const Hero = () => (
  <Section>
    <Heading>Face Studio<br />By Annie</Heading>
    <SubHeading>Mildura, VIC</SubHeading>
    <Link>Check availability</Link>
  </Section>
);

export default Hero;
