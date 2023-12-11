import { AnimationsService } from 'src/app/core/services/animations/animations.service';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  animations: [AnimationsService.slideInFromBottom],
  imports: [MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(
    // Animations Service
    private animationService: AnimationsService
  ) {}
}