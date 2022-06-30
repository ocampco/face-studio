import React from 'react';
import Comments from './Comments';
import styled from 'styled-components';
import config from '../config';

const Cards = styled.div`
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  font-weight: 500;
  margin-right: 0.25rem;
`;

// TODO: Use shared link component
const Reviews = () => (
  <section>
    <h2 id="Reviews">Reviews</h2>
    <Cards>
      <Comments />
    </Cards>
    <Link
      href={config.FB_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Show more
    </Link>&#62;
  </section>
);

export default Reviews;
