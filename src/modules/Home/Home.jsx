import React from 'react';
import './Home.css';
import { Wrapper } from './Home.styled';
import { gql, useQuery } from '@apollo/client';

// graphql playground:
// https://gapi-browser.storyblok.com/?token=HwsawDuLR2g1sBoukqkPDQtt
const ARTICLES_QUERY = gql`
  query {
    ArticleItems(by_slugs: "articles/*") {
      items {
        name
        slug
        created_at
        content {
          BreadCrumbs
          categories {
            name
          }
          headPicture {
            filename
          }
          heading
        }
      }
      total
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  return (
    <Wrapper>
      <div className="home-container">Hello</div>
      <p>{`loading: ${loading}`}</p>
      <p>{`error: ${error}`}</p>
      <p>data: {JSON.stringify(data)}</p>
    </Wrapper>
  );
};

export default Home;
