import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleQuery from "../../components/SingleQuery";

function RecentQueries() {
  let [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/queries?limit=6")
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="py-20">
      <h2 className="font-bold text-3xl text-center py-10">Recent Queries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {queries.map((query) => {
          return <SingleQuery key={query._id} query={query} />;
        })}
      </div>
    </div>
  );
}

export default RecentQueries;
