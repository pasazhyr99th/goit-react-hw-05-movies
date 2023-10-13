import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?query=${query}`);

    onSearch(query.toLowerCase());
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="enter the movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
