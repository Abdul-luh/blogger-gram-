"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function AuthLinks() {
	const [open, setOpen] = useState(false);

	// TEMPORARY LOGIN STATUS
	const status = true;
	return (
		<>
			{status ? (
				<>
					<Link href="/write">Write</Link>
					<span className="text-">Logout</span>
				</>
			) : (
				<Link href={"/login"}>Login</Link>
			)}
			<div
				className="text-[var(--textColor) lg:hidden cursor-pointer"
				onClick={() => setOpen(!open)}>
				<AiOutlineMenu className="text-[var(--textColor)" />
			</div>
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
					{status ? (
						<>
							<Link href="/write">Write</Link>
							<span className="text-">Logout</span>
						</>
					) : (
						<Link href={"/login"}>Login</Link>
					)}
				</div>
			)}
		</>
	);
}
