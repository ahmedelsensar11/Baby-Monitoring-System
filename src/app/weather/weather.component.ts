import { Component, OnInit } from "@angular/core";
import { StatusService } from "../../services/status.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  //temperature sensor
  temperature: number;

  //humidity sensor
  humidity: number;

  constructor(private _StatusService: StatusService) {
    //get status data from db and assign it to our variable
    this._StatusService
      .getStatusData()
      .valueChanges()
      .subscribe(dataList => {
        //assign recieved data to our variables
        //data form is [humidity , temperature]
        this.humidity = dataList[0];
        this.temperature = dataList[1];
        //console.log(response) //just for test
      });
  }

  //to calculate precentage circle ,then we can draw it
  getPercentage(floatNum: number) {
    return Math.floor(floatNum);
  }

  ngOnInit(): void {}
}
