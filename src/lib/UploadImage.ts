import { storage, ID } from "@/appwrite";

export default async function UploadImage(file: File) {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_TODOS_BUCKET_ID!,
    ID.unique(),
    file
  );
  return fileUploaded;
}
