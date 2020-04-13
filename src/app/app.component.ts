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
']"'
var json = JSON.parse(text)


  }

  display(){
    document.getElementById("Tabla").innerHTML += "Hola"
  }
}
