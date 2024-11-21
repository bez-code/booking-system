import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {
    let savedReservation = localStorage.getItem("reservation");

    if (savedReservation) {
      this.reservations = JSON.parse(savedReservation);
    } else {
      this.reservations = [];
    }
  }

  private reservations: Reservation[] = []

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem("reservation", JSON.stringify(this.reservations))
  }
  deleteReservartion(id: string): void {
    let index = this.reservations.findIndex(res => res.id == id)
    this.reservations.slice(index)
    localStorage.setItem("reservation", JSON.stringify(this.reservations))

  }
  upDateIndex(updateReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id == updateReservation.id)
    this.reservations[index] = updateReservation;
    localStorage.setItem("reservation", JSON.stringify(this.reservations))
  }
}
