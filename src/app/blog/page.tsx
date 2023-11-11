import Image from "next/image";
import Link from "next/link";
import CardList from "../components/CardList/CardList";
import Menu from "../components/Menu/Menu";
import CategoriesList from "../components/CategoriesList/CategoriesList";

export default function Blog() {
	return (
		<main className="">
			<h1 className={`bg-[#57c4ff71] py-3 px-8 text-center text-3xl font-bold`}>
				Style Blog
			</h1>
			<div className="grid lg:grid-cols-7 gap-5">
				<CardList />
				<Menu />
			</div>
		</main>
	);
}
