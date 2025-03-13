import React from "react";

function FAQ() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-10">
        Frquently asked questions
      </h2>

      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-bg-1 p-5 text-gray-900">
            <h2 className="font-medium">1. What is this platform about?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            This platform helps users find better product alternatives through
            community-driven recommendations. You can post queries about
            products, browse others' suggestions, and contribute your
            recommendations to help others make informed decisions.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-bg-1 p-4 text-gray-900">
            <h2 className="font-medium">
              2. How do I add a query about a product?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            To add a query, simply fill out the form on the "Add Query" page
            with the product name, brand, image URL, your query title, and the
            reason you're avoiding the product. Once submitted, your query will
            be visible to the community.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-bg-1 p-4 text-gray-900">
            <h2 className="font-medium">
              3. Can I modify or delete my queries and recommendations?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Yes! You can edit or delete your queries and recommendations anytime
            to ensure the information stays relevant and up-to-date.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-bg-1 p-4 text-gray-900">
            <h2 className="font-medium">
              4. Do I need to create an account to participate?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Yes, you need an account to post queries, add recommendations, or
            interact with the platform. This helps us maintain a safe and
            collaborative environment.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-bg-1 p-4 text-gray-900">
            <h2 className="font-medium">
              5. How are recommendations ranked or displayed?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Recommendations are displayed based on their relevance and user
            feedback. The more helpful a recommendation is, the higher it ranks
            in the list.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
