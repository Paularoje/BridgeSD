import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController, IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  indiceSeleccionado = 0;
  paginas=[];
  changeUser=[];
  rutaChangeUser = [];
  infoUser = JSON.parse(localStorage.getItem('usuario'));


  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
    if(this.infoUser.tipoUser === 'comprador'){
      this.changeUser=['transportador', 'vendedor'];
      this.rutaChangeUser =['/menu/inicio-transportador', '/menu/inicio-vendedor'];
      this.paginas=[
        {
          titulo: 'Inicio comprador',
          url: '/menu/inicio-comprador',
          icono:'home'
        },
        {
          titulo: 'Información personal',
          url: '/menu/informacion-personal',
          icono: 'person'
        },
      ];
    };
    if(this.infoUser.tipoUser === 'transportador'){
      this.changeUser=['comprador', 'vendedor'];
      this.rutaChangeUser =['/menu/inicio-comprador', '/menu/inicio-vendedor'];
      this.paginas=[
        {
          titulo: 'Inicio transportador',
          url: '/menu/inicio-transportador',
          icono:'home'
        },
        {
          titulo: 'Información personal',
          url: '/menu/informacion-personal',
          icono: 'person'
        },
      ];
    };
    if(this.infoUser.tipoUser === 'vendedor'){
      this.changeUser=['comprador', 'transportador'];
      this.rutaChangeUser =['/menu/inicio-comprador', '/menu/inicio-transportador'];
      this.paginas=[
        {
          titulo: 'Inicio vendedor',
          url: '/menu/inicio-vendedor',
          icono:'home'
        },
        {
          titulo: 'Información personal',
          url: '/menu/informacion-personal',
          icono: 'person'
        },
      ];
    };
   }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }
  cambiarIndiceSeleccionado2(j: number, user: string){
    this.indiceSeleccionado = j;
    localStorage.setItem('usuario', localStorage.getItem('usuario').replace(this.infoUser.tipoUser, user));
    this.infoUser.tipoUser=user;
    this.ngOnInit();
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea realmente cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () =>{
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }

  closeAccordion() {
    this.accordionGroup.value = undefined;
  }
}
