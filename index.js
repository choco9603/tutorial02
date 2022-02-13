const lists = document.getElementById("lists");

async function getWeather(){
  //天気情報の取得
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo");
  
  const date = await res.json();
  return date;
}

async function weatherDate(){
  const wtrDate = await getWeather();
  
    const tmpDate = await {
      labels: wtrDate.daily.time,
      datasets:[{
        label:'最高気温',
        data: wtrDate.daily.temperature_2m_max,
        borderColor:'rgb(192,75,75)',
      },{
        label: '最低気温',
        data: wtrDate.daily.temperature_2m_min,
        borderColor: 'rgb(75,75,192)',
      }]
    }
     
     new Chart(document.getElementById("stage"),{
       type: 'line',
       data: tmpDate,
     });
     
     
    const Arr = [
      {code:0,description:'Clear sky'},
      {code:1,description:'Mainly clear, partly cloudy, and overcast'},
      {code:2,description:'Mainly clear, partly cloudy, and overcast'},
      {code:3,description:'Mainly clear, partly cloudy, and overcast'},
      {code:45,description:'Mainly clear, partly cloudy, and overcast'},
      {code:48,description:'Mainly clear, partly cloudy, and overcast'},
      {code:51,description:'Drizzle'},
      {code:53,description:'Drizzle'},
      {code:55,description:'Drizzle'},
      {code:56,description:'Freezing Drizzle'},
      {code:57,description:'Freezing Drizzle'},
      {code:61,description:'Rain'},
      {code:63,description:'Rain'},
      {code:65,description:'Rain'},
      {code:66,description:'Freezing Rain'},
      {code:67,description:'Freezing Rain'},
      {code:71,description:'Snow fall'},
      {code:73,description:'Snow fall'},
      {code:75,description:'Snow fall'},
      {code:77,description:'Snow grains'},
      {code:80,description:'Rain showers'},
      {code:81,description:'Rain showers'},
      {code:82,description:'Rain showers'},
      {code:85,description:'Snow showers slight and heavy'},
      {code:86,description:'Snow showers slight and heavy'},
      {code:95,description:'Thunderstorm'},
      {code:96,description:'Thunderstorm with slight and heavy hail'},
      {code:99,description:'Thunderstorm with slight and heavy hail'},
      ];
    
    for (var i = 0;i<wtrDate.daily.weathercode.length;i++){
    const list = document.createElement("li");
    const result = await Arr.find((v) => v.code === wtrDate.daily.weathercode[i]);
    list.innerText = wtrDate.daily.time[i] + ':' + result.description;
    lists.appendChild(list);
    }
}


weatherDate();

// async function drawChart(wtrDate){
  
//   const temDate = {
//     console.log(wtrDate.daily.time);
//   }
// }





// const button = documeant.getElementById("addBtn");
// const lists = document.getElementById("lists");

// async function getUsers(){
//   //データのやり取り
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   //console.log(users);
//   return users;
// }

// function addList(user) {
//   const list = document.createElement("li");
//   list.innerText = user.name
//   lists.appendChild(list);
// }

// async function listUsers() {
//   const users = await getUsers();

//   //DOM操作
//   users.forEach(addList);
// }

// button.addEventListener("click",listUsers);

// window.addEventListener("load",listUsers);

