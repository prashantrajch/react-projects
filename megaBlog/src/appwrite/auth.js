import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create Account Service
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Call another method like go to login page
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  // Account Login Service
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  // Get Current User Service
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("appwrite service :: getCurrentUser :: error", err);
      // throw err;
    }
    return null;
  }

  // Logout service
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (err) {
      console.log("appwrite service :: getCurrentUser :: error", err);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
