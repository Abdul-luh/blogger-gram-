"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Login() {
	const { data, status } = useSession();
	console.log(data, status);

	return (
		<div className="flex items-center justify-center my-10">
			<div className="p-10 rounded-xl bg-[var(--softBg)] shadow-md">
				<div
					onClick={() => signIn("google")}
					className="py-3 px-4 mb-6 bg-[#ff5555] text-center text-white rounded-md">
					Sign in With Google
				</div>
				<div className="py-3 px-4 mb-6 bg-black text-white text-center rounded-md">
					Sign in With Github
				</div>
				<div className="py-3 px-4 mb-6 bg-[#087bAE] text-white text-center rounded-md">
					Sign in With Facebook
				</div>
			</div>
		</div>
	);
}
