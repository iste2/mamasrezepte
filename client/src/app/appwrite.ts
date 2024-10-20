import {Client, Databases, Storage} from 'appwrite';

const endpoint = "http://localhost/v1";
const projectId = "6713b1f0003e13b05bbb";
const dbId = "6713b2b100274e5943c6";
const recipeCollectionId = "6713b2ba003558ba63cd";
const imagesBucketId = "671511c500282b2b6465";

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

const db = new Databases(client);
const storage = new Storage(client);

export { client, db, recipeCollectionId, dbId, imagesBucketId, storage };
