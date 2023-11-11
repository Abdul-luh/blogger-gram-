import Image from "next/image";
import Link from "next/link";
import Menu from "./components/Menu/Menu";
import Featured from "./components/Featured/Featured";
import CardList from "./components/CardList/CardList";
import CategoriesList from "./components/CategoriesList/CategoriesList";

export default function Home() {
	return (
		<main className="">
			<Featured />
			<CategoriesList />
			<div className="grid lg:grid-cols-7 gap-5">
				<CardList />
				<Menu />
			</div>
		</main>
	);
}
