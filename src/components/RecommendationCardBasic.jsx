import React from "react";

function RecommendationCardBasic({ recommendation }) {
  console.log(recommendation);
  let { productImage, title, reason, date, recommenderName } = recommendation;
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white mb-5">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-4">
        <img src={productImage} className="size-24 rounded-lg object-cover" />
        <div>
          <h3 className="font-medium sm:text-lg">{title}</h3>

          <p className="line-clamp-2 text-sm text-gray-700">{reason}</p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>

              <p className="text-xs">{date}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Recommended by: {recommenderName}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RecommendationCardBasic;
