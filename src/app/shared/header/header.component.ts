import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //Declarando la variable 
  btnIniciarSesion:string;
  btnInicio:string;
  btnHoteles:string;
  btnQuienesSomos:string;
  btnContacto: string;
  
  btnCategorias:Array<string>;
  
  constructor() { 
    this.btnIniciarSesion = "Iniciar Sesion";
    this.btnInicio = "Inicio";
    this.btnHoteles = "Hoteles";
    this.btnQuienesSomos = "Quienes somos";
    this.btnContacto = "Contacto";
    
    this.btnCategorias = [
        'Una estrella',
        'Dos estrellas',
        'Tres estrellas',
        'Cuatro estrellas',
        'cinco estrellas'
      ];
  }

  ngOnInit() {
  }

}
