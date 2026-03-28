export default {
  state: {
    zoom: 15,
    peeople:[],
  },
  mutations: {
   set_peeople(state, peeople){
     state.peeople=peeople
   }   
  },
  getters: {
    getZoom(state) {
      return state.zoom
    },
  },
  actions: {
    async sendCoord({commit, state},coordinates){
    const res= await fetch('http://localhost:8081/select', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        body: JSON.stringify({vec: coordinates})
        })
        var users=await res.json()
        console.log("Response =>>", users);
        commit("set_peeople", users)
        return state.peeople
    }
  },
}
