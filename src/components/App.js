import React from 'react';
import Sidebar from './../containers/Sidebar';
import Feed from './../containers/Feed';
import FeedService from "./../common/FeedService";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const feedService = new FeedService();

export default class App extends React.Component {

    constructor () {
        super();

        this.state = {
            rssItems: [],
            rssFeedsTitles: []
        }
    }

    componentDidMount () {
        feedService.fetchRSS( (items, titles) => {
            console.log(items);
            console.log(titles);
            this.setState({
                rssItems: items,
                rssFeedsTitles: titles
            });
        });
    }

    render () {
        return (
          <div className="App">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12 col-md-4 text-center mt-4">
                          <Sidebar feedsTitles={this.state.rssFeedsTitles} />
                      </div>
                      <div className="col-xs-12 col-md-8 mt-4">
                          <Feed rssItems={this.state.rssItems} />
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
