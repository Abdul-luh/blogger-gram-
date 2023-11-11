import React from "react";
import Link from "next/link";
import Image from "next/image";
import post from "@/../public/p1.jpeg";

export default function Card() {
	return (
		<div className="flex justify-center gap-14 my-10 items-center">
			{/* post image container  */}
			<div className="relative hidden md:block max-w-[300px] max-h-[300px ]">
				<Image alt="smth" className="object-cover" src={post} />
			</div>

			{/* text container  */}
			<div className="flex flex-col gap-[30px]">
				<div>
					<span className="text-[gray]">11.02.2023 - </span>
					<span className=" text-[crimson] ">CULTURE</span>
				</div>
				<Link href={"/"}>
					<h3 className="text-2xl font-semibold">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
						quibusdam dolore animiem
					</h3>
				</Link>

				<p className="text-[var(--softTextColor)] font-thin text-lg">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
					deserunt, tenetur quisquam omnis accusamus hic aperiam labore suscipit
					dignissimos incidunt quos, sit explicabo ut enim voluptates voluptate
					modi maiores dolores?
				</p>
				<Link
					href={"/"}
					className="underlined capitalize border-b border-solid border-b-[crimson] w-max p-2">
					read more
				</Link>
			</div>
		</div>
	);
}
