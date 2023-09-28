import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchText = new EventEmitter<string>();
  searchLocalText:string =""

  onSearch() {
    this.searchText.emit(this.searchLocalText)
  }

}
