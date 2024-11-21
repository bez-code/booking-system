import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private services:ReservationService) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservationData = this.reservationForm.value
      this.services.addReservation(reservationData)
      console.log(reservationData);
      


    }
  }
}
