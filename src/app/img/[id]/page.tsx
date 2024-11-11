import FullPageImageView from "~/common/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <div className="h-full">
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}
