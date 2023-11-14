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
			<input type="text" placeholder="Title" className=" bg-none text-2xl" />

			<div className="flex gap-5 h-[700px] text-[var(--textColor)]">
				{/* <button
					className="w-8 h-8 rounded-full bg-transparent flex justify-center items-center border-[var(--textColor)] border"
					onClick={handleOpen}>
				</button> */}
				<GrAddCircle
					// width={60}
					// height={60}
					size={60}
					onClick={handleOpen}
					className="w-8 h-8"
				/>

				{open && (
					<div>
						<button>
							<FcAddImage width={60} height={60} />
						</button>

						<button>
							<RiImageAddFill width={60} height={60} />
						</button>

						<button>
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
		</div>
	);
}
