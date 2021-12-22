export default function({$cookies, store}){
  if($cookies.get('token')){
    store.commit('setLoggedIn',true)
  }else{
    store.commit('setLoggedIn',false)
  }
}
