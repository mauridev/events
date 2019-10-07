import { Component } from '@angular/core'



@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Próximos Eventos</h1>
        <hr />
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/21/2019',
        time: '10:00 am',
        price: 399.99,
        imageUrl: '/assets/images/golden-gate.jpg',
        location: {
            address: 'Cuareim 1080',
            city: 'Montevideo',
            country: 'Uruguay'
        }   
    }

    
}