import React from "react";
import { db } from "~/server/db";
import "~/styles/globals.css";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/85EdWt63zPThLkvcwtNchgD4Nb2I3qFs8rOYtk1CvV9Spmud",
  "https://utfs.io/f/85EdWt63zPThVY2NPQ5Zc1Ysv5tL7Jld8NFehS4uyWgEIPUm",
  "https://utfs.io/f/85EdWt63zPThnZ5QEUx0BRqTA8jSr2G9kYK6X7tfEcPJuxWb",
  "https://utfs.io/f/85EdWt63zPThAWDth58nHwGxMfZChP5BiAFSo0beE23LtqIN",
];

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} alt="Hello gallery" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
