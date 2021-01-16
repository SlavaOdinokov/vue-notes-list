import Firebase from "firebase/app";

export default {
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await Firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        commit("setError", err);
        throw err;
      }
    },
    async logout({ commit }) {
      await Firebase.auth().signOut();
      commit("clearInfo");
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await Firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getIdUser");
        await Firebase.database()
          .ref(`/users/${uid}/info`)
          .set({ name });
      } catch (err) {
        commit("setError", err);
        throw err;
      }
    },
    async getIdUser() {
      const user = await Firebase.auth().currentUser;
      return user ? user.uid : null;
    }
  }
};
