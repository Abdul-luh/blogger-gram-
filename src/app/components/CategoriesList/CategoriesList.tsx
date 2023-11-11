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

export default function CategoriesList() {
	const categories = [
		{ name: "style", img: style, col: "#57c4ff71" },
		{ name: "fashion", img: fashion, col: "#da85c731" },
		{ name: "food", img: food, col: "#7fb88133" },
		{ name: "travel", img: travel, col: "#ff795736" },
		{ name: "culture", img: culture, col: "#ffb04f45" },
		{ name: "coding", img: coding, col: "#5e4fff31" },
	];
	return (
		<div className="">
			<h2 className="lg:text-3xl md:text-2xl text-xl  font-bold my-6">
				Popular Categories
			</h2>
			<div className="grid grid-cols-6 gap-3 mb-4">
				{categories.map((cat: Categories) => (
					<div
						key={cat.name}
						className={`py-3 lg:col-span-1 md:col-span-2 sm:col-span-3 col-span-6 px-4 rounded flex items-center justify-center bg-[${cat.col}]`}>
						<Link
							href={`/blog?cat=${cat.name}`}
							className="flex items-center capitalize justify-center gap-3">
							<Image
								src={cat.img}
								className="rounded-full h-8 w-8"
								alt={cat.name}
							/>
							{cat.name}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

{
	/* <div className="py-1 px-4 rounded bg-slate-500 flex items-center justify-center">
	<Link href={"/blog?cat=style"}>
		<Image
			src={style}
			className="rounded-full h-8 w-8"
			alt="category img"
		/>
		Style
	</Link>
</div> */
}

// 57c4ff71
// da85c731
// 7fb88133
// ff795736
// ffb04f45
// 5e4fff31
