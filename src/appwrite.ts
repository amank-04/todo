import { Client, Databases, ID, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID!);

const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

export { databases, account, storage, ID, client };
