import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import SingleMyQueryCard from "./SingleMyQueryCard";
import { Link } from "react-router-dom";

function MyQueryCards() {
  let { user } = useContext(AuthContext);
  let [myqueries, setMyqueries] = useState([]);
  let [column, setColumn] = useState(3);

  console.log(column);

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/my-queries",
        { email: user?.email },
        { withCredentials: true }
      )
      .then((res) => setMyqueries(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  if (myqueries.length === 0) {
    return (
      <div className="lg:max-w-6xl mx-5 lg:mx-auto" id="my-queries ">
        <h2 className="font-bold text-3xl text-center py-10 lg:py-20">
          No queries was found.{" "}
          <Link to="/add-query" className="text-california-600">
            Add query now
          </Link>
        </h2>
      </div>
    );
  }

  function handleLayout(e) {
    e.preventDefault();
    let col = e.target.col;
    console.log(col);
  }

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto" id="my-queries">
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl text-center py-10 lg:py-20">
          My Queries
        </h2>
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
        className={`grid grid-cols-${column} md:grid-cols-${column} gap-5 mb-10`}
      >
        {myqueries.map((query) => {
          let { _id } = query;
          return (
            <SingleMyQueryCard
              key={_id}
              query={query}
              myqueries={myqueries}
              setMyqueries={setMyqueries}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyQueryCards;
