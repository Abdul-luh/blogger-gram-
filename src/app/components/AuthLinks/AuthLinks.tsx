"use client";
import Link from "next/link";
import { useState, MouseEventHandler } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks() {
	const [open, setOpen] = useState(false);
	const { status } = useSession();
	console.log(status);

	type SignOutClickHandler = MouseEventHandler<HTMLSpanElement>;

	const handleSignOut: SignOutClickHandler = async (event) => {
		try {
			await signOut();
		} catch (error) {
			// Handle sign-out errors if needed
			console.error("Sign-out error:", error);
		}
	};

	// TEMPORARY LOGIN STATUS
	// let status: string = "authenticated";
	return (
		<>
			{status === "authenticated" ? (
				<>
					<Link href="/write">Write</Link>
					<span onClick={handleSignOut} className="cursor-pointer">
						Logout
					</span>
				</>
			) : (
				<Link href={"/login"}>Login</Link>
			)}
			<div
				className="text-[var(--textColor) lg:hidden cursor-pointer"
				onClick={() => setOpen(!open)}>
				<AiOutlineMenu className="text-[var(--textColor)" />
			</div>

			{/* mobile view  */}
			{open && (
				<div className="absolute top-[100px] left-0 h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center bg-[var(--bg)] gap-20 text-4xl">
					<Link className="block lg:hidden" href={"/"}>
						Homepage
					</Link>
					<Link className="block lg:hidden" href={"/"}>
						Contact
					</Link>
					<Link className="block lg:hidden" href={"/"}>
						About
					</Link>
					{status === "unauthenticated" ? (
						<>
							<Link href="/write">Write</Link>
							<span onClick={handleSignOut} className="cursor-pointer">
								Logout
							</span>
						</>
					) : (
						<Link href={"/login"}>Login</Link>
					)}
				</div>
			)}
		</>
	);
}
