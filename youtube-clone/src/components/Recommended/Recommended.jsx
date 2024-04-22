import React, { useEffect, useState } from 'react'
import './recommendent.css'
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';
function Recommended({categoryId}) {
    const [apiData,setApiData] = useState([]);

    async function fetchData(){
        const relatedVideos_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        const response = await fetch(relatedVideos_Url)
        const data = await response.json();
        setApiData(data.items)
    }

    useEffect(() => {
        fetchData();
    },[])


  return (
    <div className='recommended'>
        {
        apiData.map((item,index) =>
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
        </Link>
        )
        }
    </div>
  )
}

export default Recommended
