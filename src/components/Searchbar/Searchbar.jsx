import css from '../Searchbar/SearchbarStyle.module.css';
import { Formik, Form } from 'formik';

const initialValues = {
  search: '123',
};

export const Searchbar = () => {
  const handleSubmit = (value, actions) => {
    console.log(value);
    console.log(actions);
  };
  return (
    <header className={css.Searchbar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="search"
            //  autocomplete="off"
            //  autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
