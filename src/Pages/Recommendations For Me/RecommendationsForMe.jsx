import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import RecommendationTable from "../../components/RecommendationTable";
import { FaThumbsUp } from "react-icons/fa";
import Divider from "../../components/Divider";

function RecommendationsForMe() {
  let { user } = useContext(AuthContext);
  let [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://recommend-me-server.vercel.app/recommended-for-me/${user.email}`
      )
      .then((res) => setRecommendations(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto my-5 min-h-[800px]">
      <h2 className="font-bold text-2xl lg:text-4xl text-center pt-10 text-california-600">
        Recommendations for me
      </h2>
      <Divider />
      {recommendations.length === 0 ? (
        <h2 className="text-center font-bold text-2xl py-5">
          There is no recommendatinos for you
        </h2>
      ) : (
        <RecommendationTable recommendations={recommendations} />
      )}
    </div>
  );
}

export default RecommendationsForMe;
