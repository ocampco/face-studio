import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding: 2rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  list-style: disc inside;
  font-size: 1.25rem;
  letter-spacing: 0.125rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const Services = () => (
  <Section>
    <Heading id="Services">Services</Heading>
    <ul>
      <ListItem>Full lash treatment</ListItem>
      <ListItem>Lash tint</ListItem>
      <ListItem>Lash lift</ListItem>
      <ListItem>Full face wax</ListItem>
      <ListItem>Chin wax</ListItem>
      <ListItem>Lip wax</ListItem>
      <ListItem>Make up</ListItem>
      <ListItem>Special FX make up</ListItem>
      <ListItem>Full set of classic lashes</ListItem>
      <ListItem>Classic lashes refill</ListItem>
      <ListItem>Full set of hybrid lashes</ListItem>
      <ListItem>Hybrid lashes refill</ListItem>
      <ListItem>Full brow treatment</ListItem>
      <ListItem>Brow wax and shape</ListItem>
      <ListItem>Brow wax</ListItem>
      <ListItem>Brow tint</ListItem>
      <ListItem>Brow lamination</ListItem>
    </ul>
  </Section>
);

export default Services;
