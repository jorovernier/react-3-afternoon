import React, { Component } from 'react';
import Post from './Post/Post';
import Compose from './Compose/Compose';

import './Feed.css';

export default class Feed extends Component {
  render() {
    return (
      <section className="Feed__parent">
        <Compose />
        <Post />
      </section>
    )
  }
}