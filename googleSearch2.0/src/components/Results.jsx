import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactPlayer from "react-player";
import { Hourglass } from "react-loader-spinner";

function Results({ type, query }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchSearchData() {
    setLoading(true);
    const url = "https://google-api31.p.rapidapi.com/";
    let options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_GOOGLE_API_KEY,
        "x-rapidapi-host": "google-api31.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    if (type === "all") {
      options = {
        ...options,
        body: {
          text: query,
          safesearch: "off",
          timelimit: "",
          region: "in-en",
          max_results: 20,
        },
      };
      try {
        console.log(url+'websearch',options);
        // const response = await fetch(url + "websearch", options);
        // console.log(response);
        // const responseData = await response.text();
        // console.log(responseData);
        // setData(responseData?.result);
      } catch (err) {
        console.error(err);
      }
    } else if (type === "news") {
      options = {
        ...options,
        body: {
          text: query,
          region: "in-en",
          max_results: 25,
        },
      };
      try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        setData(responseData?.news);
      } catch (err) {
        console.error(err);
      }
    } else if (type === "images") {
      options = {
        ...options,
        body: {
          text: query,
          safesearch: "off",
          region: "in-en",
          color: "",
          size: "",
          type_image: "",
          layout: "",
          max_results: 100,
        },
      };
      try {
        const response = await fetch(url + "imagesearch", options);
        const responseData = await response.json();
        setData(responseData?.result);
      } catch (err) {
        console.error(err);
      }
    } else if (type === "videos") {
      options = {
        ...options,
        body: {
          text: query,
          safesearch: "off",
          timelimit: "",
          duration: "",
          resolution: "",
          region: "in-en",
          max_results: 50,
        },
      };
      try {
        const response = await fetch(url + "videosearch", options);
        const responseData = await response.json();
        setData(responseData?.result);
      } catch (err) {
        console.error(err);
      }
    }
    setLoading(false);
  }


  useEffect(() => {
    fetchSearchData();
  }, [query, type]);

  console.log(data);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  } else if (type === "all") {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <Link to={item.href}>
                <p className="text-sm text-zinc-600">{item.href}</p>
                <h2 className="text-blue-600 hover:underline text-xl">
                  {item.title}
                </h2>
              </Link>
              <p className="text-sm">{item.body}</p>
            </div>
          ))}
      </>
    );
  } else if (type === "news") {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index} className="flex gap-4">
              <Link to={item?.url}>
                <p className="text-sm mb-1">{item?.source}</p>
                <h2 className="text-blue-800 font-semibold hover:underline text-xl">
                  {item?.title}
                </h2>
                <p className="text-base my-3">{item.body}</p>
                <span className="block text-sm text-gray-600">
                  {" "}
                  {moment(item.data).fromNow()}{" "}
                </span>
              </Link>
              <div className="max-h-32 max-w-40  ">
                <img
                  src={item?.image}
                  alt={item.title}
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
      </>
    );
  } else if (type === "images") {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index} className="">
              <Link to={item?.url}>
                <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden mb-2">
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-700">{item?.source}</p>
                <p className="text-sm text-nowrap truncate">{item?.title}</p>
              </Link>
            </div>
          ))}
      </>
    );
  } else if (type == "videos") {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <ReactPlayer url={item?.content} width={250} height={220} />
            </div>
          ))}
      </>
    );
  }
}

export default Results;
