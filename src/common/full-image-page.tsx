import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink justify-center ">
        <img className="object-contain" src={image.url} />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
        <div className="text-sm">Uploaded by: {uploaderInfo.fullName}</div>
      </div>
      <form
        action={async () => {
          "use server";

          await deleteImage(props.id);
        }}
      >
        <button type="submit">
          Delete
        </button>
      </form>
    </div>
  );
}
