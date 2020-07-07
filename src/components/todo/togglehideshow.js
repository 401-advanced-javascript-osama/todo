import React from 'react';
import { ToggleContext } from '../context/hideShow';

class Content extends React.Component {

  static contextType = ToggleContext; 

  render() {
    return (
      <>
        <button onClick={this.context.toggleStatus}>
          {this.context.status === 'show' ? 'hide' : 'show'} complete items
        </button>
      </>
    );
  }
}
export default Content;
