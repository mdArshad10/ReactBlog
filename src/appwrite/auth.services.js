import { Client, Account, ID } from "appwrite";
import def from "../conf/conf";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(def.appwriteURL).setProject(def.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async userRegister({ email, pasword, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, pasword, name);
      if (user) {
        //call another method
        return this.login(email, pasword);
      } else {
        return user;
      }
    } catch (error) {
      throw error.message;
    }
  }

  async login({ email, pasword }) {
    try {
      // code
      const user = await this.account.createEmailSession(email, pasword);
      if (user) return user;
      else return null;
    } catch (error) {
      throw error.message;
    }
  }

  async getAccountDetail() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error.message;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error.message;
    }
  }
}

const authService = new AuthService();

export default authService;
