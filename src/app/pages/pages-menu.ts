import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'Administracion',
    icon: 'nb-person',
    link: '/pages/user/profile',
    home: true,
    children: [
      {
        title: 'Administrar envios',
        link: '/pages/user/profile',
      },
      {
        title: 'Asignaciones',
        link: '/pages/user/asignacion',
      },
    ],
  },
];
