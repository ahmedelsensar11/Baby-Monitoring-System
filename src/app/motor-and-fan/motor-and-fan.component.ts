import { Component, OnInit } from "@angular/core";
import { FeatureService } from "../../services/feature.service";


@Component({
  selector: "app-motor-and-fan",
  templateUrl: "./motor-and-fan.component.html",
  styleUrls: ["./motor-and-fan.component.css"]
})
export class MotorAndFanComponent implements OnInit {

  //motor properities
  motorIsOn :boolean;
  motorLevel :number;
  motorStatus :string;

  //fan properities
  fanIsOn: boolean;
  fanLevel: number;
  fanStatus :string;

  fanlist: any[];
  motorList: any[];

  constructor(public _FeatureService: FeatureService) {
    //get motor data
    this._FeatureService
      .getMotorList()
      .valueChanges()
      .subscribe(data => {
        this.motorList = data;
        this.motorLevel = this.motorList[0];
        if (this.motorList[1] == 1) {
          this.motorIsOn = true;
          this.motorStatus = "On"
        } else {
          this.motorIsOn = false;
          this.motorStatus = "Off"
        }
        //console.log("level is " + this.motorlist[0]+" and run is " + this.motorlist[1]);
        //for test
      });
    

      //get fan data
      this._FeatureService
      .getFanList()
      .valueChanges()
      .subscribe(data => {
        this.fanlist = data;
        this.fanLevel = this.fanlist[0];
        if (this.fanlist[1] == 1) {
          this.fanIsOn = true;
          this.fanStatus = "On"
        } else {
          this.fanIsOn = false;
          this.fanStatus = "Off"
        }
        //console.log("level is " + this.fanlist[0]+" and run is " + this.fanlist[1]);
        //for test
      });
  }


  //make control on #motor moving
  checkMotorStatus() {
    if (this.motorIsOn == true) {
    this._FeatureService.updateMotorStatus(1); //turn on Motor
    this.motorStatus = "On"; //motorStatus is on
      
    } 
    else {
      this._FeatureService.updateMotorStatus(0); //turn off Motor
      this.motorStatus = "Off"; //motorStatus is Off
    }
  }

  //update #motor levels
  changeMotorLevels() {
    let status = this.motorLevel; //status will be the active status which i selected
    this._FeatureService.updateMotorLevels(status); //update level and set into db
    //console.log(status)
  }  


  //make control on #fan moving
  checkFanStatus() {
    if (this.fanIsOn == true) {
      this._FeatureService.updateFanStatus(1); //turn on fan

      this.fanStatus = "On"; //fanStatus is on
    } 
    else {
      this._FeatureService.updateFanStatus(0);
      //turn of fan
      this.fanStatus = "Off";
    }
  }

  //update #fan levels
  changeFanLevels() {
    let status = this.fanLevel; //status will be the active status which i selected
    this._FeatureService.updateFanLevels(status); //update level and set into db
    //console.log(status)
  }


  ngOnInit() {}
}
