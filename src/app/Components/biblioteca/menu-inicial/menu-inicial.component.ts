import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css'],
})
export class MenuInicialComponent {
  public items: MegaMenuItem[] = [];

  constructor() { }
  
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
              items: [{ label: 'Consultar Autores', routerLink: '/autores/tabela-autores' }]
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
              items: [{ label: 'Consultar Editoras', routerLink: '/editoras/tabela-editoras' }]
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
              items: [{ label: 'Consultar Generos', routerLink: '/generos/tabela-generos' }]
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
              items: [{ label: 'Consultar Livros', routerLink: '/livros/tabela-livros' },
              { label: 'Consultar Livros por Autor e Genero', routerLink: '/livros/tabela-livros-por-autor-e-genero' }]
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
              items: [{ label: 'Consultar Pessoas', routerLink: '/pessoas/tabela-pessoas' }]
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
              items: [{ label: 'Consultar Vendas', routerLink: '/vendas/tabela-vendas'},
                      { label: 'Consultar Vendas do Mes', routerLink: '/vendas/tabela-vendas-por-mes' }]
              
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
              items: [{ label: 'Consultar Transacoes', routerLink: '/transacoes/tabela-transacoes'}]      
            }
          ]
        ]
      }
    ];
  }
}
