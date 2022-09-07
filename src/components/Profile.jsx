import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import nfts from "./Data";
import { nfts2 } from "./Data";
import Footer from "./HomeComponents/Footer";
import noneListed from "../imgs/noneListed.svg";

const Profile = () => {
    return (
        <>
            <Navbar></Navbar>

            {nfts.length === 0 ? (
                <>
                    <div className="flex py-10 flex-col w-full h-full">
                        <img src={noneListed} alt="nothing listed" className="self-center w-1/3 h-1/3" ></img>
                        <p className="self-center font-semibold mt-10 mb-5 text-gray-700 tracking-wide mx-3 lg:text-lg md: text-normal sm:text-md">You haven't listed any NFTs yet, we're sure you're thinking about a groundbreaking idea!</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="gradient-css-div-explore">
                        <br></br>
                        <div>
                            <p className="font-bold tracking-wide mx-3 lg:text-3xl md: text-2xl sm:text-xl">
                                Your Listed NFTs:
                            </p>
                        </div>
                        <div className="flex justify-center flex-wrap ">
                            {nfts.map((item) => (
                                <NavLink className="productLink" to={item.id} key={item.id}>
                                    <div className="shrink-0 rounded-lg border border-solid border-black bg-white max-w-sm hover:shadow-2xl hover:shadow-balck lg:my-8 lg:mx-16 md:mx-8 md:my-6 sm:mx-4 sm:my-4 xs:mx-4 xs:my-4">
                                        <img
                                            className="rounded-t-lg"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <div className="p-6">
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
                                            <div className="flex flex-col pt-3">
                                                <button className="text-white font-bold bg-red-600 rounded-md p-2 self-center ring-1 ring-gray-700 hover:bg-white hover:text-red-600 hover:ring-red-600">Cancel Listing</button>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="flex flex-col" >
                        <div className="details-div mt-3 px-4 py-2 rounded-md border border-gray-400 w-2/5 self-center">
                            <p className="font-bold text-green-400 lg:text-2xl md:text-xl sm:text-lg">Current Proceeds</p>
                            <div className="flex flex-row my-3">
                                <p className="font-semibold lg:text-lg md:text-base sm:text-sm">Current Amount:</p>
                                <p className="px-2 lg:text-lg md:text-base sm:text-sm text-green-400 font-bold">500 <svg
                                    className="inline w-3.5 h-3.5 mb-1 stroke-red-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                </svg></p>
                            </div>
                                <div className="flex flex-col py-2">
                                    <button className="text-white font-bold bg-green-500 rounded-md p-2 self-center ring-1 ring-gray-700 hover:bg-white hover:text-green-500 hover:ring-green-500">Withdraw Proceeds</button>
                                </div>
                        </div>
                        </div>
                        <br />
                    </div>
                </>
            )}

            <hr />
            <Footer></Footer>
        </>
    );
};

export default Profile;
