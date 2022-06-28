import React from 'react';
import styled from 'styled-components';
import config from '../config';
import { colors } from '../styles/variables';

const Container = styled.div`
  display: inline-block;
  width: ${props => props.width || undefined};
  text-align: center;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const Anchor = styled.a`
  display: block;
  padding: 1rem 0.75rem;
  text-decoration: none;
  color: ${colors.black};
  letter-spacing: 1px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const Link = ({ text, url, width }) => (
  <Container width={width}>
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Anchor>
  </Container>
);

export const SocialLink = ({ text }) =>
  <Link text={text} url={config.SOCIAL_URL} />

export const BookingLink = ({ text, width }) =>
  <Link text={text} url={config.BOOKING_URL} width={width} />
