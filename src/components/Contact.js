import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialLink } from './Link';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding: 2rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 5rem;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Username = styled.h3`
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  color: ${colors.black};
`;

const Contact = () => (
  <Section>
    <Heading id="Contact">Contact me</Heading>
    <Card>
      <Avatar>
        <StaticImage
          src="./../images/avatar.jpg"
          alt="Annie"
          placeholder="blurred"
        />
      </Avatar>
      <Info>
        <Username>facestudiobyannie</Username>
        <SocialLink text="View on Instagram" width="100%" />
      </Info>
    </Card>
  </Section>
);

export default Contact;

