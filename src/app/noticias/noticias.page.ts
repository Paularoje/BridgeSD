import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { NoticiaSsService } from './noticia-ss.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  ofertas = [];

  constructor(public router: Router, private menu: MenuController, public modalController: ModalController,private ofertaService: NoticiaSsService) { }

  ngOnInit() {
    this.ofertas = this.ofertaService.getTodasOfertas();
  }

}
