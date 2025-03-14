import React from "react";
import { Link } from "react-router-dom";
import MyQueryCards from "./MyQueryCards";

function MyQueries() {
  return (
    <div>
      <section className="bg-dark-bg text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className=" text-3xl font-extrabold  sm:text-5xl">
              Add your queries &
              <span className="sm:block text-california-600">
                get amazing recommendations from our community
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/add-query"
                className="block w-full rounded border border-california-600 bg-california-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              >
                Add Query
              </Link>

              <a
                href="#my-queries"
                className="block w-full rounded border border-california-600 px-12 py-3 text-sm font-medium text-white hover:bg-california-600 focus:outline-none focus:ring active:bg-california-500 sm:w-auto"
              >
                See your queries
              </a>
            </div>
          </div>
        </div>
      </section>

      <MyQueryCards />
    </div>
  );
}

export default MyQueries;
