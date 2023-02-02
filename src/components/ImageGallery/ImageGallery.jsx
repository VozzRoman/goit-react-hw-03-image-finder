import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import css from '../ImageGallery/imageGalleryStyle.module.css';
import { fecthServerApi } from 'apiService/apiServise';

export class ImageGallery extends Component {
  state = {
    picture: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (this.props.pictureSearch !== prevProps.pictureSearch) {
        console.log('прос изменился');
        console.log(this.props.pictureSearch, 'текущий пропс');
        console.log(prevProps.pictureSearch, 'предидущий пропс');
        this.setState({ loading: true });
        const res = await fecthServerApi(this.props.pictureSearch);
        console.log(res.hits);
        this.setState({
          picture: res.hits,
        });
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        {/* <h2>ImageInfo</h2> */}

        <ul className={css.ImageGallery}>
          {this.state.loading && <Loader />}
          {this.state.picture !== null && (
            <ImageGalleryItem picture={this.state.picture} />
          )}
        </ul>
      </>
    );
  }
}
