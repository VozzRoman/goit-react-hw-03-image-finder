import { Component } from 'react';
import css from '../Modal/ModalStyle.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('close');
      this.props.closeModal();
    }
  };

  render() {
    const { img } = this.props;
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}
