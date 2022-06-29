import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { BookingLink } from './Link';
import { colors } from './../styles/variables';

const Heading = styled.h1`
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

const Location = styled.address`
  color: ${colors.darkGrey};
`;

const Avatar = styled.div`
  width: 5rem;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 50%;
`;

const Hero = () => (
  <section>
    <Heading>Face Studio<br />By Annie</Heading>
    <Card>
      <Avatar>
        <StaticImage
          src="./../images/avatar.jpg"
          alt="Annie"
          placeholder="blurred"
        />
      </Avatar>
      <Info>
        <h3>Face aesthetics specialist</h3>
        <Location>Mildura, VIC</Location>
      </Info>
    </Card>
    <StaticImage
      src="./../images/hero1.jpg"
      alt="Eyelash and brow treatment"
      placeholder="blurred"
    />
    <BookingLink text="Check Availability" />
  </section>
);

export default Hero;
