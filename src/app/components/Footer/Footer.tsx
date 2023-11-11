import Image from "next/image";
import React from "react";
import img from "@/../public/p1.jpeg";
import fb from "@/../public/facebook.png";
import ig from "@/../public/instagram.png";
import tiktok from "@/../public/tiktok.png";
import youtube from "@/../public/youtube.png";

export default function Footer() {
	return (
		<div className="sm:flex justify-between gap-20 my-8 text-[var(--softTextColor)]">
			<div className="flex-1">
				<div className="flex items-center pb-4">
					<Image
						src={img}
						alt="image"
						className="rounded-full w-[45px] h-[45px] aspect-square"
					/>
					<h2 className="p-3 font-bold">Bloggergram</h2>
				</div>
				<div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
					nam eius laudantium quisquam, amet nisi obcaecati nobis eligendi
					repellendus, vel dolorem ut a tenetur enim voluptate provident earum
					dignissimos quaerat.
				</div>
				<div className="flex flex-1 gap-4 py-4">
					<Image src={fb} width={24} height={24} alt="image" />
					<Image src={ig} width={24} height={24} alt="image" />
					{/* <Image src={moon} width={24} height={24} alt="image" /> */}
					<Image src={tiktok} width={24} height={24} alt="image" />
					<Image src={youtube} width={24} height={24} alt="image" />
				</div>
			</div>

			<div className="flex-1 sm:mt-0 mt-20 grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
				<ul className="">
					<h3 className="font-bold py-2">Links</h3>
					<li>Homepage</li>
					<li>Blog</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<ul className="">
					<h3 className="font-bold py-2">Tags</h3>
					<li>Styles</li>
					<li>Fashion</li>
					<li>Coding</li>
					<li>Travels</li>
				</ul>
				<ul className="">
					<h3 className="font-bold py-2">Socials</h3>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Tiktok</li>
					<li>Youtube</li>
				</ul>
			</div>
		</div>
	);
}
