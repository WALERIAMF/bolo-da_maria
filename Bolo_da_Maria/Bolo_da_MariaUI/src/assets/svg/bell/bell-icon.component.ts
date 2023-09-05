import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bell',
  templateUrl: './bell-icon.component.html',
  styleUrls: []
})
export class BellComponent {
  @Input() bellHeight: string ="15"
  @Input() bellWith: string ="15"
}