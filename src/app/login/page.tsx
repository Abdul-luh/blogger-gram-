import React from "react";

export default function login() {
	return (
		<div className="flex items-center justify-center my-10">
			<div className="p-10 rounded-xl bg-[var(--softBg)]">
				<div className="py-3 px-4 mb-6 bg-[#ff5555] text-white rounded-md">
					Sign in With Google
				</div>
				<div className="py-3 px-4 mb-6 bg-black text-white rounded-md">
					Sign in With Github
				</div>
				<div className="py-3 px-4 mb-6 bg-[#087bAE] text-white rounded-md">
					Sign in With Facebook
				</div>
			</div>
		</div>
	);
}
