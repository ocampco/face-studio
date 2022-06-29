import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const ListItem = styled.li`
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const About = () => (
  <section>
    <h2 id="about">About</h2>
    <ul>
      <ListItem>Face aesthetics specialist with</ListItem>
      <ListItem>10 years experience,</ListItem>
      <ListItem>Certified make up artist,</ListItem>
      <ListItem>Certified lash and brow technician,</ListItem>
      <ListItem>Certified lash extension technician</ListItem>
    </ul>
  </section>
);

export default About;
