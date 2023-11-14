import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { ThemeProvider } from "next-themes";
import ThemeContext from "@/context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BLOGGERGRAM",
	description: "tHE BEST BLOG APP",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<ThemeContext>
						<div className="min-h-screen">
							<div className="mx-auto px-2 md:px-4 sm:max-w-[500px] md:max-w-[700px] sm:px-10 lg:max-w-[960px] xl:max-w-[1200px]">
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeContext>
				</AuthProvider>
			</body>
		</html>
	);
}
