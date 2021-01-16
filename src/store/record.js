import Firebase from "firebase/app";

export default {
  actions: {
    async createRecord({ commit, dispatch }, data) {
      try {
        const uid = await dispatch("getIdUser")
        return await Firebase.database().ref(`/users/${uid}/records`).push(data);
      } catch (err) {
        commit("setError", err);
        throw err;
      }
    },
    async fetchRecords({ dispatch, commit }) {
      try {
        const uid = await dispatch("getIdUser");

        const records =
          (
            await Firebase.database()
              .ref(`/users/${uid}/records`)
              .once("value")
          ).val() || {};

        return Object.keys(records).map(key => ({ ...records[key], id: key }));
      } catch (err) {
        commit("setError", err);
        throw err;
      }
    }
  }
};
