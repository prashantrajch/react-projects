import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { TbFilterFilled } from "react-icons/tb";
import { IoApps } from "react-icons/io5";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { useState } from "react";
import InputElem from "./components/InputElem";

const language = [
  "हिन्‍दी",
  "বাংলা",
  "తెలుగు",
  "मराठी",
  "ગુજરાતી",
  "தமிழ்",
  "ಕನ್ನಡ",
  "മലയാളം",
  "ਪੰਜਾਬੀ",
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue){
      navigate(`/search?q=${searchValue}&type=all`);
    }
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <nav className="navbar flex items-center justify-between text-sm h-[60px] p-[6px]">
        <div className="left">
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            About
          </Link>
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            Store
          </Link>
        </div>
        <div className="right flex items-center">
          <Link to={"/"} className="texft-sm ml-4 mr-1 pb-1 hover:underline">
            Gmail
          </Link>
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            Images
          </Link>
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            <div className="inline-flex items-center justify-center p-2 h-10 w-10 rounded-full hover:bg-[#F0F1F1] duration-200">
              <TbFilterFilled />
            </div>
          </Link>
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            <div className="inline-flex items-center justify-center p-2 h-10 w-10 rounded-full hover:bg-[#F0F1F1] duration-200">
              <IoApps />
            </div>
          </Link>
          <Link to={"/"} className="text-sm ml-4 mr-1 pb-1 hover:underline">
            <div className="inline-flex items-center justify-center p-2 h-10 w-10 rounded-full bg-[#F0F1F1] duration-200"></div>
          </Link>
        </div>
      </nav>
      <div className="search-logo min-h-40 h-[calc(100%-560px)] max-h-72 text-center">
        <h1 className="text-9xl font-sans">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-orange-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h1>
      </div>
      <div className="max-h-40 p-5 max-w-[584px] pt-[6x] relative mx-auto w-full ">
        <form action="" onSubmit={handleSubmit}>
          <div className="border-[#dfe1e5] border-1 border-solid rounded-3xl min-h-[44px] relative ">
            <div className="search-bar flex items-center border-2 border-zinc-100 text-sm h-[46px] rounded-3xl flex-1 ">
              <div className="pr-3 pl-3 text-lg ">
                <IoIosSearch />
              </div>
              <div  className="flex-[100%] leading-6 h-full ">
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
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
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
            <div className="btns h-[70px] pt-[18px]">
              <center>
                <button
                  type="submit"
                  className="bg-[#f8f9fa] border-[#f8f9fa] rounded text-sm mx-1 my-3 px-4 h-9 min-w-14 text-center cursor-pointer leading-7 hover:shadow hover:border-[#dadce0] "
                >
                  Google Search
                </button>
                <button
                  type="submit"
                  className="bg-[#f8f9fa] border-[#f8f9fa] rounded text-sm mx-1 my-3 px-4 h-9 min-w-14 text-center cursor-pointer leading-7 hover:shadow hover:border-[#dadce0] "
                >
                  I'm Felleing Lucky
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-grow flex-shrink-0 text-center text-[#474747] text-sm ">
        Google offered in: &nbsp;
        {language.map((item) => (
          <Link
            key={item}
            to={"/"}
            className="text-[#1a0dab] hover:underline px-1"
          >
            {item}
          </Link>
        ))}
      </div>
      <footer>
        <h4 className="py-[15px] px-[30px] border-b border-[#dadce0] bg-[#F2F2F2] ">
          India
        </h4>
        <hr />
        <div className="flex items-center justify-between bg-[#F2F2F2] px-5 ">
          <div className="flex">
            <Link className="p-4 block">Adverising</Link>
            <Link className="p-4 block">Business</Link>
            <Link className="p-4 block">How Search Works</Link>
          </div>
          <div className="flex">
            <Link className="p-4 block">Privacy</Link>
            <Link className="p-4 block">Terms</Link>
            <Link className="p-4 block">Settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
