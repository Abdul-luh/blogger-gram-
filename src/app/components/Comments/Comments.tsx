import React from "react";
import postImage from "@/../public/p1.jpeg";
import Image, { StaticImageData } from "next/image";

interface PostComments {
	userImg: StaticImageData;
	userName: string;
	datePosted: string;
	userComment: string;
}

export default function Comments() {
	const postComments = [
		{
			userImg: postImage,
			userName: "William Randolph",
			datePosted: "20 April 2023",
			userComment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit harum, minima nemo odit, quos nesciunt accusamus ad leniti			dolor explicabo voluptatem corporis cum voluptates consectetur debitis quae, molestiae beatae! ",
		},
		{
			userImg: postImage,
			userName: "William Randolph",
			datePosted: "20 April 2023",
			userComment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit harum, minima nemo odit. ",
		},
		{
			userImg: postImage,
			userName: "William Randolph",
			datePosted: "20 April 2023",
			userComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
		},
		{
			userImg: postImage,
			userName: "William Randolph",
			datePosted: "20 April 2023",
			userComment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit harum, minima nemo odit, quos nesciunt accusamus ad leniti			dolor explicabo voluptatem corporis cum voluptates consectetur debitis quae.! ",
		},
	];
	return (
		<div>
			<h2 className="text-[var(--softTextColor)] text-2xl font-semibold my-5">
				Comments
			</h2>
			<form className="flex items-center gap-5">
				<textarea
					placeholder="write a comment"
					className="p-2 w-full pb-4 rounded-md"
					name="comment"
				/>
				<button type="submit" className=" bg-slate-500 py-2 px-4 rounded-md">
					Send
				</button>
			</form>

			{/* All Comments  */}
			<div className="mt-24">
				{/* Single comment  */}
				{postComments.map((post: PostComments) => (
					<div key={post.userName} className="py-5">
						{/* user Details */}

						<div className="flex gap-4 items-center mb-3">
							{/* user image  */}

							<div className="hidden md:block relative ">
								<Image
									src={post.userImg}
									objectFit="cover"
									width={40}
									height={40}
									alt="user Image"
									className="rounded-full aspect-square"
								/>
							</div>

							{/* user name and date  */}
							<div className="text-[var(--softText-color)]">
								<p>{post.userName}</p>
								<p>{post.datePosted}</p>
							</div>
						</div>

						{/* user comments  */}
						<div>{post.userComment}</div>
					</div>
				))}
			</div>
		</div>
	);
}
