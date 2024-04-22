import React, { useEffect, useState } from "react";
import "./playVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {

  const {videoId} = useParams();

  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]= useState([]);

 async function fetchVideoData(){
  // Fetching Video Data
  const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
  const response = await fetch(videoDetails_url);
  const data = await response.json();
  setApiData(data.items[0])
 }

 async function fetchChannelData(){
  // Fetching Channel Data.
  const channelDetails_Url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
  const response = await fetch(channelDetails_Url);
  const data = await response.json();
  setChannelData(data.items[0])

  // Fetching Comment Data.
  const commentDetails_Url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
  const res = await fetch(commentDetails_Url);
  const da = await res.json();
  setCommentData(da.items)

 }


 useEffect(() => {
  fetchVideoData();
 },[videoId])

 useEffect(() => {
    fetchChannelData();
 },[apiData])

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData? apiData.snippet.title: 'Title Here'}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount) : '16K'} Views &bull; { apiData?moment(apiData.snippet.publishedAt).fromNow() : ''}</p>
        <div>
          <span><img src={like} alt="" /> {apiData?value_converter(apiData.statistics.likeCount): '155' }</span>
          <span><img src={dislike} alt="" /> </span>
          <span><img src={share} alt="" /> Share</span>
          <span><img src={save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData? channelData.snippet.thumbnails.default.url : ''} alt="" />
        <div>
          <p>{apiData? apiData.snippet.channelTitle : ''}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount): '1M'} Subscribers</span>
        </div>
        <button>Subscribers</button>
      </div>
      <div className="video-description">
        <p>{apiData? apiData.snippet.description.slice(0,250) : 'Description Here'}</p>
       <hr />
        <h4>{apiData? value_converter(apiData.statistics.commentCount): '102'} Comments</h4>
        {
          commentData.map((item,index) =>
        <div key={index} className="comment">
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3>
              {item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span>
            </h3>
            <p>
              {item.snippet.topLevelComment.snippet.textDisplay}
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
         )
        }
      </div>
    </div>
  );
}

export default PlayVideo;
