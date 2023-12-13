import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-orders-completed',
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule],
  templateUrl: './orders-completed.component.html',
  styleUrl: './orders-completed.component.scss'
})
export class OrdersCompletedComponent {

}
