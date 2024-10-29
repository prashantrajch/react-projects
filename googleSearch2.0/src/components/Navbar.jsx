import { IoIosSearch, IoMdClose } from "react-icons/io";
import InputElem from "./InputElem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ type = "all", query }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchValue.trim()}&type=${type || "all"}`);
  };

  useEffect(() => {
    setSearchValue(query);
  }, [query, type]);

  return (
    <div className="p-4">
      <header className="inline-flex items-center gap-8">
        <div className="search-logo">
          <Link to={"/"}>
            <h1 className="text-2xl font-sans">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-orange-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </h1>
          </Link>
        </div>
        <div className="relative mx-auto w-full ">
          <form action="" onSubmit={handleSubmit}>
            <div className="border-[#dfe1e5] border-1 border-solid rounded-3xl min-h-[44px] relative hover:shadow-md w-[538px]">
              <div className="search-bar flex items-center border-2 border-zinc-100 text-sm h-[46px] rounded-3xl flex-1 ">
                <div className="pr-3 pl-3 text-lg ">
                  <IoIosSearch />
                </div>
                <div className="flex-[100%] leading-6 h-full ">
                  <InputElem
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                </div>

                {searchValue && (
                  <div
                    className="pr-3 pl-3 text-lg border-r-2 cursor-pointer"
                    onClick={() => setSearchValue("")}
                  >
                    <IoMdClose />
                  </div>
                )}

                <div className="pr-2 pl-2 text-lg w-[50px] cursor-pointer ">
                  <svg
                    className="goxjub"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#4285f4"
                      d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                    ></path>
                    <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                    <path
                      fill="#fbbc04"
                      d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                    ></path>
                  </svg>
                </div>
                <div className="pr-2 pl-2 text-lg w-[50px] cursor-pointer ">
                  <svg
                    className="Gdd5U"
                    focusable="false"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="none" height="192" width="192"></rect>
                    <g>
                      <circle
                        fill="#34a853"
                        cx="144.07"
                        cy="144"
                        r="16"
                      ></circle>
                      <circle
                        fill="#4285f4"
                        cx="96.07"
                        cy="104"
                        r="24"
                      ></circle>
                      <path
                        fill="#ea4335"
                        d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                      ></path>
                      <path
                        fill="#fbbc04"
                        d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </header>
      <div className="flex gap-3 mt-6 pl-28 border-b">
        <Link
          to={`/search?q=${searchValue.trim()}&type=all`}
          className={`pb-2 px-2 border-black text-[#70757a] ${
            type === "all" ? "border-b-[3px] text-black" : ""
          }`}
        >
          All
        </Link>
        <Link
          to={`/search?q=${searchValue.trim()}&type=news`}
          className={`pb-2 px-2 border-black text-[#70757a] ${
            type === "news" ? "border-b-[3px] text-black" : ""
          }`}
        >
          News
        </Link>
        <Link
          to={`/search?q=${searchValue.trim()}&type=images`}
          className={`pb-2 px-2 border-black text-[#70757a] ${
            type === "images" ? "border-b-[3px] text-black" : ""
          }`}
        >
          Images
        </Link>
        <Link
          to={`/search?q=${searchValue.trim()}&type=videos`}
          className={`pb-2 px-2 border-black text-[#70757a] ${
            type === "videos" ? "border-b-[3px] text-black" : ""
          }`}
        >
          Videos
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
