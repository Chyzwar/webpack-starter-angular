class NavbarController {
  constructor($mdSidenav) {
    this.name = 'navbar';
  }
  openLeftMenu(){
    $mdSidenav('left').toggle();
  }
}

export default NavbarController;
