import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import css from '../ImageGallery/imageGalleryStyle.module.css';
import { fecthServerApi } from 'apiService/apiServise';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    picture: [],
    loading: false,
    page: 1,
    modalVisible: false,
    image: '',
    tags: '',
    error: null,
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
        this.setState(prevState => ({
          picture: [...prevState.picture, ...res.hits],
        }));

        this.setState({ loading: false });
      }
    } catch (error) {
      console.log('App fetch is not working');
      this.setState({
        error,
      });
    }
  }

  loadMoreButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  showModal = (image, tags) => {
    this.setState(prevState => {
      return {
        modalVisible: !prevState.modalVisible,
        image,
        tags,
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
            <ImageGalleryItem
              picture={this.state.picture}
              toShowModal={this.showModal}
            />
          )}
        </ul>
        {this.state.picture.length !== 0 && (
          <Button loadMore={this.loadMoreButton} />
        )}
        {this.state.modalVisible && (
          <Modal
            img={this.state.image}
            tags={this.state.tags}
            closeModal={this.showModal}
          />
        )}
      </>
    );
  }
}
