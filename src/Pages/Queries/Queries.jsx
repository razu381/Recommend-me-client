import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleMyQueryCard from "../My Queries/SingleMyQueryCard";
import SingleQuery from "../../components/SingleQuery";

function Queries() {
  let [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/queries")
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto mb-20">
      <h2 className="text-center font-bold text-3xl my-10">Queries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {queries.map((query) => (
          <SingleQuery query={query} key={query._id} />
        ))}
      </div>
    </div>
  );
}

export default Queries;
