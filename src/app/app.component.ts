import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jQuery: any;


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './Style/app.component.css' ]
})



export class AppComponent  {

parser(text1){
     var json = JSON.parse(text1)



    document.getElementById("alert_total_count_cage").innerHTML = json[0].mechanical_cases.number + json[0].electrical_cases.number + json[0].structural_cases.number


    document.getElementById("alert_total_count_st40").innerHTML = json[1].mechanical_cases.number + json[1].electrical_cases.number + json[1].structural_cases.number

    document.getElementById("st40_struct").innerHTML = 'Structural = ' + json[1].structural_cases.number

    if(json[1].structural_cases.alerted == 'yes'){
      document.getElementById("st40_struct").style.color = 'red'
    }

    document.getElementById("st40_mec").innerHTML = 'Mechanical = ' + json[1].mechanical_cases.number

    if(json[1].mechanical_cases.alerted == 'yes'){
      document.getElementById("st40_mec").style.color = 'red'
    }

    document.getElementById("st40_elec").innerHTML = 'Electrical = ' +  json[1].electrical_cases.number

    if(json[1].electrical_cases.alerted == 'yes'){
      document.getElementById("st40_elec").style.color = 'red'
    }

    document.getElementById("cage_struct").innerHTML = 'Structural = ' + json[0].structural_cases.number

    if(json[0].structural_cases.alerted == 'yes'){
      document.getElementById("cage_struct").style.color = 'red'
    }

    document.getElementById("cage_mec").innerHTML = 'Mechanical = ' + json[0].mechanical_cases.number

    if(json[0].mechanical_cases.alerted == 'yes'){
      document.getElementById("cage_mec").style.color = 'red'
    }

    document.getElementById("cage_elec").innerHTML = 'Electrical = ' +  json[0].electrical_cases.number

    if(json[0].electrical_cases.alerted == 'yes'){
      document.getElementById("cage_elec").style.color = 'red'
    }




    

}

  ngOnInit(){
    var text = '['+
'{'+
'"location":"cage01",'+
'"mechanical_cases":{'+
'"number":10,'+
'"alerted":"yes"'+
'},'+
'"electrical_cases":{'+
'"number":10,'+
'"alerted":"yes"'+
'},'+
'"structural_cases":{'+
'"number":10,'+
'"alerted":"yes"'+
'}'+
'},'+
'{'+
'"location":"st40",'+
'"mechanical_cases":{'+
'"number":2,'+
'"alerted":"yes"'+
'},'+
'"electrical_cases":{'+
'"number":3,'+
'"alerted":"yes"'+
'},'+
'"structural_cases":{'+
'"number":4,'+
'"alerted":"no"'+
'}'+
'}'+
']'


var json = JSON.parse(text)

      
this.parser(text)

document.getElementById("alert_total_count_st40").innerHTML += json[0].hasOwnProperty("mechanical_cases") 

 document.getElementById("alert_total_count_cage").innerHTML = (parseInt(document.getElementById("cage_struct").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("cage_elec").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("cage_mec").innerHTML.toString().split(" ")[2])).toString()
  

var Url = "http://192.168.221.130:8081/get_dizmo_data?location=Operating&type=ME";
      
      (function ($) {
      $.ajax({
            url: Url,
            type:"GET",
            success: function(result){
                this.parser(result)
            },
            error: function(error){
                //document.getElementById('ME').innerHTML = error;
                //Hay que ver qué hacemos cuando haya un error
            }
        })
    })(jQuery);


  var socket = new WebSocket("ws://192.168.221.130:8080/jsr356toUpper");
          
  socket.onopen = function(e) {
    socket.send("Dizmo");
  };
          
    socket.onmessage = function(e){
      var json = JSON.parse(e.data)

      
      if(json[0].location == "cage01"){
        var a = 0
        var b = 1
      }else{
        var a = 1
        var b = 0
      }
      var c = "cage"
      var d = "st40"

      if(json[a].hasOwnProperty("mechanical_cases")){
        document.getElementById(c + "_mec").innerHTML = "Mechanical = " + json[a].mechanical_cases.number
        if(json[a].mechanical_cases.alerted == 'yes')
          document.getElementById(c + "_mec").style.color = 'red'
        else
          document.getElementById(c + "_mec").style.color = 'white'
      }
      if(json[a].hasOwnProperty("structural_cases")){
        document.getElementById(c + "_struct").innerHTML = "Structural = " + json[a].structural_cases.number
        if(json[a].structural_cases.alerted == 'yes')
          document.getElementById(c + "_struct").style.color = 'red'
        else
          document.getElementById(c + "_struct").style.color = 'white'
      }
      if(json[a].hasOwnProperty("electrical_cases")){
        document.getElementById(c + "_elec").innerHTML = "Electrical = " + json[a].structural_cases.number
        if(json[a].electrical_cases.alerted == 'yes')
          document.getElementById(c + "_elec").style.color = 'red'
        else
          document.getElementById(c + "_elec").style.color = 'white'
      }

      if(json[b].hasOwnProperty("mechanical_cases")){          
        document.getElementById(d + "_mec").innerHTML = "Mechanical = " + json[b].mechanical_cases.number
        if(json[b].mechanical_cases.alerted == 'yes')
          document.getElementById(d + "_mec").style.color = 'red'
        else
          document.getElementById(d + "_mec").style.color = 'white'
      }
      if(json[b].hasOwnProperty("structural_cases")){
        document.getElementById(d + "_struct").innerHTML = "Structural = " + json[b].structural_cases.number
         if(json[b].structural_cases.alerted == 'yes')
          document.getElementById(d + "_struct").style.color = 'red'
        else
          document.getElementById(d + "_struct").style.color = 'white'
      }
      if(json[b].hasOwnProperty("electrical_cases")){
        document.getElementById(d + "_elec").innerHTML = "Electrical = " + json[b].structural_cases.number
        if(json[b].electrical_cases.alerted == 'yes')
          document.getElementById(d + "_elec").style.color = 'red'
        else
          document.getElementById(d + "_elec").style.color = 'white'
      }

      document.getElementById("alert_total_count_cage").innerHTML = (parseInt(document.getElementById("cage_struct").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("cage_elec").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("cage_mec").innerHTML.toString().split(" ")[2])).toString()

      document.getElementById("alert_total_count_st40").innerHTML = (parseInt(document.getElementById("st40_struct").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("st40_elec").innerHTML.toString().split(" ")[2]) + parseInt(document.getElementById("st40_mec").innerHTML.toString().split(" ")[2])).toString()
    }

  }

  




  



  display(a, b){
    var Url = "http://192.168.221.130:8081/get_dizmo_data?location=Operating&type=ME";
      
      (function ($) {
      $.ajax({
            url: Url,
            type:"GET",
            success: function(result){
                this.parser(result)
            },
            error: function(error){
                //document.getElementById('ME').innerHTML = error;
                //Hay que ver qué hacemos cuando haya un error
            }
        })
    })(jQuery);


    var socket = new WebSocket("ws://192.168.221.130:8080/jsr356toUpper");
            
    socket.onopen = function(e) {
      socket.send("Dizmo");
    };
            
      socket.onmessage = function(e){
        var json = JSON.parse(e.data)

        document.getElementById("Tabla").innerHTML = "<table><tr><th>Toolcase</th><th>ID Worker</th><th>Problem</th><th>Status</th><th>Battery</th>"
        //Recorro el JSON para añadir filas (td)


      
    }
  }
}