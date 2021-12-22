import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Section = styled.section`
  background-color: ${colors.lightGreen};
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 2rem 1rem;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.address`
  letter-spacing: 0.125rem;
  margin-bottom: 2rem;
  color: ${colors.darkGrey};
`;

const Link = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  justify-self: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
`;

const Hero = () => (
  <Section>
    <Heading>Face Studio<br />By Annie</Heading>
    <SubHeading>Mildura, VIC</SubHeading>
    <Link>Check availability</Link>
  </Section>
);

export default Hero;
