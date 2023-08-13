import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: []
})
export class LogoComponent {
  @Input() logoHeight: string ="224"
  @Input() logoWith: string ="224"
}
