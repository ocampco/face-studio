import React from 'react';
import styled from 'styled-components';
import { colors } from './../styles/variables';

const Link = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  justify-self: center;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const BookingButton = ({ text }) => (
  <Link>{text}</Link>
);

export default BookingButton;
