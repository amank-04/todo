import { storage } from "@/appwrite";

export const getUrl = (bucketId: string, fileId: string) => {
  return storage.getFilePreview(bucketId, fileId);
};
