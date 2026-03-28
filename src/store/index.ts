import MapStore from "./MapStore.ts";
import { createStore } from 'vuex'
const store = createStore({
  modules: {
    MapStore    
  }
})
export default store
