import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from '../img/logoo.png'

function Footer() {
	return (
		<>
			<div className="bg-[#BF13A3] h-[108px]  w-full flex md:flex-row flex-col justify-around items-start p-20 ">
                
				<div className="p-5 ">
					
                    <div className="flex gap-6 pl-38  items-center text-center">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
							
					</div>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-[#BF13A3]">
				<h1 className=" text-gray-800 font-semibold text-xl">

					
					© 2022 All rights reserved | TheAnyhow Podcast
					
				</h1>
			</div>
		</>
	);
}

export default Footer;