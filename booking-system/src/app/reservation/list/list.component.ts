import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private services: ReservationService) { }

  ngOnInit(): void {
    this.services.getReservations().subscribe(reservations => {
      this.reservations = reservations;  
    });
  }

  deleteReservation(id: string) {
    this.services.deleteReservation(id).subscribe(res=>{
      this.reservations = this.reservations.filter(reservation => reservation.id == id);
    })
  }
}
