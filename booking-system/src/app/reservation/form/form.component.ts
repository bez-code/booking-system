import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private services: ReservationService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if (id) {
      this.services.getReservation(id).subscribe(res => {
        this.reservationForm.patchValue(res)
      })
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservationData: Reservation = this.reservationForm.value

      let id = this.activeRoute.snapshot.paramMap.get('id')
      if (id) {
        this.services.updateIndex(id,reservationData).subscribe(()=>{
          console.log("update");
          
        })
      }
      else {
        this.services.addReservation(reservationData).subscribe(()=>{
          console.log("add");
        })
      }

      this.router.navigate(['/list'])
    }
  }
}
