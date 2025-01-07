import React from "react";
import SingleQuery from "../../components/SingleQuery";
import { Link } from "react-router-dom";
import axios from "axios";

function SingleMyQueryCard({ query, myqueries, setMyqueries }) {
  let { _id, productImageURL, queryTitle, productBrand } = query;

  function handleDelete(id) {
    let remainingData = myqueries.filter((query) => query._id != id);

    axios
      .delete(`http://localhost:3000/my-queries/${id}`)
      .then((res) => {
        console.log(res.data);
        setMyqueries(remainingData);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="bg-california-300 rounded-xl">
      <SingleQuery key={_id} query={query} />
      <div className="flex justify-center items-center flex-col lg:flex-row gap-2 pb-10 rounded-lg px-3">
        <Link
          to={`/queries/${_id}`}
          className="btn bg-california-700 hover:bg-california-900 text-white w-full lg:w-fit"
        >
          View Details
        </Link>
        <Link
          to={`/update-query/${_id}`}
          className="btn bg-california-700 hover:bg-california-900 text-white w-full lg:w-fit"
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-california-700 hover:bg-california-900 text-white w-full lg:w-fit"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleMyQueryCard;
