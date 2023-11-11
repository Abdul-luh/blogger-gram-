"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import moon from "@/../public/moon.png";
import sun from "@/../public/sun.png";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	const currentTheme = theme === "system" ? systemTheme : theme;

	console.log(theme);

	const handleThemeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<div
			onClick={handleThemeToggler}
			className={`w-12 h-4 flex rounded-full cursor-pointer justify-between items-center relative ${
				currentTheme === "light" ? " bg-[#0f172a]" : "bg-white"
			}`}>
			<Image
				src={sun}
				onClick={() => {
					setTheme("light");
				}}
				alt="smth"
				width={19}
				height={19}
			/>

			<div
				className={
					currentTheme === "light"
						? "w-[17px] h-[17px] rounded-full shadow-lg bg-white  absolute left-[1px]}"
						: "w-[17px] h-[17px] rounded-full shadow-lg bg-[#0f172a] absolute right-[1px]"
				}></div>
			<Image
				src={moon}
				onClick={() => {
					setTheme("dark");
				}}
				alt="smth"
				width={19}
				height={19}
			/>
		</div>
	);
}
