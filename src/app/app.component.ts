import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var jQuery: any;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./Style/app.component.css"]
})
export class AppComponent {
  parser(text1) {
    var json = JSON.parse(text1);

    document.getElementById("alert_total_count_cage").innerHTML =
      json[0].mechanical_cases.number +
      json[0].electrical_cases.number +
      json[0].structural_cases.number;

    document.getElementById("alert_total_count_st40").innerHTML =
      json[1].mechanical_cases.number +
      json[1].electrical_cases.number +
      json[1].structural_cases.number;

    document.getElementById("st40_struct").innerHTML =
      "Structural = " + json[1].structural_cases.number;

    if (json[1].structural_cases.alerted == "yes") {
      document.getElementById("st40_struct").style.color = "red";
    }

    document.getElementById("st40_mec").innerHTML =
      "Mechanical = " + json[1].mechanical_cases.number;

    if (json[1].mechanical_cases.alerted == "yes") {
      document.getElementById("st40_mec").style.color = "red";
    }

    document.getElementById("st40_elec").innerHTML =
      "Electrical = " + json[1].electrical_cases.number;

    if (json[1].electrical_cases.alerted == "yes") {
      document.getElementById("st40_elec").style.color = "red";
    }

    document.getElementById("cage_struct").innerHTML =
      "Structural = " + json[0].structural_cases.number;

    if (json[0].structural_cases.alerted == "yes") {
      document.getElementById("cage_struct").style.color = "red";
    }

    document.getElementById("cage_mec").innerHTML =
      "Mechanical = " + json[0].mechanical_cases.number;

    if (json[0].mechanical_cases.alerted == "yes") {
      document.getElementById("cage_mec").style.color = "red";
    }

    document.getElementById("cage_elec").innerHTML =
      "Electrical = " + json[0].electrical_cases.number;

    if (json[0].electrical_cases.alerted == "yes") {
      document.getElementById("cage_elec").style.color = "red";
    }
  }

  ngOnInit() {
    var text =
      "[" +
      "{" +
      '"location":"cage01",' +
      '"mechanical_cases":{' +
      '"number":10,' +
      '"alerted":"yes"' +
      "}," +
      '"electrical_cases":{' +
      '"number":10,' +
      '"alerted":"yes"' +
      "}," +
      '"structural_cases":{' +
      '"number":10,' +
      '"alerted":"yes"' +
      "}" +
      "}," +
      "{" +
      '"location":"st40",' +
      '"mechanical_cases":{' +
      '"number":2,' +
      '"alerted":"yes"' +
      "}," +
      '"electrical_cases":{' +
      '"number":3,' +
      '"alerted":"yes"' +
      "}," +
      '"structural_cases":{' +
      '"number":4,' +
      '"alerted":"no"' +
      "}" +
      "}" +
      "]";

    var json = JSON.parse(text);
    this.parser(text);

    var text2 =
      "[" +
      "{" +
      '"case_serial_number":"me125",' +
      '"case_RFID_tag":"TC125",' +
      '"worker_id":"81234",' +
      '"notification_type":"warning",' +
      '"tool_check":"OK",' +
      '"event":"LOW_BATTERY",' +
      '"case_status":"open",' +
      '"battery_level":100' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}," +
      "{" +
      '"case_serial_number":"me042",' +
      '"case_RFID_tag":"TC042",' +
      '"worker_id":"81392",' +
      '"notification_type":"alert",' +
      '"tool_check":"Fault",' +
      '"event":"CLOSE",' +
      '"case_status":"close",' +
      '"battery_level":90' +
      "}" +
      "]";

    var json2 = JSON.parse(text2);
    var table =
      "<div class = 'information_container'><div class = 'info_card_list_container'><div class='info_card_long cabecera-listado cabecera'> <table class='info_car_long_content row_plantilla'><tbody><tr><td class='info_card_toolcase'><b>Toolcase</b></td><td class='info_card_table worker'>ID Worker</td><td class='info_card_table problem'>Problem</td><td class='info_card_table status'>Status</td><td class='info_card_table battery'>Battery</td></tr></tbody><tbody></tbody></table></div>";

    var i;

    for (i = 0; i < json2.length; i++) {
      if (
        json2[i].event != "OPEN" &&
        (json2[i].event == "LOW_BATTERY" || json2[i].case_status == "close")
      ) {
        table +=
          "<div class = 'info_card_long cabecera-listado'><button (click)='display2('" +
          json2[i].case_RFID_tag +
          "', '" +
          location +
          "', '" +
          json2[i].case_status +
          "', '" +
          json2[i].battery_level +
          "')'><table";
        if (json2[i].notification_type == "alert")
          table += " style='color : red'";
        else if (json2[i].notification_type == "warning")
          table += " style='color : orange'";
        table += "><tbody><tr><td class='info_card_toolcase' width='100px'>";
        table +=
          json2[i].case_serial_number +
          "</td><td width='100px'>" +
          json2[i].worker_id +
          "</td><td width='100px'>";
        if (json2[i].event != "LOW_BATTERY") table += json2[i].tool_check;
        else table += "Low Battery";

        table +=
          "</td><td width='100px'>" +
          json2[i].case_status +
          "</td><td width='100px'>" +
          json2[i].battery_level +
          "</td></tr></tbody></table></button></div>";
      }
    }
    table += "</div></div>";
    document.getElementById("Tabla").innerHTML = table;

    var text3 =
      "{" +
      '"case_serial_number":"mc042",' +
      '"case_RFID_tag":"TC042",' +
      '"picture_worker_id":"pic_81392",' +
      '"worker_id":"81392",' +
      '"name_worker_id":"Juan Ramirez",' +
      '"Tools":[' +
      "{" +
      '"Status":"Missing_Tool",' +
      '"Serial_Number":"12398",' +
      '"RFID_Tag":"TC042_1",' +
      '"Details":"Alicate",' +
      '"Message":"Missing at 10:11",' +
      '"Picture":"pic_TC042_1"' +
      "}," +
      "{" +
      '"Status":"Missing_Tool",' +
      '"Serial_Number":"18395",' +
      '"RFID_Tag":"TC042_2",' +
      '"Details":"Herramienta de corte",' +
      '"Message":"Missing at 14:20",' +
      '"Picture":"pic_TC042_2"' +
      "}," +
      "{" +
      '"Status":"Added_Tool",' +
      '"Serial_Number":"15729",' +
      '"RFID_Tag":"TC042_3",' +
      '"Details":"Destornillador",' +
      '"Message":"Added at 14:20",' +
      '"Picture":"pic_TC042_3"' +
      "}" +
      "]" +
      "}";
    document.getElementById("Tabla2").innerHTML = "hola";
    var zone = "st40";
    var case_status = "open";
    var battery_level = "81";
    var json3 = JSON.parse(text3);
    document.getElementById("Tabla2").innerHTML = "hola";

    table =
      "<div class = 'info_card_list_container'><div class='info_card_long2 titulos cabecera-listado cabecera'> <table class='info_car_long_content row_plantilla'><tr><td class='info_card_table serialnum' style = 'vertical-align : top;padding-top : 10px;'>" +
      json3.case_serial_number +
      "</td><td class='info_card_table zone'  style = 'vertical-align : top'><img src = '";
    if (zone === "Cage01") {
      table +=
        "https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/Cage2.png";
    } else {
      table +=
        "https://stackblitz.com/files/angular-7et18f/github/fernandobalbendea/angular-7et18f/master/src/app/assets/img/plane.png";
    }
    table +=
      "' alt= 'zone'></td><td class='info_card_table lock' style = 'vertical-align : top'><img src = '";

    if (case_status === "open") {
      table +=
        "https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/open_lock.png";
    } else {
      table +=
        "https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/closed_lock.png";
    }
    table +=
      "' alt = 'lock'></td><td style = 'vertical-align : top; padding-top : 10px;'>" +
      battery_level +
      "%</td><td style = 'vertical-align : top;padding-top : 10px;'><img src = '";

    if (parseInt(battery_level) <= 20) {
      table +=
        "https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/low_battery.png";
    } else {
      table +=
        "https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/fine_battery.png";
    }

    table +=
      "' alt = 'bat'></td><td><img src = 'https://cdn.jsdelivr.net/gh/fernandobalbendea/angular-7et18f@master/src/app/assets/img/operator.PNG' alt = 'operator'></td>";

    table +=
      "</tr></table></div><div class='info_card_long2 cabecera-listado cabecera'><table><tr><td class='info_card_table'><b>Picture</b></td ><td class='info_card_table zone'><b>Tool Status</b></td><td class='info_card_table '><b>Details</b></td><td class='info_card_table zone'><b>Message</b></td></tr></table></div>";

    for (i = 0; i < json3.Tools.length; i++) {
      table +=
        "<div class='info_card_long2 tools cabecera-listado cabecera'><table><tr><td class='info_card_table img'><img src = '" +
        json3.Tools[i].Picture +
        ".PNG' alt = 'imagen'></td><td class='info_card_table zone'>" +
        json3.Tools[i].Status +
        "</td><td class='info_card_table zone'>" +
        json3.Tools[i].Details +
        " " +
        json3.Tools[i].Serial_Number +
        "</td><td class='info_card_table zone'>" +
        json3.Tools[i].Message +
        "</td></tr></table></div>";
    }

    table += "</div>";

    document.getElementById("Tabla2").innerHTML = table;

    var text4 =
      '{' +
      '"case_serial_number":"me125",' +
      '"case_RFID_tag":"TC125",' +
      '"timestamp":"XXXX",' +
      '"worker_id":"81234",' +
      '"zone":"ST40",' +
      '"notification_type":"warning", ' +
      '"event":"Open"' +
      '}';

    var json4 = JSON.parse(text4)
    

    table = 
  document.getElementById("Alerts").innerHTML += "<table><tr><td>table</td></tr></table>"


    var Url =
      "http://192.168.221.130:8081/get_dizmo_data?location=Operating&type=ME";

    (function($) {
      $.ajax({
        url: Url,
        type: "GET",
        success: function(result) {
          this.parser(result);
        },
        error: function(error) {
          //document.getElementById('ME').innerHTML = error;
          //Hay que ver qué hacemos cuando haya un error
        }
      });
    })(jQuery);

    var socket = new WebSocket("ws://192.168.221.130:8080/jsr356toUpper");

    socket.onopen = function(e) {
      socket.send("Dizmo");
    };

    socket.onmessage = function(e) {
      var json = JSON.parse(e.data);

      if (json[0].location == "cage01") {
        var a = 0;
        var b = 1;
      } else {
        var a = 1;
        var b = 0;
      }
      var c = "cage";
      var d = "st40";

      if (json[a].hasOwnProperty("mechanical_cases")) {
        document.getElementById(c + "_mec").innerHTML =
          "Mechanical = " + json[a].mechanical_cases.number;
        if (json[a].mechanical_cases.alerted == "yes")
          document.getElementById(c + "_mec").style.color = "red";
        else if (json[a].mechanical_cases.alerted == "no")
          document.getElementById(c + "_mec").style.color = "white";
      }
      if (json[a].hasOwnProperty("structural_cases")) {
        document.getElementById(c + "_struct").innerHTML =
          "Structural = " + json[a].structural_cases.number;
        if (json[a].structural_cases.alerted == "yes")
          document.getElementById(c + "_struct").style.color = "red";
        else document.getElementById(c + "_struct").style.color = "white";
      }
      if (json[a].hasOwnProperty("electrical_cases")) {
        document.getElementById(c + "_elec").innerHTML =
          "Electrical = " + json[a].structural_cases.number;
        if (json[a].electrical_cases.alerted == "yes")
          document.getElementById(c + "_elec").style.color = "red";
        else document.getElementById(c + "_elec").style.color = "white";
      }

      if (json[b].hasOwnProperty("mechanical_cases")) {
        document.getElementById(d + "_mec").innerHTML =
          "Mechanical = " + json[b].mechanical_cases.number;
        if (json[b].mechanical_cases.alerted == "yes")
          document.getElementById(d + "_mec").style.color = "red";
        else document.getElementById(d + "_mec").style.color = "white";
      }
      if (json[b].hasOwnProperty("structural_cases")) {
        document.getElementById(d + "_struct").innerHTML =
          "Structural = " + json[b].structural_cases.number;
        if (json[b].structural_cases.alerted == "yes")
          document.getElementById(d + "_struct").style.color = "red";
        else document.getElementById(d + "_struct").style.color = "white";
      }
      if (json[b].hasOwnProperty("electrical_cases")) {
        document.getElementById(d + "_elec").innerHTML =
          "Electrical = " + json[b].structural_cases.number;
        if (json[b].electrical_cases.alerted == "yes")
          document.getElementById(d + "_elec").style.color = "red";
        else document.getElementById(d + "_elec").style.color = "white";
      }

      document.getElementById("alert_total_count_cage").innerHTML = (
        parseInt(
          document
            .getElementById("cage_struct")
            .innerHTML.toString()
            .split(" ")[2]
        ) +
        parseInt(
          document
            .getElementById("cage_elec")
            .innerHTML.toString()
            .split(" ")[2]
        ) +
        parseInt(
          document
            .getElementById("cage_mec")
            .innerHTML.toString()
            .split(" ")[2]
        )
      ).toString();

      document.getElementById("alert_total_count_st40").innerHTML = (
        parseInt(
          document
            .getElementById("st40_struct")
            .innerHTML.toString()
            .split(" ")[2]
        ) +
        parseInt(
          document
            .getElementById("st40_elec")
            .innerHTML.toString()
            .split(" ")[2]
        ) +
        parseInt(
          document
            .getElementById("st40_mec")
            .innerHTML.toString()
            .split(" ")[2]
        )
      ).toString();
    };

    var socket2 = new WebSocket("ws://192.168.221.130:8080/jsr356toUpper");

    socket.onopen = function(e) {
      socket.send("Dizmo");
    };

    socket.onmessage = function(e) {};
  }

  display(zone, toolbox) {
    var Url =
      "http://192.168.221.130:8081/toolboxes_details?location=" +
      zone +
      "&type=" +
      toolbox(function($) {
        $.ajax({
          url: Url,
          type: "GET",
          success: function(result) {
            var json2 = JSON.parse(result);
            var table =
              "<div class = 'information_container'><div class = 'info_card_list_container'><div class='info_card_long cabecera-listado cabecera'> <table class='info_car_long_content row_plantilla'><tbody><tr><td class='info_card_toolcase'><b>Toolcase</b></td><td class='info_card_table worker'>ID Worker</td><td class='info_card_table problem'>Problem</td><td class='info_card_table status'>Status</td><td class='info_card_table battery'>Battery</td></tr></tbody><tbody></tbody></table></div>";

            var i;

            for (i = 0; i < json2.length; i++) {
              if (
                json2[i].event != "OPEN" &&
                (json2[i].event == "LOW_BATTERY" ||
                  json2[i].case_status == "close")
              ) {
                table +=
                  "<div class = 'info_card_long cabecera-listado'><button (click) = 'display2('" +
                  json2[i].case_RFID_tag +
                  "', '" +
                  zone +
                  "', '" +
                  json2[i].case_status +
                  "', '" +
                  json2[i].battery_level +
                  "')'><table";
                if (json2[i].notification_type == "alert")
                  table += " style='color : red'";
                else if (json2[i].notification_type == "warning")
                  table += " style='color : orange'";
                table +=
                  "><tbody><tr><td class='info_card_toolcase' width='100px'>";
                table +=
                  json2[i].case_serial_number +
                  "</td><td width='100px'>" +
                  json2[i].worker_id +
                  "</td><td width='100px'>";
                if (json2[i].event != "LOW_BATTERY")
                  table += json2[i].tool_check;
                else table += "Low Battery";

                table +=
                  "</td><td width='100px'>" +
                  json2[i].case_status +
                  "</td><td width='100px'>" +
                  json2[i].battery_level +
                  "</td></tr></tbody></table></button></div>";
              }
            }
            table += "</div></div>";
            document.getElementById("Tabla").innerHTML = table;
          },
          error: function(error) {
            //document.getElementById('ME').innerHTML = error;
            //Hay que ver qué hacemos cuando haya un error
          }
        });
      })(jQuery);
  }

  display2(RFID_Tag, zone, case_status, battery_level) {
    var Url =
      "http://192.168.221.130:8081/toolboxes_details?type=" +
      RFID_Tag(function($) {
        $.ajax({
          url: Url,
          type: "GET",
          success: function(result) {
            var json = JSON.parse(result);
            document.getElementById("Tabla2").innerHTML = "hola";

            var table =
              "<div class = 'information_container'><table border=1px><tr><th>" +
              json.case_serial_number +
              "</th></tr><tr><td><b>Picture></b></td><td><b>Tool Status</b></td><td><b>Details</b></td><td><b>Message</b></td></tr>";
            var i;
            for (i = 0; i < json.Tools.length; i++) {
              table +=
                "<tr><td><img src = '" +
                json.Tools[i].Picture +
                "' alt = 'imagen'></td><td>" +
                json.Tools[i].Status +
                "</td><td>" +
                json.Tools[i].Details +
                " " +
                json.Tools[i].Serial_Number +
                "</td><td>" +
                json.Tools[i].Message +
                "</td></tr>";
            }

            table += "</table></div>";

            document.getElementById("Tabla2").innerHTML = table;
          },
          error: function(error) {
            //document.getElementById('ME').innerHTML = error;
            //Hay que ver qué hacemos cuando haya un error
          }
        });
      })(jQuery);
  }
}
