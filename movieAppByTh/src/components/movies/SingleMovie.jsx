import React from "react";
import { useParams} from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const SingleMovie = () => {
  const { id } = useParams();
  const {isLoading,movie,isError} = useGlobalContext()
  return <div>

  </div>;
};

export default SingleMovie;
