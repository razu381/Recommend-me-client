import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

function AddQuery() {
  let { user } = useContext(AuthContext);
  let { email, photoURL, displayName } = user;

  function addUserDataToQuery(query) {
    query.email = email;
    query.photoURL = photoURL;
    query.displayName = displayName;
    query.date = new Date().toLocaleString();
    console.log("querydata", query);
  }
  function handleRecAdd(e) {
    e.preventDefault();

    console.log("Handled");
    let form = new FormData(e.target);
    let formData = Object.fromEntries(form.entries());
    addUserDataToQuery(formData);

    axios
      .post(
        "https://recommend-me-server.vercel.app/queries",
        { formData },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Query added sucessfully");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-10">Add Query</h2>
      <form
        id="add-query-form"
        onSubmit={handleRecAdd}
        action=""
        className="px-[20%] flex flex-col justify-center items-center gap-5 py-10"
      >
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="productBrand"
          placeholder="Product Brand"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="productImageURL"
          placeholder="Product Image URL"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
        />
        <input
          type="text"
          name="queryTitle"
          placeholder="Query Title"
          className="input input-bordered input-accent w-full max-w-xs lg:max-w-lg"
          required
        />
        <textarea
          name="boycottingReasonDetails"
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

export default AddQuery;
