import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import BookingLink from './BookingLink';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding: 2rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const Username = styled.h3`
  margin-bottom: 0.75rem;
`;

const Avatar = styled.div`
  float: left;
  width: 5rem;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 50%;
`;

const Card = styled.div`
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const Contact = () => (
  <Section>
    <Heading id="Contact">Contact me</Heading>
    <Avatar>
      <StaticImage
        src="./../images/avatar.jpg"
        alt="Annie"
        placeholder="blurred"
      />
    </Avatar>
    <Card>
      <Username>facestudiobyannie</Username>
      <BookingLink text="View on Instagram" />
    </Card>
  </Section>
);

export default Contact;

