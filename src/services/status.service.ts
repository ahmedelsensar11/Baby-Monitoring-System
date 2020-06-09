import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})


export class StatusService {

  private statusPath = '/status';
  private soundPath = '/Sound Detection';

  statusList: AngularFireList<any>;
  soundList: AngularFireList<any>;

  constructor(private db:AngularFireDatabase) {
    this.statusList = this.db.list(this.statusPath); //get status as a list of data
    this.soundList = this.db.list(this.soundPath); //get sound as a list of data

  }

  //get status data
  getStatusData():AngularFireList<any>
  {
    return this.statusList
  }
  
  //get status data
  getSoundData():AngularFireList<any>
  {
    return this.soundList
  }

}
