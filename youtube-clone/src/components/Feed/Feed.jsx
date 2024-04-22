import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from 'moment'

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(videoList_Url);
    const data = await response.json();
    setData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>
            {item.snippet.title}
          </h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
