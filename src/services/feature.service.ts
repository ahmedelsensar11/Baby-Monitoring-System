import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})

 
export class FeatureService {

  
  private motorPath = '/motor'; //Motor
  private fanPath = '/fan';     //Fan

  motordata: AngularFireList<any>;
  fandata:AngularFireList<any>;
 

  constructor(private db: AngularFireDatabase) {

    this.motordata = db.list(this.motorPath);
    this.fandata = db.list(this.fanPath);

  }

  //get motor data
  getMotorList(): AngularFireList<any> {
    return this.motordata;
  }
  
  //update state of motor
  updateMotorStatus(state)
  {
    return this.db.object('motor/run').set(state)
  }

  //update levels of fan
  updateMotorLevels(level:number){
    return this.db.object('motor/level').set(level)
  }


  //get fan data
  getFanList(): AngularFireList<any> {
    return this.fandata;
  }

  //update state of fan
  updateFanStatus(state)
  {
    return this.db.object('fan/run').set(state)
  }

  //update levels of fan
  updateFanLevels(level:number){
    return this.db.object('fan/level').set(level)
  }

  
  /*
  //try to improve this code
  handleData(data ,motorList ,motorLevel, motorIsOn, motorStatus)
  {
    motorList = data;
    motorLevel = motorList[0];
    if (motorList[1] == 1) {
      motorIsOn = true;
      motorStatus = "On"
    } else {
      motorIsOn = false;
      motorStatus = "Off"
    }
  }
 */


}
