import { defineStore } from 'pinia'
import {computed,ref,watch }from 'vue' 
	export const useCounterStore = defineStore('counter', () => {
	  const TIME_BATERY_UPDATE=60*1000*5 // 5min
	  const TIME_SEND_FREQ=500 // 200ms
	  // const PORT="80"
	  // const HOST=`http://192.168.4.1:${PORT}`
	  const PORT="8080"
	  const HOST=`http://127.0.0.1:${PORT}`
	  var changed_by_gen_menu_ch1=ref(false)
	  var changed_by_gen_menu_ch2=ref(false)
	  var link_ch1_ch2=ref(false)

    setInterval(async () => {
      if (prev_last_volt_ch1.value != last_volt_ch1.value && changed_by_gen_menu_ch1.value){
        if(link_ch1_ch2.value) {
          console.log("stInterval 200")
          sendPostRequest(`SOUR1:VOLT ${last_volt_ch1.value}mvrms;:SOUR2:VOLT ${last_volt_ch1.value}mvrms\r\n`,"generator-two")
          prev_last_volt_ch1.value=last_volt_ch1.value
          last_volt_ch2.value=last_volt_ch1.value
          changed_by_gen_menu_ch1.value=false
          changed_by_gen_menu_ch2.value=false
          
        }
        else {
          console.log("stInterval 200")
          sendPostRequest(`SOUR1:VOLT ${last_volt_ch1.value}mvrms\r\n`,"generator-two")
          prev_last_volt_ch1.value=last_volt_ch1.value
          changed_by_gen_menu_ch1.value=false
          
        }
      }
      if (prev_last_volt_ch2.value != last_volt_ch2.value && changed_by_gen_menu_ch2.value){
        if(link_ch1_ch2.value) {
          console.log("stInterval 200")
          sendPostRequest(`SOUR1:VOLT ${last_volt_ch2.value}mvrms;:SOUR2:VOLT ${last_volt_ch2.value}mvrms\r\n`,"generator-two")
          prev_last_volt_ch2.value=last_volt_ch2.value
          last_volt_ch1.value=last_volt_ch2.value
          changed_by_gen_menu_ch2.value=false
          changed_by_gen_menu_ch1.value=false
          
        }
        else {
          console.log("stInterval 200")
          sendPostRequest(`SOUR2:VOLT ${last_volt_ch2.value}mvrms\r\n`,"generator-two")
          prev_last_volt_ch2.value=last_volt_ch2.value
          changed_by_gen_menu_ch2.value=false
          }
      }

    }, TIME_SEND_FREQ); 

	battery_info()

	var last_volt_ch1=ref("0")
	var last_volt_ch2=ref("0")
	var prev_last_volt_ch1=ref("0")
	var prev_last_volt_ch2=ref("0")
  var g1_output1=ref(0)
  var g1_output2=ref(0)
  var g2_output1=ref(0)
  var g2_output2=ref(0)

  watch(last_volt_ch1, ()=> devide_last_volt_ch1())
  watch(last_volt_ch2, ()=> devide_last_volt_ch2())

  var l0=ref("0")
  var l1=ref("0")
  var l2=ref("0")
  var l3=ref("0")
  var l4=ref("0")


  function before_change_ch1(index){
    var LL=[l0,l1,l2,l3,l4].slice(0,index+1)
    var res=LL.find((val)=> Number.parseFloat(val.value)!=0 ) || false
      console.log("res", res, LL.length)
    return res
  }

  var r0=ref("0")
  var r1=ref("0")
  var r2=ref("0")
  var r3=ref("0")
  var r4=ref("0")


  function before_change_ch2(index){
    var LL=[r0,r1,r2,r3,r4].slice(0,index+1)
    var res=LL.find((val)=> Number.parseFloat(val.value)!=0 ) || false
      console.log("res", res, LL.length)
    return res
  }

  function change_last_volt_ch1(volt){
    var concatL=""
    var LL=[l0.value,l1.value,l2.value,l3.value,]
      LL.forEach((val,)=>{
        concatL+=val.toString()
       })
    var full_volt=Number.parseFloat(concatL)+ Number.parseFloat(`0.${l4.value}`)+ volt
    last_volt_ch1.value=full_volt.toFixed(1).toString()
    changed_by_gen_menu_ch1.value=true
    console.log("change_last_volt_ch1! ", last_volt_ch1.value)
  }

  function change_last_volt_ch2(volt){
    var concatL=""
    var LL=[r0.value,r1.value,r2.value,r3.value,]
      LL.forEach((val,)=>{
        concatL+=val.toString()
       })
    var full_volt=Number.parseFloat(concatL)+ Number.parseFloat(`0.${r4.value}`)+ volt
    last_volt_ch2.value=full_volt.toFixed(1).toString()
    changed_by_gen_menu_ch2.value=true
    console.log("change_last_volt_ch2! ", last_volt_ch2.value)
  }
  
  function devide_last_volt_ch1(){
      // console.log("devide_last_volt_ch1!")
    if (last_volt_ch1.value.includes(".")){
      var [start, end ]=last_volt_ch1.value.split(".")
      var l_start=start.split("")
      l4.value=end[0] || "0"
      l3.value=l_start.pop() || "0"
      l2.value=l_start.pop() || "0"
      l1.value=l_start.pop() || "0"
      l0.value=l_start.pop() || "0"
      }
    else {
      l_start=last_volt_ch1.value.split("")
      l4.value="0"
      l3.value=l_start.pop() || "0"
      l2.value=l_start.pop() || "0"
      l1.value=l_start.pop() || "0"
      l0.value=l_start.pop() || "0"
    }
  }

  
  function devide_last_volt_ch2(){
      // console.log("devide_last_volt_ch2!")
    if (last_volt_ch2.value.includes(".")){
      var [start, end ]=last_volt_ch2.value.split(".")
      var l_start=start.split("")
      r4.value=end[0] || "0"
      r3.value=l_start.pop() || "0"
      r2.value=l_start.pop() || "0"
      r1.value=l_start.pop() || "0"
      r0.value=l_start.pop() || "0"
      }
    else {
      l_start=last_volt_ch2.value.split("")
      r4.value="0"
      r3.value=l_start.pop() || "0"
      r2.value=l_start.pop() || "0"
      r1.value=l_start.pop() || "0"
      r0.value=l_start.pop() || "0"
    }
  }

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
        col1:zamERRD436.value.slice(0,4),
        col2:zamERRD436.value.slice(4),
        col1Title:"FvD",
        col2Title:"FvD",
      }
    })

  var setting = computed(() => {
  		return {
        "ЭСУ-436":setting_436.value,
        "ЭРРД-436":setting_errd436.value,
        "ЭСУ-222":setting_222.value,
        "ЭРРД-1700":setting_1700.value,
        "ЭРРД-18-200-80":setting_errd_18_200_80.value,
        "ЭСУ-222-1":setting_esu_222_1.value,
      }
    })
  var setting_436 = computed(() => {
    return {col1:zamESU436.value.slice(0,4),
            col2:zamESU436.value.slice(4),
            col1Title:"Nk, Nv",
            col2Title:"Допы"
    }})

var setting_222 = computed(() => {
  return {col1:zam222_col1.value,
          col2:zam222_col2.value,
          col1Title:"Nnd, Nvd",
          col2Title:"Подвеска",
  }})

var setting_1700 = computed(() => {
  return {col1:zamERRD1700_col1.value,
          col2:zamERRD1700_col2.value,
          col1Title:"Vtk",
          col2Title:"Vct",
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
	var title = ref( "ЭРРД-18-200-80")
	var with_one_collumn = ref( ["ЭРРД-18-200-80","ЭСУ-222-1", ])
	var zamERRD436 = ref([
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "14000", U: "2" } } },
      { gen1:{ ch1: { gz:"1500", U: "2" }, ch2:{ gz:  "2100", U: "2" } } },
      { gen1:{ ch1: { gz:"6578", U: "2" }, ch2:{ gz:  "6863", U: "2" } } },
      { gen1:{ ch1: { gz:"6785", U: "2" }, ch2:{ gz:  "7180", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "6000", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "2410", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "2405", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "2800", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "7070", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "6655", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "14507", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "15423", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "14965", U: "2" } } },
      { gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "1500", U: "2" } } },
    ],)
    

	var zam222_col2 = ref([
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "65", U: "2"} } ,  gen2:{ ch1: { gz: "120", U: "38.4" }, ch2:{ gz:  "120", U:  "38.4"} } },
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "65", U: "2"} } ,  gen2:{ ch1: { gz: "120", U: "76.8" }, ch2:{ gz:  "120", U:  "76.8"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "65", U: "2"} } ,  gen2:{ ch1: { gz: "220", U: "35.4" }, ch2:{ gz:  "220", U:  "35.4"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "65", U: "2"} } ,  gen2:{ ch1: { gz: "220", U: "141.6" }, ch2:{ gz:  "220", U:  "141.6"} } },
      { gen1:{ ch1: { gz: "1000", U: "2" }, ch2:{ gz: "646", U: "2"} } ,  gen2:{ ch1: { gz: "170", U: "54.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "1000", U: "2" }, ch2:{ gz: "646", U: "2"} } ,  gen2:{ ch1: { gz: "170", U: "109.3" }, ch2:{ gz:  "170", U:  "109.3"} } },
      { gen1:{ ch1: { gz: "1000", U: "2" }, ch2:{ gz: "1253", U: "2"} } ,  gen2:{ ch1: { gz: "330", U: "53.1" }, ch2:{ gz:  "330", U:  "53.1"} } },
      { gen1:{ ch1: { gz: "1000", U: "2" }, ch2:{ gz: "1253", U: "2"} } ,  gen2:{ ch1: { gz: "330", U: "212" }, ch2:{ gz:  "330", U:  "212"} } }],)

	var zam222_col1 = ref([
    { gen1:{ ch1: { gz: "1000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } },
    { gen1:{ ch1: { gz: "2000", U: "2" }, ch2:{ gz:  "500", U:  "2"} } },
    { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1000", U:  "2"} } }],)


  var zamERRD_18_200_80_col1=ref([
      { gen1:{ ch1: { gz: "326.5", U: "2" }, ch2:{ gz:  "326.5", U:  "2"} } ,  gen2:{ ch1: { gz: "500", U: "402.1" }, ch2:{ gz:  "600", U:  "1025.1"} } },
      { gen1:{ ch1: { gz: "3755.1", U: "20" }, ch2:{ gz:  "3755.1", U:  "20"} } ,  gen2:{ ch1: { gz: "400", U: "683.5" }, ch2:{ gz:  "400", U:  "160.8"} } },
      { gen1:{ ch1: { gz: "1632.65", U: "20" }, ch2:{ gz:  "1632.65", U:  "20"} },  gen2:{ ch1: { gz: "600", U: "1025.3" }, ch2:{ gz:  "700", U:  "562.9"} } },
      { gen1:{ ch1: { gz: "7510.2", U: "3" }, ch2:{ gz:  "7510.2", U:  "3"} } ,  gen2:{ ch1: { gz: "800", U: "321.7" }, ch2:{ gz:  "800", U:  "1367"} } },
      ],)
	var zamESU_222_1 = ref([
      { gen1:{ ch1: { gz: "990", U: "2" }, ch2:{ gz:  "65", U:  "2"} } ,  gen2:{ ch1: { gz: "55", U: "35.38" }, ch2:{ gz:  "55", U:  "35.38"} } },
      { gen1:{ ch1: { gz: "1980", U: "20" }, ch2:{ gz:  "646", U:  "20"} } ,  gen2:{ ch1: { gz: "110", U: "70.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "4500", U: "20" }, ch2:{ gz:  "1339", U:  "20"} },  gen2:{ ch1: { gz: "350", U: "227.8" }, ch2:{ gz:  "350", U:  "56.7"} } },
      { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1200", U:  "2"} } ,  gen2:{ ch1: { gz: "350", U: "56.7" }, ch2:{ gz:  "350", U:  "227.8"} } },])
     
	var zamERRD1700_col1 = ref([
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "315", U:  "0.935"} } }, 
      { gen1:{ ch1: { gz: "2000", U: "2" }, ch2:{ gz:  "315", U:  "0.935"} } }, 
      { gen1:{ ch1: { gz: "4000", U: "4" }, ch2:{ gz:  "315", U:  "0.935"} } }, 
      { gen1:{ ch1: { gz: "6730", U: "10" }, ch2:{ gz:  "315", U:  "0.935"} } }, 
      ])

	var zamERRD1700_col2 = ref([
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "20", U:  "320"} } }, 
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "312", U:  "320"} } },
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "420", U:  "320"} } },
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "527", U:  "320"} } },
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "600", U:  "320"} } }, 
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "315", U:  "320"} } },
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "340", U:  "320"} } },
      { gen1:{ ch1: { gz: "500", U: "2" }, ch2:{ gz:  "370", U:  "320"} } },
      ])

  function get_command_g1(chenal){
     var command=""
     if (chenal == "CH1"){
        g1_output1.value=Number(!g1_output1.value)
        command=`OUTput1 ${g1_output1.value}\r\n`
    }   
     else if (chenal == "CH2"){
        g1_output2.value=Number(!g1_output2.value )
        command=`OUTput2 ${g1_output2.value}\r\n`
    }   
     else if (chenal == "CH1_CH2"){
        g1_output1.value=Number(!g1_output1.value )
        g1_output2.value=Number(!g1_output2.value )
        command=`OUTput1 ${g1_output1.value};:OUTput2 ${g1_output2.value}\r\n`
    }   
    else {
      console.log("Произошла какая-то ошибка!")
    }
    return command
  }

  function get_command_g2(chenal){
     var command=""
     if (chenal == "CH1"){
        g2_output1.value=Number(!g2_output1.value)
        command=`OUTput1 ${g2_output1.value}\r\n`
    }   
     else if (chenal == "CH2"){
        g2_output2.value=Number(!g2_output2.value )
        command=`OUTput2 ${g2_output2.value}\r\n`
    }   
     else if (chenal == "CH1_CH2"){
        g2_output1.value=Number(!g2_output1.value )
        g2_output2.value=Number(!g2_output2.value )
        command=`OUTput1 ${g2_output1.value};:OUTput2 ${g2_output2.value}\r\n`
    }   
    else {
      console.log("Произошла какая-то ошибка!")
    }
    return command
  }

    async function sendPostRequest(data, generator) {
      console.log("data for send: ", data, "generator:->", generator)
      var url=`${HOST}/${generator}/command`
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
      // console.log('set interval ');
      battery_info()

    }, TIME_BATERY_UPDATE); // Выполняется каждую секунду

    async function battery_info(){
      fetch(`${HOST}/info`)
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

  return {last_volt_ch1,last_volt_ch2,link_ch1_ch2,r1,r2,r3,r4,r0,before_change_ch1,before_change_ch2,change_last_volt_ch1,change_last_volt_ch2,l4,l3,l2,l1,l0,devide_last_volt_ch1,devide_last_volt_ch2,setting_1700,zamERRD1700_col2,zamERRD1700_col1,get_command_g1,get_command_g2,battery_icon, battery_info,sendPostRequest,showed,showed2,title,with_one_collumn,zamERRD436,zamESU436,zam222_col2,zam222_col1,zamESU_222_1, list_one_collumn ,setting_436 ,setting_222 ,setting_errd_18_200_80 , setting_esu_222_1 ,setting_errd436 ,setting , }
})
