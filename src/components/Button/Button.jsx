import { Component } from 'react';
import css from '../Button/ButtonStyle.module.css';

export class Button extends Component {
  render() {
    return (
      <div className={css.buttonFlex}>
        <button onClick={this.props.loadMore} className={css.Button}>
          Load More
        </button>
      </div>
    );
  }
}
