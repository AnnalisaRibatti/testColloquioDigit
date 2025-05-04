import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-rail',
  standalone: false,
  templateUrl: './left-rail.component.html',
  styleUrl: './left-rail.component.css'
})
export class LeftRailComponent {
  @Input()
  list!: string[]
}
