import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Content = styled.div`
  font-weight: 400;
  line-height: 1.75;
  color: ${colors.black};
`;

const About = () => (
  <section>
    <h2 id="about">About</h2>
    <Content>
      I'm a face aesthetics specialist with over 10 years experience.
      <br />I am certified as a:
      <ul>
        <li>Make up artist</li>
        <li>Lash and brow technician</li>
        <li>Lash extension technician</li>
      </ul>
    </Content>
  </section>
);

export default About;
