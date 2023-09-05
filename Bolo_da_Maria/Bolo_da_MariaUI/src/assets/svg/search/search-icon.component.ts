import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-icon.component.html',
  styleUrls: []
})
export class SearchComponent {
  @Input() searchHeight: string ="20"
  @Input() searchWith: string ="20"
}
