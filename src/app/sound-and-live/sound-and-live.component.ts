import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../services/status.service'

@Component({
  selector: 'app-sound-and-live',
  templateUrl: './sound-and-live.component.html',
  styleUrls: ['./sound-and-live.component.css']
})
export class SoundAndLiveComponent implements OnInit {

  //sound detected
  soundDetected :string;
  
  constructor(private _StatusService:StatusService) 
  {
    this._StatusService
    .getSoundData()
    .valueChanges()
    .subscribe(soundData => {
      this.soundDetected = soundData[0];
    })
  }

  ngOnInit(): void {
  }

}
