import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";

function PostCard({ $id: id, title, featuredImage}) {
  return (
    <Link to={`/post/${id}`}>
      <div className="full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <div>
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
