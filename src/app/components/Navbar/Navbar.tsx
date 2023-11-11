import React from "react";
import Image from "next/image";
import fb from "@/../public/facebook.png";
import ig from "@/../public/instagram.png";
import tiktok from "@/../public/tiktok.png";
import youtube from "@/../public/youtube.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";

export default function Navbar() {
	return (
		<div className="flex justify-between h-[100px] items-center">
			<div className="hidden lg:flex flex-1 gap-4">
				<Image src={fb} width={24} height={24} alt="image" />
				<Image src={ig} width={24} height={24} alt="image" />
				{/* <Image src={moon} width={24} height={24} alt="image" /> */}
				<Image src={tiktok} width={24} height={24} alt="image" />
				<Image src={youtube} width={24} height={24} alt="image" />
			</div>
			<div className="text-2xl sm:text-3xl md:text-4xl text-left md:text-center font-bold flex-1">
				<h1>Bloggergram</h1>
			</div>
			<div className="flex text-lg flex-1 justify-end md:jsustify-cemter gap-5 items-end">
				<ThemeToggle />
				<Link className="hidden lg:block" href={"/"}>
					Homepage
				</Link>
				<Link className="hidden lg:block" href={"/"}>
					Contact
				</Link>
				<Link className="hidden lg:block" href={"/"}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
}
