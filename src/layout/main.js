import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import BlogPage from '../pages/blog';
import PicturePage from '../pages/picture';
import VideoPage from '../pages/video';

export default class Main extends React.Component {
  render() {
    return (
        <main>
          <Switch>
            <Redirect from='/blog' to='/'/>
            <Route exact path="/" component={BlogPage} />
            <Route path="/picture" component={PicturePage} />
            <Route path="/video" component={VideoPage} />
          </Switch>
        </main>
    )
  }
}