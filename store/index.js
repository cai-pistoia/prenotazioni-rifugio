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
