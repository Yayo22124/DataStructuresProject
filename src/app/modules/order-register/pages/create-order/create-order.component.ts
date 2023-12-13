import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { AnimationsService } from 'src/app/core/services/animations/animations.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderRegisterService } from 'src/app/core/services/OrderRegister/order-register.service';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
  ],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss',
  animations: [AnimationsService.slideInFromBottom]
})
export class CreateOrderComponent {
  constructor(
    private formBuilder: FormBuilder,
    private orderRegisterService: OrderRegisterService,
    private _snackbar: MatSnackBar,
    private animationService: AnimationsService
  ) {}
  orderForm: FormGroup = this.formBuilder.group({
    pan: [false],
    tocino: [false],
    tomate: [false],
    lechuga: [false],
    carne: [false],
    picante: [false],
    queso: [false],
  });

  onSubmit(): void {
    const order = this.orderForm.value;
    this.orderRegisterService.pushOrder(order);
    this.orderForm.reset();
    this._snackbar.open("Orden creada correctamente", "Cerrar", {
      duration: 1.5*1000
    })
  }
}
