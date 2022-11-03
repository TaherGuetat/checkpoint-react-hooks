import { useState } from "react";
export function Filter({ handleFilter }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h2>Search bar</h2>
      <input type="text" onChange={handleChange} value={search} />
    </div>
  );
}
