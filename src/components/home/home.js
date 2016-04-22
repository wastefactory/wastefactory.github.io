import React, {Component} from 'react';
import { Link } from 'react-router';
import PageTitle from './../page_title';

class Home extends Component{
  render(){

    const pageInfo = {
      title: ["Hold your ", <label className="theme" key="0">horses</label>],
      description: "Working on it!"
    };

    return (
      <div className="home-page">
        <PageTitle info={pageInfo}/>

        <div className="description">

        </div>
      </div>
    );
  }
}

export default Home;
