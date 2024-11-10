import { getMyImages } from "~/server/db/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="h-48 w-48">
          <Link href={`/img/${image.id}`}>
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
