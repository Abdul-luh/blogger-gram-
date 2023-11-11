"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
const ThemeContext = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<>
				<div className="min-h-screen bg-[var(--bg)] text-[var(--textColor)] ">
					<div className="mx-auto px-2 md:px-4 sm:max-w-[500px] md:max-w-[700px] sm:px-10 lg:max-w-[900px] xl:max-w-[1200px]">
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</>
		);

	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	);
};

export default ThemeContext;
