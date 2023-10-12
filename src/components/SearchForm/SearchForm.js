import { useState } from "react";

const SearchForm = ({ value }) => {
  const [query, setQuery] = useState('');

  // const handleInputChange = e => {
  //   setQuery(e.target.value);
  // }

  const handleSubmit = e => {
    e.preventDefault();
    value(query.toLowerCase());
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
