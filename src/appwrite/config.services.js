import { Client, ID, Databases, Storage, Query } from "appwrite";
import def from "../conf/conf";

class ConfService {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client.setEndpoint(def.appwriteURL).setProject(def.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.database.createDocument(
        def.appwriteDatabaseId,
        def.appwriteCollectionId,
        slug,
        { title, content, status, featureImage, userId }
      );
    } catch (error) {
      console.log("Appwriter :: service :: createPost:: Error ", error);
    }
  }

  async updatePost(slug, { title, content, status, featureImage, userId }) {
    try {
      await this.database.updateDocument(
        def.appwriteDatabaseId,
        def.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featureImage,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwriter service::updatePost:: Error:: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        def.appwriteDatabaseId,
        def.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwriter service:: deletePost :: Error :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        def.appwriteDatabaseId,
        def.appwriteProjectId,
        slug
      );
    } catch (error) {
      console.log("Appwriter service:: getDocument :: Error :: ", error);
    }
  }

  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      await this.database.listDocuments(
        def.appwriteDatabaseId,
        def.appwriteProjectId,
        query
      );
    } catch (error) {
      console.log("Appwriter service:: getPost :: Error :: ", error);
    }
  }

  // upload the file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        def.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwriter service:: uploadfile :: Error :: ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(def.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwriter service:: deletefile :: Error :: ", error);
      return false;
    }
  }

  getFilePerview(fileId) {
    try {
      return this.bucket.getFilePreview(def.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwriter service:: getfilePreview :: Error :: ", error);
    }
  }
}

const confService = new ConfService();

export default confService;
