import React from "react";
import { Link } from "react-router-dom";

function SingleQuery({ query }) {
  let { _id, productImageURL, queryTitle, productBrand } = query;
  return (
    <Link to={`/queries/${_id}`}>
      <div className="card bg-california-300 ">
        <figure className="px-10 pt-10">
          <img src={productImageURL} alt={queryTitle} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p>Brand: {productBrand}</p>
          <h2 className="card-title">{queryTitle}</h2>
        </div>
      </div>
    </Link>
  );
}

export default SingleQuery;
