import styled from 'styled-components';
import { BookingLink } from './Link';
import { colors } from '../styles/variables';

const Section = styled.section`
  background-color: ${colors.midGreen};
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 2rem 1.5rem;
`;

const Heading = styled.h1`
  color: ${colors.white};
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.address`
  letter-spacing: 1px;
  margin-bottom: 3rem;
  color: ${colors.white};
`;

const Hero = () => (
  <Section>
    <Heading>Face Studio<br />By Annie</Heading>
    <SubHeading>Mildura, VIC</SubHeading>
    <BookingLink text="Check Availability" />
  </Section>
);

export default Hero;
