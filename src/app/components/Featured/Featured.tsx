import Image from "next/image";
import React from "react";
import postImage from "@/../public/p1.jpeg";

export default function Featured() {
	return (
		<div className=" mt-16 ">
			<h1 className=" text-6xl font-thin">
				<b className="font-bold">Hey, Bloggergram here!</b> Discover my stories
				and creative ideas.
			</h1>
			<div className="flex items-center mt-32 justify-center gap-12">
				<div className="hidden md:block relative ">
					<Image
						src={postImage}
						objectFit="cover"
						width={350}
						height={600}
						alt="Post Image"
					/>
				</div>
				<div className="flex-1 flex flex-col font-thin gap-5">
					<h1 className="text-4xl ">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, dolor.
					</h1>
					<p className="text-xl text-[var(--softTextColor)]">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
						quibusdam dolore animi ut quod aperiam ipsam natus cumque totam
						ratione repellat, facere, eaque nesciunt adipisci temporibus cumque
						explicabo eum! Unde laborum tempore adipisci?
					</p>
					<button className="rounded-md text-[var(--bg)] bg-[var(--textColor)] px-4 py-2 w-fit cursor-pointer hover:text-[var(--textColor)] hover:bg-[var(--bg)] hover:border-[var(--textColor)] border transition ease-in duration-200">
						Read More
					</button>
				</div>
			</div>
		</div>
	);
}
