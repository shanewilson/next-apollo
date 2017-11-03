import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import ErrorMessage from "./ErrorMessage";

function PostDetails({
  data: { loading, error, Post }
}) {
  if (error) return <ErrorMessage message="Error loading post." />;
  if (Post) {
    return (
      <section>

        <h1>        {Post.title}</h1>


        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    );
  }
  return <div>Loading</div>;
}

const PostQuery = gql`
  query Post($url: String!) {
    Post(url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostDetails)
export default graphql(PostQuery, {
  options: {
    url: 'title-2'
  },
  props: ({ data }) => ({ data })
})(PostDetails);
