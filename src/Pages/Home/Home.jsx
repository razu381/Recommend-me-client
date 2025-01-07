import React from "react";
import Slider from "./Slider";
import RecentQueries from "./RecentQueries";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div>
      <Slider />
      <div className="lg:max-w-6xl mx-5 lg:mx-auto">
        <RecentQueries />
        <FAQ />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
