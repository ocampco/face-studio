import React from 'react';
import styled from 'styled-components';
import Hero from './../components/Hero';
import { colors } from './../styles/variables';
import './../styles/index.css';

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
    <Hero />
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
