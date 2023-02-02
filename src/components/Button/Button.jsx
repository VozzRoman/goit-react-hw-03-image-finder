import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button onClick={this.props.loadMore} className="galleryButton">
        Load More
      </button>
    );
  }
}
