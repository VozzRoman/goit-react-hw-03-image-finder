import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    pictureSearch: '',
  };

  handleFormSubmit = serchPicture => {
    console.log(serchPicture);
    this.setState({ pictureSearch: serchPicture });
    console.log(this.state.pictureSearch);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureSearch={this.state.pictureSearch} />
      </>
    );
  }
}
