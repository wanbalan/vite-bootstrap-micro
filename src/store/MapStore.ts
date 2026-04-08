import { defineStore } from 'pinia'
import {computed,ref }from 'vue' 
	export const useCounterStore = defineStore('counter', () => {
	battery_info()
  var g1_output1=ref(0)
  var g1_output2=ref(0)
  var g2_output1=ref(0)
  var g2_output2=ref(0)

  var battery_icon=ref({"icon": "battery-full","color": "text-success"})
	var zamESU436 = ref([
      { gen1:{ ch1: { gz:"3450", U: "2" }, ch2:{ gz:  "2000", U:  "2"} } },
      { gen1:{ ch1: { gz:"3450", U: "2" }, ch2:{ gz:  "732", U:  "2"} } },
      { gen1:{ ch1: { gz: "805", U: "2" }, ch2:{ gz:  "1234", U:  "2"} } },
      { gen1:{ ch1: { gz: "5750", U: "2" }, ch2:{ gz:  "5550", U:  "2"} } },
      { gen1:{ ch1: { gz:"7820", U: "2" }, ch2:{ gz:  "9826", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "14554", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "16064", U:  "2"} } },
      { gen1:{ ch1: { gz: "6000", U: "2" }, ch2:{ gz:  "7300", U:  "2"} } }],)

  var  list_one_collumn = computed(() => with_one_collumn.value.includes(title.value))

   
   var setting_errd436 = computed(() => {
  		return {
        col1:zamERRD436.value.slice(0,5),
        col2:zamERRD436.value.slice(5),
        col1Title:"FvD",
        col2Title:"FvD",
      }
    })

  var setting = computed(() => {
  		return {
        "ЭСУ-436":setting_436.value,
        "ЭРРД-436":setting_errd436.value,
        "ЭСУ-222":setting_222.value,
        "ЭРРД-18-200-80":setting_errd_18_200_80.value,
        "ЭСУ-222-1":setting_esu_222_1.value,
      }
    })
  var setting_436 = computed(() => {
    return {col1:zamESU436.value.slice(0,4),
            col2:zamESU436.value.slice(4),
            col1Title:"Nk, Nv",
            col2Title:"Допы"
    } })

var   setting_222 = computed(() => {
  return {col1:zam222_col1.value,
          col2:zam222_col2.value,
          col1Title:"Nnd, Nvd",
          col2Title:"Подвеска",
  }})

var setting_errd_18_200_80 = computed(() =>  {
        return {col1:zamERRD_18_200_80_col1.value,
        col2:{},
        col1Title:"Nnd, Nvd/Подвеска",
        col2Title:"",}
      })
var setting_esu_222_1 = computed(() => {
  		return {
        col1:zamESU_222_1.value,
        col2:{},
        col1Title:"Nnd, Nvd/Подвеска",
        col2Title:"",
      }})
	var showed = ref([])
	var showed2 = ref([])
	var title = ref( "ЭСУ-436")
	var with_one_collumn = ref( ["ЭРРД-18-200-80","ЭСУ-222-1", ])
	var zamERRD436 = ref([
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"14000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"1500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2100", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"7180", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"6000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2410", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2405", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"4500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2800", U: "2" }, ch2:{ gz:  "", U:  ""} } }],)
    

	var zam222_col2 = ref([
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "38.4" }, ch2:{ gz:  "120", U:  "38.4"} } },
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "76.8" }, ch2:{ gz:  "120", U:  "76.8"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "35.4" }, ch2:{ gz:  "220", U:  "35.4"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "141.6" }, ch2:{ gz:  "220", U:  "141.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "54.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "109.3" }, ch2:{ gz:  "170", U:  "109.3"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "53.1" }, ch2:{ gz:  "330", U:  "53.1"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "212" }, ch2:{ gz:  "330", U:  "212"} } }],)

	var zam222_col1 = ref([
    { gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } },
    { gen1:{ ch1: { gz: "2000", U: "2" }, ch2:{ gz:  "500", U:  "2"} } },
    { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1000", U:  "2"} } }],)


  var zamERRD_18_200_80_col1=ref([
      { gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } ,  gen2:{ ch1: { gz: "500", U: "402.1" }, ch2:{ gz:  "600", U:  "1025.1"} } },
      { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} } ,  gen2:{ ch1: { gz: "400", U: "683.5" }, ch2:{ gz:  "400", U:  "160.8"} } },
      { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} },  gen2:{ ch1: { gz: "600", U: "1025.3" }, ch2:{ gz:  "700", U:  "562.9"} } },
      { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } ,  gen2:{ ch1: { gz: "800", U: "321.7" }, ch2:{ gz:  "800", U:  "1367"} } },
      ],)
	var zamESU_222_1 = ref([
      { gen1:{ ch1: { gz: "990", U: "2" }, ch2:{ gz:  "65", U:  "2"} } ,  gen2:{ ch1: { gz: "55", U: "35.38" }, ch2:{ gz:  "55", U:  "35.38"} } },
      { gen1:{ ch1: { gz: "1980", U: "20" }, ch2:{ gz:  "646", U:  "20"} } ,  gen2:{ ch1: { gz: "110", U: "70.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "4500", U: "20" }, ch2:{ gz:  "1339", U:  "20"} },  gen2:{ ch1: { gz: "350", U: "227.8" }, ch2:{ gz:  "350", U:  "56.7"} } },
      { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1200", U:  "2"} } ,  gen2:{ ch1: { gz: "350", U: "56.7" }, ch2:{ gz:  "350", U:  "227.8"} } },
      ],)

  function get_command_g1(chenal){
     var command=""
     if (chenal == "CH1"){
        this.g1_output1=Number(!this.g1_output1)
        command=`OUTput1 ${this.g1_output1}\r\n`
    }   
     else if (chenal == "CH2"){
        this.g1_output2=Number(!this.g1_output2 )
        command=`OUTput2 ${this.g1_output2}\r\n`
    }   
     else if (chenal == "CH1_CH2"){
        this.g1_output1=Number(!this.g1_output1 )
        this.g1_output2=Number(!this.g1_output2 )
        command=`OUTput1 ${this.g1_output1};:OUTput2 ${this.g1_output2}\r\n`
    }   
    else {
      console.log("Произошла какая-то ошибка!")
    }
    return command
  }

  function get_command_g2(chenal){
     var command=""
     if (chenal == "CH1"){
        this.g2_output1=Number(!this.g2_output1)
        command=`OUTput1 ${this.g2_output1}\r\n`
    }   
     else if (chenal == "CH2"){
        this.g2_output2=Number(!this.g2_output2 )
        command=`OUTput2 ${this.g2_output2}\r\n`
    }   
     else if (chenal == "CH1_CH2"){
        this.g2_output1=Number(!this.g2_output1 )
        this.g2_output2=Number(!this.g2_output2 )
        command=`OUTput1 ${this.g2_output1};:OUTput2 ${this.g2_output2}\r\n`
    }   
    else {
      console.log("Произошла какая-то ошибка!")
    }
    return command
  }

    async function sendPostRequest(data, generator) {
      console.log("data for send: ", data, "generator:->", generator)
      var url=`http://127.0.0.1:8080/${generator}/command`
      var bigdata=JSON.stringify({"command": data})

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: bigdata,
          // mode: 'same-origin'
        });

        if (!response.ok) {
          throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }

        const result = await response.json();
        console.log('Ответ сервера:', result);
        
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
}
    setInterval(async () => {
      console.log('set interval');
      battery_info()

    }, 300000); // Выполняется каждую секунду

    async function battery_info(){
      fetch('http://127.0.0.1:8080/info')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('data :', data, typeof(data));
        if (data["battery"] <= 35 ) {
          console.log('low:');
          battery_icon.value={"icon": "battery-low","color": "text-danger"}
        }
        else if (data["battery"] <= 70 && data["battery"] >= 35 ) {
          console.log('half:');
          battery_icon.value={"icon": "battery-half","color": "text-warning"}
        }
        else {
          console.log('full:');
          battery_icon.value={"icon": "battery-full","color": "text-success"}
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    }

  return {get_command_g1,get_command_g2,battery_icon, battery_info,sendPostRequest,showed,showed2,title,with_one_collumn,zamERRD436,zamESU436,zam222_col2,zam222_col1,zamESU_222_1, list_one_collumn ,setting_436 ,setting_222 ,setting_errd_18_200_80 , setting_esu_222_1 ,setting_errd436 ,setting , }
})
