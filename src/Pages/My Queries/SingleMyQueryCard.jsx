import React from "react";
import SingleQuery from "../../components/SingleQuery";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function SingleMyQueryCard({ query, myqueries, setMyqueries }) {
  let { _id, productImageURL, queryTitle, productBrand } = query;

  function handleDelete(id) {
    let remainingData = myqueries.filter((query) => query._id != id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this query!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://recommend-me-server.vercel.app/my-queries/${id}`)
          .then((res) => {
            console.log(res.data);
            setMyqueries(remainingData);
          })
          .catch((err) => console.log(err));
        Swal.fire("Deleted!");
      }
    });
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
