import React from 'react'
import Navigation from './navigation/navigation';
import Page from './page/page';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>eli5</h1>
        <Navigation/>
        <Page/>
      </div>
    );
  }
}
