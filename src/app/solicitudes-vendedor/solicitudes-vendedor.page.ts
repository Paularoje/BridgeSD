import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from './solicitudes.service';

@Component({
  selector: 'app-solicitudes-vendedor',
  templateUrl: './solicitudes-vendedor.page.html',
  styleUrls: ['./solicitudes-vendedor.page.scss'],
})
export class SolicitudesVendedorPage implements OnInit {
  autocomplete: { input: string };
  solicitudes=[];

  constructor(private solicitudService: SolicitudesService) { }

  updateSearchResults() {
     console.log(this.autocomplete.input);    //search input will display
  }

  ngOnInit() {
    this.solicitudes=this.solicitudService.getSolicitudes();
  }
  ionViewWillEnter(){
    this.solicitudes=this.solicitudService.getSolicitudes();
  }

}
