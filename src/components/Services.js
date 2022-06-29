import React from 'react';
import styled from 'styled-components';
import { BookingLink } from './Link';
import { colors } from './../styles/variables';

const List = styled.ul`
  position: relative;
  max-height: 10rem;
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
  'Lash Set Full',
  'Brow Lamination',
  'Make Up Application',
  'Facial Services',
  'Full Lash Treatment',
  'Lash Tint',
  'Lash Lift',
  'Wax Full Face',
  'Wax Brow',
  'Wax Chin',
  'Wax Lip',
  'Dermaplane',
  'Brow Wax and Shape',
  'Brow Tint',
  'Full Brow Treatment',
  'SPFX Make Up Application',
  'Lash Extension Refill 1 Week',
  'Lash Extension Refill 2 Weeks',
  'Lash Extension Refill 3 Weeks',
  'Lash Removal',
];

const Services = () => (
  <section>
    <h2 id="Services">Services</h2>
    <List>
      { services.map(
          service => (<ListItem key={service}>{service}</ListItem>))
      }
    </List>
    <BookingLink width="100%" text="See all services" />
  </section>
);

export default Services;
