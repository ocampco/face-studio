import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from './../styles/variables';
import './../styles/index.css';

const Hero = styled.section`
  background-color: ${colors.lightGreen};
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 2rem 1rem;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const HeroSubHeading = styled.address`
  letter-spacing: 0.125rem;
  margin-bottom: 2rem;
  color: ${colors.darkGrey};
`;
  
const EnquiryLink = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  justify-self: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
`;

const Background = styled.section`
  padding: 2rem 1rem;
`;

const BackgroundHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  letter-spacing: 0.125rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const IndexPage = () => (
  <main>
    <Hero>
      <HeroHeading>Face Studio<br />By Annie</HeroHeading>
      <HeroSubHeading>Mildura, VIC</HeroSubHeading>
      <EnquiryLink>Check availability</EnquiryLink>
    </Hero>
    <Background>
      <BackgroundHeading id="about">About</BackgroundHeading>
      <ul>
        <ListItem>9 years experience,</ListItem>
        <ListItem>Certified make up artist,</ListItem>
        <ListItem>Certified brow technician,</ListItem>
        <ListItem>Face aesthetics specialist</ListItem>
      </ul>
    </Background>
  </main>
);

export default IndexPage;
