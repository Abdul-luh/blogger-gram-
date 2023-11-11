"use client";
import React from "react";
import Image from "next/image";
import Menu from "../components/Menu/Menu";
import Posts from "../components/Posts/Posts";
import postImage from "@/../public/p1.jpeg";
import Comments from "../components/Comments/Comments";
import Link from "next/link";

export default function singlePage() {
	const status = "authenticated";
	return (
		<div>
			<div className="flex items-center py-4 gap-20">
				{/* text container  */}
				<div className="flex-1">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>

					{/* user info  */}
					<div className="flex gap-4 items-center mt-24">
						{/* user image  */}
						<div className="hidden md:block relative ">
							<Image
								src={postImage}
								objectFit="cover"
								width={40}
								height={40}
								alt="user Image"
								className="rounded-full aspect-square"
							/>
						</div>

						{/* user name and date  */}
						<div className="text-[var(--softText-color)]">
							<p>William Randolph</p>
							<p>20 April 2023</p>
						</div>
					</div>
				</div>

				{/* post image */}
				<div className="hidden md:block  relative h-[350px] rounded-xl bg-slate-500 flex-1">
					{/* <Image
						src={postImage}
						objectFit="cover"
						width={850}
						height={100}
						alt="Post Image"
						className="rounded-xl object-fill"
					/> */}
				</div>
			</div>
			<div className="grid lg:grid-cols-7 gap-5">
				<div className="lg:col-span-5">
					<Posts />

					{status === "authenticated" ? (
						<Comments />
					) : (
						<Link href={"/Login"}>Login to write a comment</Link>
					)}
				</div>
				<Menu />
			</div>
		</div>
	);
}
