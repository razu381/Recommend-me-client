import React from "react";

function RecommendationTable({ recommendations }) {
  return (
    <div className="overflow-x-auto">
      <table className=" table-auto border-collapse border-spacing-4 border border-slate-200 w-full">
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecommendationTable;
