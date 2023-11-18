import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css'],
})
export class MenuInicialComponent {

  constructor(){}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Autores',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Consultar Todos os Autores',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/tabela-autores'
          }
        ],
      },
      {
        label: 'Editoras',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Consultar Todas as Editoras',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/tabela-editoras'
          },
         
        ],
      },
      {
        label: 'Generos',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Consultar Todos os Generos',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/tabela-generos'
          }
        ],
      },
      {
        label: 'Livros',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Consultar Todos os Livros',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/tabela-livros' 
          },
          {
            label: 'Consultar Livros por Autor e Genero',
            icon: 'pi pi-fw pi-calendar-times',
            routerLink: '/tabela-livros-por-autor-e-genero'
          },
        ],
      },
      {
        label: 'Pessoas',
        items: [
          {
            label: 'Consultar Todas as Pessoas',
            routerLink: '/tabela-pessoas'
          }
        ]
      },
      {
        label: 'Vendas',
        items: [
          {
            label: 'Consultar Todas as Vendas',
            routerLink: '/tabela-vendas'
          },
          {
            label: 'Consultar Vendas por Mes',
            routerLink: '/tabela-vendas-por-mes'
          }
        ]
      },
      {
        label: 'Transação',
        items: [
          {
            label: 'Consultar todas as Transações',
            routerLink: '/tabela-transacoes'
          }
        ]
      }
    ];
  }
}
