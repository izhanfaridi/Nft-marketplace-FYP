import React from "react";
import img1 from "../../imgs/nft-img1.jpg";
import img2 from "../../imgs/nft-img2.jpg";
import img3 from "../../imgs/nft-img3.JPG";
import "../styles.css";

const News = () => {
  const newsData = [
    {
      title: "Is NFT The Future?",
      desc: "Nft is termed as the art of the future. Find out more in our exclusive blog...",
      image: img1,
    },

    {
      title: "Is NFT Worth It?",
      desc: "Are NFTs worth the hefty price tag that are attached to them? Find out more in our exclusive blog...",
      image: img2,
    },

    {
      title: "NFT Sold For $69 Million",
      desc: "This might look like a Pixelated NFT but it has been sold for $69 Million. find out how...",
      image: img3,
    },
  ];

  return (
    <>
      <div className="shadow-none bg-gradient-to-tl from-blue-200 to-transparent ">
        <h1 className="text-center py-20 font-extrabold text-4xl text-red-500 underline decoration-4 underline-offset-8">
          News From The NFT World
        </h1>
        <div className="flex justify-center h-80">
          {newsData.map((e) => (
            <div
              style={{ backgroundImage: `url(${e.image})` }}
              className="mx-16 rounded bg-div h-full w-5/6 bg-cover bg-center bg-no-repeat flex flex-col justify-end bg-gradient-to-b from-black-100 to-transparent "
            >
              <div className="desc-div rounded-t-md rounded-b-md drop-shadow-2xl px-3">
                <h1 className="font-black text-red-500 text-lg mb-2 ">
                  {e.title}
                </h1>
                <p className="text-white font-thin">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-12 mb-8 py-1 px-1.5 md:text-lg font-medium rounded-md ring ring-2 ring-red-500 bg-red-500 text-gray-100 hover:bg-red-600 xs:text-sm sm:text-base lg:text-xl lg:py-1 lg:px-2">
            See More {" "}
            <svg
              className="inline relative bottom-0.5 left-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default News;
