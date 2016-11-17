import SideNavbarCtrl from './SideNavbarCtrl';
import navbarDirective from './sideNavbar';
import NavbarTemplate from './side-navbar.html';

describe('SideNavbarDirective', () => {
  describe('Controller', () => {
    const ctrl = new SideNavbarCtrl();

    it('have name property', () => {
      expect(ctrl).to.have.property('name');
    });
  });

  describe('Component', () => {
    const component = navbarDirective();
    const ctrl = new SideNavbarCtrl();

    it('includes the intended template', () => {
      expect(component.template).to.equal(NavbarTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ctrl);
    });
  });
});
