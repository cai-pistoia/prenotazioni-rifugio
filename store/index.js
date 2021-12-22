export const state = () =>{
  return{
    isLoggedIn: false,
  }
}

export const mutations = {
  setLoggedIn(state, auth){
    state.isLoggedIn = auth
  }
}


export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // let auth = null;
    console.log(req.headers.cookie)
    // if (req.headers.cookie) {
    //   const parsed = req.headers.cookie.toString().replace(/^[^=]+./, "");
    //   try {
    //     auth = parsed;
    //   } catch (err) {
    //     // No valid cookie found
    //   }
    // }
    // commit("setLoggedIn", true);
  },
};
