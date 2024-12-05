// app.component.ts
import { Component } from '@angular/core';
import { UsertableComponent } from './presentation/components/usertable/usertable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsertableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CasaAhorro_Front';
}
