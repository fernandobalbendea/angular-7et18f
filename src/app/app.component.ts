import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jQuery: any;


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './Style/app.component.css' ]
})



export class AppComponent  {

parse(text){
     var json = JSON.parse(text)



    document.getElementById("alert_total_count_cage").innerHTML = json[0].mechanical_cases.number + json[0].electrical_cases.number + json[0].structural_cases.number

    document.getElementById("alert_total_count_st40").innerHTML = json[1].mechanical_cases.number + json[1].electrical_cases.number + json[1].structural_cases.number

    document.getElementById("st40_struct").innerHTML = 'Structural = ' + json[1].structural_cases.number
    document.getElementById("st40_mec").innerHTML = 'Mechanical = ' + json[1].mechanical_cases.number
    document.getElementById("st40_elec").innerHTML = 'Electrical = ' +  json[1].electrical_cases.number

    document.getElementById("cage_struct").innerHTML = 'Structural = ' + json[0].structural_cases.number
    document.getElementById("cage_mec").innerHTML = 'Mechanical = ' + json[0].mechanical_cases.number
    document.getElementById("cage_elec").innerHTML = 'Electrical = ' +  json[0].electrical_cases.number

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


var Url = "http://192.168.221.130:8081/get_dizmo_data?location=Operating&type=ME";
      
      (function ($) {
      $.ajax({
            url: Url,
            type:"GET",
            success: function(result){
                this.parse(result)
            },
            error: function(error){
                document.getElementById('ME').innerHTML = error;
            }
        })
    })(jQuery);


  var socket = new WebSocket("ws://192.168.221.130:8080/jsr356toUpper");
          
  socket.onopen = function(e) {
    socket.send("Dizmo");
  };
          
    socket.onmessage = function(e){
      var json = JSON.parse(e.data)



      document.getElementById("alert_total_count_cage").innerHTML = json[0].mechanical_cases.number + json[0].electrical_cases.number + json[0].structural_cases.number

      document.getElementById("alert_total_count_st40").innerHTML = json[1].mechanical_cases.number + json[1].electrical_cases.number + json[1].structural_cases.number

      document.getElementById("st40_struct").innerHTML = json[1].structural_cases.number
      document.getElementById("st40_mec").innerHTML = json[1].mechanical_cases.number
      document.getElementById("st40_elec").innerHTML = json[1].electrical_cases.number

      document.getElementById("cage_struct").innerHTML = json[0].structural_cases.number
      document.getElementById("cage_mec").innerHTML = json[0].mechanical_cases.number
      document.getElementById("cage_elec").innerHTML = json[0].electrical_cases.number

    
    }

  }

  




  



  display(){
    
  }

}