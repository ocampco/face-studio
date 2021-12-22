import React from 'react';
import styled from 'styled-components';
import BookingButton from './BookingButton';
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

const Hero = () => (
  <Section>
    <Heading>Face Studio<br />By Annie</Heading>
    <SubHeading>Mildura, VIC</SubHeading>
    <BookingButton text="Check Availability" />
  </Section>
);

export default Hero;
