import React from "react";
import Navbar from "./Navbar";
import img1 from "../imgs/trending-nft1.png";
import img2 from "../imgs/nft-cat.gif";
import img3 from "../imgs/trending-nft2.png";
import img4 from "../imgs/rich-apes-nft.png";
import img5 from "../imgs/trending-nft3.png";
import img6 from "../imgs/space-pirates-nft.png";

const Explore = () => {
  const nfts = [
    {
      title: "Fat Penguin #2132",
      creator: "Penguin Nfts Collection",
      image: img1,
      price: "0.012",
    },
    {
      title: "iCat #285",
      creator: "iCat Nfts",
      image: img2,
      price: "0.0085",
    },
    {
      title: "Capped Skull #251",
      creator: "Skull Collection",
      image: img3,
      price: "0.00233",
    },
    {
      title: "Rich Apes #562",
      creator: "Rich Apes Collection",
      image: img4,
      price: "0.0063",
    },
    {
      title: "Scholar Owl #3452",
      creator: "Owl Moods Collection",
      image: img5,
      price: "0.0.0082",
    },
    {
      title: "Space Pirates #356",
      creator: "Space Pirates Collection",
      image: img6,
      price: "0.0.008",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <div className="gradient-css-div-explore">
        <br></br>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex items-stretch w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn inline-block px-6 mx-1 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap ">
          {nfts.map((item) => (
            <div className="shrink-0 rounded-lg border border-solid border-black bg-white max-w-sm hover:shadow-2xl hover:shadow-balck lg:my-8 lg:mx-16 md:mx-8 md:my-6 sm:mx-4 sm:my-4 xs:mx-4 xs:my-4">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="p-6">
                <div className="flex flex-row justify-between">
                  <p className="text-gray-500 text-sm font-medium mb-4">
                    {item.creator}
                  </p>
                  <p className="text-gray-500 text-sm font-medium mb-4">
                    Price
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-gray-800 break-words text-sm font-bold ">
                    {item.title}
                  </p>
                  <p className="text-gray-800 break-words text-sm font-bold ">
                    <svg
                      className="inline w-3.5 h-3.5 mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </>
  );
};

export default Explore;
