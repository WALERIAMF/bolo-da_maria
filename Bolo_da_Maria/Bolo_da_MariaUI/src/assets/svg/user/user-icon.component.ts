import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user-icon.component.html',
  styleUrls: []
})
export class UserComponent {
  @Input() userHeight: string ="15"
  @Input() userWith: string ="15"
}