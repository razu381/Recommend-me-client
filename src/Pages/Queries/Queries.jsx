import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleQueryPage from "./SingleQueryPage";

function Queries() {
  let [queries, setQueries] = useState([]);
  let [column, setColumn] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost:3000/queries")
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    let query = e.target.search.value;
    console.log(query);
    axios
      .get(`http://localhost:3000/search?q=${query}`)
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto mb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-center font-bold text-3xl my-10">Queries</h2>
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              className="border border-gray-300 rounded-lg py-2 "
            />
            <input
              type="submit"
              value="Search"
              className="bg-california-500 py-2 px-5 rounded-lg ml-2"
            />
          </form>
        </div>
        <div className="hidden md:flex gap-3 items-center justify-center">
          <h4 className="font-bold">Change layout</h4>
          <form>
            <select
              value={column}
              onChange={(e) => setColumn(e.target.value)}
              name="col"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-${column} lg:grid-cols-${column} gap-4`}
      >
        {queries.map((query) => (
          <SingleQueryPage query={query} key={query._id} />
        ))}
      </div>
    </div>
  );
}

export default Queries;
