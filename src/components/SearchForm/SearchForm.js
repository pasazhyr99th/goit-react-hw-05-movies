import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={onChange}
        placeholder="enter the movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};