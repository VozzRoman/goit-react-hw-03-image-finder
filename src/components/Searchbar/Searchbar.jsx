import css from '../Searchbar/SearchbarStyle.module.css';

export const Searchbar = () => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          //  autocomplete="off"
          //  autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
