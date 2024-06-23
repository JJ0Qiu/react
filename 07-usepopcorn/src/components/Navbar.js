import { useState } from "react";

export function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResult />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function NumResult() {
  return (
    <p className="num-results">
      Found <strong>X</strong> results
    </p>
  );
}
