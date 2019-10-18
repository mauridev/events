import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'


@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Próximos Eventos</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events"  class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventListComponent implements OnInit {
  events

  constructor(private eventService: EventService, private toastr: ToastrService) {
       
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {

    this.toastr.success(eventName)
  }
  
  

}