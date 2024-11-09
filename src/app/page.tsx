import React from "react";
import { db } from "~/server/db";
import "~/styles/globals.css";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="Hello gallery" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
