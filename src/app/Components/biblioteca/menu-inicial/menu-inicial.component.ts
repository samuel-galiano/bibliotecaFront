import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css'],
})
export class MenuInicialComponent {

  constructor() { }

  items: MegaMenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Autores',
        icon: 'pi pi-fw pi-file',
        items: [
          [
            {
              label: undefined,
              icon: 'pi pi-fw pi-plus',
              items: [{ label: 'Consultar Autores', routerLink: '/tabela-autores' }]
            }
          ]

        ],
      },
      {
        label: 'Editoras',
        icon: 'pi pi-fw pi-pencil',
        items: [
          [
            {
              label: undefined,
              icon: 'pi pi-fw pi-align-left',
              items: [{ label: 'Consultar Editoras', routerLink: '/tabela-editoras' }]
            },
          ]
        ],
      },
      {
        label: 'Generos',
        icon: 'pi pi-fw pi-paperclip',
        items: [
          [
            {
              label: undefined,
              icon: 'pi pi-fw pi-user-plus',
              items: [{ label: 'Consultar Generos', routerLink: '/tabela-generos' }]
            }
          ]

        ],
      },
      {
        label: 'Livros',
        icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: undefined,
              icon: 'pi pi-fw pi-pencil',
              items: [{ label: 'Consultar Livros', routerLink: '/tabela-livros' },
              { label: 'Consultar Livros por Autor e Genero', routerLink: '/tabela-livros-por-autor-e-genero' }]
            },
          ]
        ],
      },
      {
        label: 'Pessoas',
        icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: undefined,
              items: [{ label: 'Consultar Pessoas', routerLink: '/tabela-pessoas' }]
            }
          ]
        ]
      },
      {
        label: 'Vendas',
        icon: 'pi pi-fw pi-tags',
        items: [
          [
            {
              label: undefined,
              items: [{ label: 'Consultar Vendas', routerLink: '/tabela-vendas'},
                      { label: 'Consultar Vendas do Mes', routerLink: '/tabela-vendas-por-mes' }]
              
            }
          ]
        ]
      },
      {
        label: 'Transação',
        icon: 'pi pi-fw pi-shopping-bag',
        items: [
          [
            {
              label: 'Consultar todas as Transações',
              items: [{ label: 'Consultar Transacoes', routerLink: '/tabela-transacoes'}]      
            }
          ]
        ]
      }
    ];
  }
}
