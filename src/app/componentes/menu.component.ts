import { Component } from '@angular/core';
import { Menudto } from './menudto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
listaMenu:Menudto[]=[
  {nombre:'Inicio',url:''},
  {nombre:'Categorías',url:'/productcategories'},
  {nombre:'Productos',url:'/products'},
  {nombre:'Colores',url:'/colors'},
  {nombre:'Tamaños',url:'/sizes'},
  {nombre:'Items',url:'/productitems'},
  {nombre:'Ventas',url:'/sales'}
];
}
