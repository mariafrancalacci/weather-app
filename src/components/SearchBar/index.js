function SearchBar({ setSearchText }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your city weather..."
        onChange={(event) => setSearchText(event.target.value)}
        className="bg-background-300 rounded-l px-32 py-4"
      />
    </div>
  );
}

export default SearchBar;
