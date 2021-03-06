import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from './../styles/variables';

const Section = styled.section`
  padding-bottom: 0;
`;

const Heading = styled.h1`
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.div`
  width: 6rem;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 50%;
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

const HeroImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
`;

// TODO: Optimise assets
const Hero = () => (
  <Section>
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
    <HeroImage>
      <StaticImage
        src="./../images/hero1.jpg"
        alt="Eyelash and brow treatment"
        placeholder="blurred"
      />
    </HeroImage>
  </Section>
);

export default Hero;
