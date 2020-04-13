import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './Style/app.component.css' ]
})



export class AppComponent  {

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

document.getElementById("alert_total_count_cage").innerHTML += json[0].mechanical_cases.number + json[0].electrical_cases.number + json[0].structural_cases.number

document.getElementById("alert_total_count_st40").innerHTML += json[1].mechanical_cases.number + json[1].electrical_cases.number + json[1].structural_cases.number

document.getElementById("st40_struct").innerHTML += json[1].structural_cases.number
document.getElementById("st40_mec").innerHTML += json[1].mechanical_cases.number
document.getElementById("st40_elec").innerHTML += json[1].electrical_cases.number

document.getElementById("cage_struct").innerHTML += json[0].structural_cases.number
document.getElementById("cage_mec").innerHTML += json[0].mechanical_cases.number
document.getElementById("cage_elec").innerHTML += json[0].electrical_cases.number



  }

  display(){
    document.getElementById("Tabla").innerHTML += "Hola"
  }
}
