import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get history() {
    return this._gifsService.historial;
  }

  constructor(
    private _gifsService: GifsService
  ) { }

  buscar(item: string) {
    this._gifsService.buscarGifs(item);
  }
}
