import React from "react";
import style from "@/../public/style.png";
import fashion from "@/../public/fashion.png";
import food from "@/../public/travel.png";
import travel from "@/../public/travel.png";
import culture from "@/../public/culture.png";
import coding from "@/../public/coding.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Categories = {
	name: string;
	img: StaticImageData;
	col: string;
};

export default function Menu() {
	const categories = [
		{ name: "style", img: style, col: "#57c4ff71" },
		{ name: "fashion", img: fashion, col: "#da85c731" },
		{ name: "food", img: food, col: "#7fb88133" },
		{ name: "travel", img: travel, col: "#ff795736" },
		{ name: "culture", img: culture, col: "#ffb04f45" },
		{ name: "coding", img: coding, col: "#5e4fff31" },
	];

	return (
		<div className=" lg:col-span-2 ">
			<h3 className="text-[grey] mt-5">What`s hot</h3>
			<h2 className="font-bold text-3xl mb-5">Most Popular</h2>
			<div>
				{categories.map((cat: Categories) => (
					<Link href={"/"} key={cat.name}>
						<div className="flex gap-5 py-5">
							<div>
								<h4 className={`bg-[${cat.col}] rounded-2xl py-1 px-2 w-max`}>
									{cat.name}
								</h4>
								<p className="text-[var(--softTextColor)]">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
								</p>
								<div className="text-sm">
									<span>John Doe</span>
									<span className="text-[grey]"> - 10.03.2023</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* CATEGORIES */}
			<div className="my-16">
				<h3 className="text-[grey] mt-5">Discover By Topics </h3>
				<h2 className="font-bold text-3xl mb-5">Categories</h2>

				<div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
					{categories.map((cat: Categories) => (
						<div
							key={cat.name}
							className={`py-3 px-4 rounded flex items-center justify-center bg-[${cat.col}]`}>
							<Link
								href={`/blog?cat=${cat.name}`}
								className="flex items-center capitalize justify-center gap-3">
								{cat.name}
							</Link>
						</div>
					))}
				</div>
			</div>

			<div className="my-16">
				<h3 className="text-[grey] mt-5">Chosen by the Editor </h3>
				<h2 className="font-bold text-3xl mb-5">Editor`s Pick</h2>
				<div>
					{categories.map((cat: Categories) => (
						<Link href={"/"} key={cat.name}>
							<div className="flex gap-5 py-5">
								<div className="w-[150px] max-h-[150px]">
									<Image
										src={cat.img}
										alt="imgae"
										className="object-fill border-4 border-['light-grey'] rounded-full aspect-square"
									/>
								</div>
								<div>
									<h4 className={`bg-[${cat.col}] rounded-2xl py-1 px-2 w-max`}>
										{cat.name}
									</h4>
									<p className="text-[var(--softTextColor)]">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
									</p>
									<div className="text-sm">
										<span>John Doe</span>
										<span className="text-[grey]"> - 10.03.2023</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
