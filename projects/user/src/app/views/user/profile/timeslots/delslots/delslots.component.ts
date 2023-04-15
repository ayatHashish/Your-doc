import { Component } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';

@Component({
  selector: 'app-delslots',
  templateUrl: './delslots.component.html',
  styleUrls: ['./delslots.component.scss','../editslot/editslot.component.scss',]
})
export class DelslotsComponent {


  constructor (private _deleteSlots :TimeslotService){

  }
 
}
