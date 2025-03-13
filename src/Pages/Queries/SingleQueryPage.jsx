// This is single query for query page only

import React from "react";
import SingleQuery from "../../components/SingleQuery";
import { Link } from "react-router-dom";

function SingleQueryPage({ query }) {
  let { _id, recommendationCount } = query;

  return (
    <div className="bg-light-bg-1 rounded-2xl flex flex-col items-center">
      <SingleQuery query={query} key={_id} />
      <p className="-mt-5 z-50">Recommendation Count: {recommendationCount}</p>
      <Link
        to={`/queries/${_id}`}
        className="btn bg-california-600 text-white my-5"
      >
        Recomend
      </Link>
    </div>
  );
}

export default SingleQueryPage;
