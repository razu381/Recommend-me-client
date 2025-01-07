import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import SingleMyQueryCard from "./SingleMyQueryCard";

function MyQueryCards() {
  let { user } = useContext(AuthContext);
  let [myqueries, setMyqueries] = useState([]);

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

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto" id="my-queries">
      <h2 className="font-bold text-3xl text-center py-10 lg:py-20">
        My Queries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
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
