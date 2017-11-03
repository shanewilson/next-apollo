import * as React from "react";

import App from "../components/App";
import Header from "../components/Header";
import Submit from "../components/Submit";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";
import withData from "../lib/withData";

export default withData(props => console.log(props) || (
  <App>
    <Header pathname={props.url.pathname} />
    {props.url.query.url ? <PostDetails url={props.url.query.url}/> : <PostList />}
  </App>
));
