import React, { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateQuery() {
  let { user } = useContext(AuthContext);
  let id = useParams().id;
  let query = useLoaderData();
  let { email, photoURL, displayName } = user;
  let {
    productName,
    productBrand,
    productImageURL,
    queryTitle,
    boycottingReasonDetails,
    date,
  } = query;

  function addUserDataToQuery(query) {
    query.email = email;
    query.photoURL = photoURL;
    query.displayName = displayName;
    query.date = Date.now();
    console.log("querydata", query);
  }
  function handleRecAdd(e) {
    e.preventDefault();

    let form = new FormData(e.target);
    let formData = Object.fromEntries(form.entries());
    addUserDataToQuery(formData);
    console.log(formData);

    axios
      .put(
        `https://recommend-me-server.vercel.app/update-query/${id}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Query updated successfully");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-10">Update Query</h2>
      <form
        id="update-query-form"
        onSubmit={handleRecAdd}
        action=""
        className="px-[20%] flex flex-col justify-center items-center gap-5 py-10"
      >
        <input
          type="text"
          name="productName"
          defaultValue={productName}
          placeholder="Product Name"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="productBrand"
          defaultValue={productBrand}
          placeholder="Product Brand"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="productImageURL"
          defaultValue={productImageURL}
          placeholder="Product Image URL"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="queryTitle"
          defaultValue={queryTitle}
          placeholder="Query Title"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
          required
        />
        <textarea
          name="boycottingReasonDetails"
          defaultValue={boycottingReasonDetails}
          placeholder="Boycotting Reason in Detail"
          className="textarea textarea-bordered textarea-sm w-full max-w-xs lg:max-w-lg"
        ></textarea>

        <input
          type="submit"
          value="Submit"
          className="btn bg-california-500 hover:bg-california-800 px-10"
        />
      </form>
    </div>
  );
}

export default UpdateQuery;
