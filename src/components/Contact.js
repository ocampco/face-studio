import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { InstagramLink, FacebookLink } from './Link';

const Card = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 8rem;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 50%;
`;

// Refactor button styling
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Contact = () => (
  <section>
    <h2 id="Contact">Contact me</h2>
    <Card>
      <Avatar>
        <StaticImage
          src="./../images/avatar.jpg"
          alt="Annie"
          placeholder="blurred"
        />
      </Avatar>
      <Info>
        <InstagramLink text="Instagram" />
        <FacebookLink text="Facebook" />
      </Info>
    </Card>
  </section>
);

export default Contact;

