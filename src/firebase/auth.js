import cookie from "js-cookie";
import { auth } from "./initFirebase";

class Auth {
  constructor() {
    this.auth = auth;
  }
  async userSignUp({ email, password }) {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // console.log(`%c${error.message}`, "color:red");
        throw error;
      });
    const token = await auth.currentUser.getIdToken();
    cookie.set("__session", token);
    const user = await auth.currentUser;
    return { uid: user.uid, email: user.email };
  }
  async userSignIn({ email, password }) {
    await auth.signInWithEmailAndPassword(email, password).catch((error) => {
      // console.log(`%c${error.message}`, "color:red");
      throw error;
    });
    const token = await auth.currentUser.getIdToken();
    cookie.set("__session", token);
    const user = await auth.currentUser;
    return { uid: user.uid, email: user.email };
  }
  async userLogOut() {
    await auth
      .signOut()
      .then(() => {
        cookie.remove("__session");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
export default new Auth();
