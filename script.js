//1.Create a xml http request object
var request = new XMLHttpRequest();
//2.open/initiate a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending the connection
request.send();
//4.Receiving the data(successfully received from server)
//the data received from the server will be of string format
request.onload = function()
{
    var data = JSON.parse(this.response);
    console.log(data);
    
    var data1 = data.filter((ele)=>ele.region==="Asia");
console.log(data1);




var data2 = data.filter((element)=>element.population< 200000);
console.log(data2);


var data3 = data.filter((ele)=>{
    for(var i in ele.currencies){
      if(ele.currencies[i].code==='USD'){
      return true;   
    }
}

}).map(ele=>console.log(ele.name));



var data4 = data.reduce((accumulator,element) => {
    return element.population + accumulator;
},0);
console.log(data4);
}
