import React from 'react';
import styled from 'styled-components';
import { BookingLink } from './Link';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding: 2rem 0;
  border-bottom: 0.125rem solid ${colors.lightGrey};
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  position: relative;
  max-height: 14rem;
  overflow: hidden;
  margin-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 10rem;
    background: linear-gradient(to top, ${colors.white}, rgba(0, 0, 0, 0));
  }
`;

const ListItem = styled.li`
  list-style: disc inside;
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const services = [
  'Full lash treatment',
  'Lash tint',
  'Lash lift',
  'Full face wax',
  'Chin wax',
  'Lip wax',
  'Make up',
  'Special FX make up',
  'Full set of classic lashes',
  'Classic lashes refill',
  'Full set of hybrid lashes',
  'Hybrid lashes refill',
  'Full brow treatment',
  'Brow wax and shape',
  'Brow wax',
  'Brow tint',
  'Brow lamination',
];

const Services = () => (
  <Section>
    <Heading id="Services">Services</Heading>
    <List>
      { services.map(
          service => (<ListItem key={service}>{service}</ListItem>))
      }
    </List>
    <BookingLink width="100%" text="See all services" />
  </Section>
);

export default Services;
