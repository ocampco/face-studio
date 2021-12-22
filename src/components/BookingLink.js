import React from 'react';
import styled from 'styled-components';
import config from './../config';
import { colors } from './../styles/variables';

const Link = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  justify-self: center;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const Anchor = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
`;

const BookingLink = ({ text }) => (
  <Link>
    <Anchor
      href={config.BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Anchor>
  </Link>
);

export default BookingLink;
