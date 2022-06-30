import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from './../styles/variables';

const Card = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 0.5rem;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
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
  justify-content: space-evenly;
  width: 100%;
`;

const Username = styled.span`
  font-weight: 500;
`;

const Source = styled.a`
  color: ${colors.darkGrey};
`;

const Comment = styled.div`
  line-height: 1.5;
`;

// TODO: Use dynamic image
const Review = ({
  image,
  name,
  source,
  comment,
}) => (
  <Card>
    <User>
      <Avatar>
        <StaticImage
          src='./../images/review-meg.jpg'
          alt={name}
          placeholder="blurred"
        />
      </Avatar>
      <Info>
        <Username>{name}</Username>
        <Source
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </Source>
      </Info>
    </User>
    <Comment>{comment}</Comment>
  </Card>
);

export default Review;
