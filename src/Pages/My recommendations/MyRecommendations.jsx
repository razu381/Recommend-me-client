import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

function MyRecommendations() {
  let { user } = useContext(AuthContext);
  let [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://recommend-me-server.vercel.app/recommended-by-me/${user.email}`
      )
      .then((res) => setRecommendations(res.data))
      .then((err) => console.log(err));
  }, []);

  function deleteRecommendation(id) {
    let remainingData = recommendations.filter(
      (recommendation) => recommendation._id != id
    );

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
          .delete(
            `https://recommend-me-server.vercel.app/recommendations/${id}`
          )
          .then((res) => {
            console.log(res.data);
            setRecommendations(remainingData);
          })
          .catch((err) => console.log(err));
        Swal.fire("Deleted!");
      }
    });
  }

  if (recommendations.length === 0) {
    return (
      <h2 className="text-center font-bold text-2xl py-5">
        You haven't recommended yet
      </h2>
    );
  }

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto my-20 ">
      <h2 className="font-bold text-2xl text-center py-10">
        My Recommendations
      </h2>
      <div className="overflow-x-auto">
        <table className="border-collapse border-spacing-4 border border-slate-200 table-auto w-full">
          <thead>
            <tr>
              <th className="border border-california-300 py-2 text-center">
                Title
              </th>
              <th className="border border-california-300 py-2 text-center">
                Alternative to
              </th>
              <th className="border border-california-300 py-2 text-center">
                Time
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((recommendation) => {
              let { _id, title, productName, queryTitle } = recommendation;
              return (
                <tr key={_id}>
                  <td className="border border-california-300 p-2">{title}</td>
                  <td className="border border-california-300 p-2">
                    {productName}
                  </td>
                  <td className="border border-california-300 p-2">
                    {queryTitle}
                  </td>
                  <td className="border border-california-300 p-2">
                    <button
                      onClick={() => deleteRecommendation(_id)}
                      className="bg-california-500 px-5 "
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyRecommendations;
