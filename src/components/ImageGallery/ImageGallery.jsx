import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import css from '../ImageGallery/imageGalleryStyle.module.css';
import { fecthServerApi } from 'apiService/apiServise';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    picture: null,
    loading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        this.props.pictureSearch !== prevProps.pictureSearch ||
        this.state.page !== prevState.page
      ) {
        console.log(prevState.page, 'предидущяя страниц');
        console.log(this.state.page, 'текущяя страница');
        console.log('пропс изменился');
        console.log(this.props.pictureSearch, 'текущий пропс');
        console.log(prevProps.pictureSearch, 'предидущий пропс');
        this.setState({ loading: true });
        const res = await fecthServerApi(
          this.props.pictureSearch,
          this.state.page
        );
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

  loadMoreButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

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
        {this.state.picture !== null && (
          <Button loadMore={this.loadMoreButton} />
        )}
      </>
    );
  }
}
