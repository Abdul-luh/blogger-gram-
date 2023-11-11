import React from "react";
import Pagination from "../Pagination/Pagination";
import coding from "@/../public/coding.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Card from "../Card/Card";

export default function CardList() {
	return (
		<div className="lg:col-span-5">
			<div>
				<h2 className="capitalize font-semibold text-3xl my-4">Recent Posts</h2>

				{/* All posts */}
				<div>
					{/* single post  */}

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Pagination />
		</div>
	);
}
