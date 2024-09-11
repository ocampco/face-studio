import styled from 'styled-components';
import avatar from '../assets/avatar.jpg';
import hero from '../assets/hero.jpg';
import { colors } from '../styles/variables';

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

const Avatar = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
`

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
      <Avatar
        src={avatar}
        alt="Annie"
      />
      <Info>
        <h3>Face aesthetics specialist</h3>
        <Location>Mildura, VIC</Location>
      </Info>
    </Card>
    <HeroImage>
      <img
        src={hero}
        alt="Eyelash and brow treatment"
      />
    </HeroImage>
  </Section>
);

export default Hero;
