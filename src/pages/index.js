import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from './../styles/variables';
import './../styles/index.css';

const Hero = styled.section`
  background-color: ${colors.lightGreen};
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 4rem 1rem;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 1.5rem;
`;

const HeroSubHeading = styled.address`
  font-size: 1.5rem;
  color: ${colors.white};
`;

const Background = styled.section`
  padding: 2rem 1rem;
`;

const BackgroundHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: ${colors.black};
`;

const IndexPage = () => (
  <main>
    <Hero>
      <HeroHeading>Face Studio<br />By Annie</HeroHeading>
      <HeroSubHeading>Mildura, VIC</HeroSubHeading>
    </Hero>
    <Background>
      <BackgroundHeading id="about">About</BackgroundHeading>
      <ul>
        <ListItem>9 years experience,</ListItem>
        <ListItem>Certified make up artist,</ListItem>
        <ListItem>Certified brow technician,</ListItem>
        <ListItem>Face aesthetics specialist.</ListItem>
      </ul>
    </Background>
  </main>
);

export default IndexPage;
