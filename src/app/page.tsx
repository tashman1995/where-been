import React from "react";
import { db } from "~/server/db";
import "~/styles/globals.css";

const mockUrls = [
  "https://utfs.io/f/85EdWt63zPThLkvcwtNchgD4Nb2I3qFs8rOYtk1CvV9Spmud",
  "https://utfs.io/f/85EdWt63zPThVY2NPQ5Zc1Ysv5tL7Jld8NFehS4uyWgEIPUm",
  "https://utfs.io/f/85EdWt63zPThnZ5QEUx0BRqTA8jSr2G9kYK6X7tfEcPJuxWb",
  "https://utfs.io/f/85EdWt63zPThAWDth58nHwGxMfZChP5BiAFSo0beE23LtqIN",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} alt="Hello gallery" />
          </div>
        ))}
      </div>
    </main>
  );
}
