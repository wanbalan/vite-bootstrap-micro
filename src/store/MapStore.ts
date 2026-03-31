export default {
  state: {

    showed:[],
    showed2:[],
    title: "ЭСУ-436",
    zamERRD436:[{ gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"14000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"1500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2100", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"7180", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"6000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2410", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2405", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"4500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2800", U: "2" }, ch2:{ gz:  "", U:  ""} } }],
    
     zamESU436:[{ gen1:{ ch1: { gz:"805", U: "2" }, ch2:{ gz:  "732", U:  "2"} } },
      { gen1:{ ch1: { gz: "5750", U: "2" }, ch2:{ gz:  "1234", U:  "2"} } },
      { gen1:{ ch1: { gz: "7820", U: "2" }, ch2:{ gz:  "5550", U:  "2"} } },
      { gen1:{ ch1: { gz:"3450", U: "2" }, ch2:{ gz:  "9826", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "14554", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "16064", U:  "2"} } },
      { gen1:{ ch1: { gz: "6000", U: "2" }, ch2:{ gz:  "7300", U:  "2"} } }],

    zam222_col2:[
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "38.4" }, ch2:{ gz:  "120", U:  "38.4"} } },
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "76.8" }, ch2:{ gz:  "120", U:  "76.8"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "35.4" }, ch2:{ gz:  "220", U:  "35.4"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "141.6" }, ch2:{ gz:  "220", U:  "141.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "54.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "109.3" }, ch2:{ gz:  "170", U:  "109.3"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "53.1" }, ch2:{ gz:  "330", U:  "53.1"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "212" }, ch2:{ gz:  "330", U:  "212"} } }],

    zam222_col1:[{ gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } },
    { gen1:{ ch1: { gz: "2000", U: "2" }, ch2:{ gz:  "500", U:  "2"} } },
    { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1000", U:  "2"} } }],

    // errd_18_200_80_col1:[{ gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } },
    // { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} } },
    // { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} } },
    // { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } }],

    // zamERRD_18_200_80_col1:[
    //   { gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} }  },
    //   { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} }  },
    //   { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} } },
    //   { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } },
    //   ],
    // zamERRD_18_200_80_col1:[
    //   { gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } ,  gen2:{ ch1: { gz: "500", U: "402.1" }, ch2:{ gz:  "600", U:  "1025.1"} } },
    //   { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} } ,  gen2:{ ch1: { gz: "400", U: "683.5" }, ch2:{ gz:  "400", U:  "160.8"} } },
    //   { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} },  gen2:{ ch1: { gz: "600", U: "1025.3" }, ch2:{ gz:  "700", U:  "562.9"} } },
    //   { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } ,  gen2:{ ch1: { gz: "800", U: "321.7" }, ch2:{ gz:  "800", U:  "1367"} } },
    //   ],
    zamERRD_18_200_80_col2:[
      { gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } ,  gen2:{ ch1: { gz: "500", U: "402.1" }, ch2:{ gz:  "600", U:  "1025.1"} } },
      { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} } ,  gen2:{ ch1: { gz: "400", U: "683.5" }, ch2:{ gz:  "400", U:  "160.8"} } },
      { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} },  gen2:{ ch1: { gz: "600", U: "1025.3" }, ch2:{ gz:  "700", U:  "562.9"} } },
      { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } ,  gen2:{ ch1: { gz: "800", U: "321.7" }, ch2:{ gz:  "800", U:  "1367"} } },
      ],
  },
  getters: {
    getShowed(state){
      return state.showed
    },
    getShowed2(state){
      return state.showed2
    },
    getTitle(state) {
      return state.title
    },
    setting_436(state){
  		return {
        col1:state.zamESU436.slice(0,4),
        col2:state.zamESU436.slice(4),
        col1Title:"Nk, Nv",
        col2Title:"Допы"
      }
    },

    setting_222(state){
  		return {
        col1:state.zam222_col1,
        col2:state.zam222_col2,
        col1Title:"Nnd, Nvd",
        col2Title:"Подвеска",
      }
    },

    setting_errd_18_200_80(state){
  		return {
        col1:state.zamERRD_18_200_80_col2.slice(0,2),
        col2:state.zamERRD_18_200_80_col2.slice(2),
        // col1:state.zamERRD_18_200_80_col1,
        // col2:state.zamERRD_18_200_80_col2,
        col1Title:"Nnd, Nvd",
        col2Title:"Подвеска",
      }
    },

    setting_errd436(state){
  		return {
        col1:state.zamERRD436.slice(0,5),
        col2:state.zamERRD436.slice(5),
        col1Title:"FvD",
        col2Title:"FvD",
      }
    },

    setting(state){
  		return {
        "ЭСУ-436":state.setting_436,
        "ЭРРД-436":state.setting_errd436,
        "ЭСУ-222":state.setting_222,
        "ЭРРД-18-200-80":state.setting_errd_18_200_80,
      }
    },
  },
  mutations: {
    setShowedByindex(state, index){
      state.showed[index]=true
    },
    setShowed2Byindex(state, index){
      state.showed2[index]=true
    },
    resetShowed(state){
      state.showed=[]
      state.showed2=[]
    },

  setTitle(state, item) {
    state.title=item
    },

  },


  actions: {
  }
}

