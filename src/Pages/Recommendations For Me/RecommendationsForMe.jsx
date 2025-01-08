import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import RecommendationTable from "../../components/RecommendationTable";

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
  if (recommendations.length === 0) {
    return (
      <h2 className="text-center font-bold text-2xl py-5">
        There is no recommendatinos for you
      </h2>
    );
  }
  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto my-20">
      <h2 className="font-bold text-2xl text-center py-10">
        Recommendations for me
      </h2>
      <RecommendationTable recommendations={recommendations} />
    </div>
  );
}

export default RecommendationsForMe;
