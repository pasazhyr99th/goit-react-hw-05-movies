const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="enter the movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

