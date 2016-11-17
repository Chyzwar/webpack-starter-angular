

class SideNavbarController {
  constructor(Auth) {
    this.user = Auth.user;

    this.menu = [
      {
        link: '',
        title: 'Dashboard',
        icon: 'dashboard',
      },
      {
        link: '',
        title: 'Friends',
        icon: 'group',
      },
      {
        link: '',
        title: 'Messages',
        icon: 'message',
      },
    ];

    this.admin = [
      {
        link: '',
        title: 'Trash',
        icon: 'delete',
      },
      {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'settings',
      },
    ];
  }
}

export default SideNavbarController;
