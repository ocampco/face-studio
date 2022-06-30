import React from 'react';
import Review from './Review';
import styled from 'styled-components';
import config from '../config';

const Cards = styled.div`
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  font-weight: 500;
  margin-right: 0.25rem;
`;

const reviews = [{
  image: './../images/review-meg.jpg',
  name: 'Meg',
  source: 'https://www.facebook.com/meg.humphrey.31/posts/pfbid0mZ6pTAZFxW4oyzi4z5u9dtgz73arFvdWopuBuo7qESffmpEvoyj7NgyVt8p9sSSAl',
  comment: 'Absolutely brilliant! Annie really knows her stuff. Can’t wait to book in for everything!',
}, {
  image: './../images/review-whitts.jpg',
  name: 'Whitts',
  source: 'https://www.facebook.com/whitts.oliver/posts/pfbid03CRJG9o2HWHVnVyYudUkHDEZiENsMFu3w4Qg7ntm4j7PLRqRvTgVu94giV4Bdbdpl',
  comment: 'My eyebrow and lash queen!!',
}, {
  image: './../images/review-petra.jpg',
  name: 'Petra',
  source: 'https://www.facebook.com/hejpetra101/posts/pfbid02CwuexLusx8YN4BEepbujuTf7rAyNG764EXmfGbQe1GcGo9tRT2RqM4uzsQrUC4g9l',
  comment: 'Obsessed with the lashes Annie did for me. Beautiful lash extensions and I keep getting asked who did them. Thank you!',
}]

// TODO: Use shared link
const Reviews = () => (
  <section>
    <h2 id="Reviews">Reviews</h2>
    <Cards>
    { reviews.map(
        ({ image, name, source, comment }) =>
          <Review
            key={source}
            image={image}
            name={name}
            source={source}
            comment={comment}
          />
    )}
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
