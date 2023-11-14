"use client";
import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FcAddImage, FcVideoFile } from "react-icons/fc";
import { RiImageAddFill } from "react-icons/ri";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function Write() {
	const [open, setOpen] = useState(true);
	const [value, setValue] = useState("");

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				className="bg-transparent border-none p-2 text-3xl placeholder:text-[#b3b3b1]"
			/>

			<div className="flex gap-5 h-[700px] text-[var(--textColor)] relative">
				<button
					className="w-10 h-10 rounded-full bg-transparent flex justify-center items-center border-[var(--textColor)] border cursor-pointer my-2"
					onClick={handleOpen}>
					<GrAddCircle
						// width={60}
						// height={60}
						size={60}
						onClick={handleOpen}
						className="w-10 h-10 text-[var(--textColor)]  "
					/>
				</button>

				{open && (
					<div className="flex gap-4 bg-[var(--bg)] absolute z-50 w-full left-12 ">
						<button className="w-10 h-10 rounded-full bg-transparent flex justify-center items-center border-[var(--textColor)] border cursor-pointer my-2">
							<FcAddImage width={60} height={60} />
						</button>

						<button className="w-10 h-10 rounded-full bg-transparent flex justify-center items-center border-[var(--textColor)] border cursor-pointer my-2">
							<RiImageAddFill width={60} height={60} />
						</button>

						<button className="w-10 h-10 rounded-full bg-transparent flex justify-center items-center border-[var(--textColor)] border cursor-pointer my-2">
							<FcVideoFile width={60} height={60} />
						</button>
					</div>
				)}
				<ReactQuill
					theme="bubble"
					value={value}
					onChange={setValue}
					placeholder="Tell Your Story"
					className="text-xl w-full"
				/>
			</div>
			<button className="absolute py-2 px-3 rounded-full top-[30px] right-5 bg-[#1a8917] cursor-pointer">
				Publish
			</button>
		</div>
	);
}
