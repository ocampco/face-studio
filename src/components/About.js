import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding: 2rem 0;
  border-bottom: 0.125rem solid ${colors.lightGrey};
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.25rem;
  letter-spacing: 0.125rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const About = () => (
  <Section>
    <Heading id="about">About</Heading>
    <ul>
      <ListItem>9 years experience,</ListItem>
      <ListItem>Certified make up artist,</ListItem>
      <ListItem>Certified brow technician,</ListItem>
      <ListItem>Face aesthetics specialist</ListItem>
    </ul>
  </Section>
);

export default About;
