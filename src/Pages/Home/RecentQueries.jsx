import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleQuery from "../../components/SingleQuery";
import { FaThumbsUp } from "react-icons/fa";
import Divider from "../../components/Divider";

function RecentQueries() {
  let [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("https://recommend-me-server.vercel.app/queries?limit=6")
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-20">
      <h2 className="font-bold text-california-900 text-3xl text-center pt-10">
        Recent Queries
      </h2>
      <Divider />
      {queries.length === 0 ? (
        <h2 className="font-bold text-red-600 text-center py-5">
          No queries available
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {queries.map((query) => {
            return <SingleQuery key={query._id} query={query} />;
          })}
        </div>
      )}
    </div>
  );
}

export default RecentQueries;
