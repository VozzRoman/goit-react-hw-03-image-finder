import { ImageGalleryItem }  from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    picture: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pictureSearch !== prevProps.pictureSearch) {
      console.log('прос изменился');
      console.log(this.props.pictureSearch, 'текущий пропс');
      console.log(prevProps.pictureSearch, 'предидущий пропс');
      fetch(
        `https://pixabay.com/api/?q=${this.props.pictureSearch}&page=1&key=31129543-53dedf11cf0639b43ae86da60&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(res => {
          return this.setState({
            picture: res.hits,
          })
        });
    }
  }

  

  render() {
    return (
      <>
            {/* <h2>ImageInfo</h2> */}
        <ul>
            {this.state.picture !== null &&
            <ImageGalleryItem picture={this.state.picture}/>}   
        </ul>
    
      </>
    );
  }
}
