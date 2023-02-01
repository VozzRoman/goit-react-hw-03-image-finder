import css from '../Searchbar/SearchbarStyle.module.css';

import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleOnCange = e => {
    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.search.trim() === '') {
      alert('Введите имя коллекции');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleOnSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleOnCange}
            value={this.state.search}
            className={css.SearchFormInput}
            type="text"
            name="search"
            autoComplete="off"
            //  autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
