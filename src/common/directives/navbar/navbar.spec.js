import NavbarCtrl from './NavbarCtrl';
import navbarDirective from './navbar';
import NavbarTemplate from './navbar.html';

describe('NavbarDirective', () => {
  describe('Controller', () => {
    const ctrl = new NavbarCtrl();

    it('have name property', () => {
      expect(ctrl).to.have.property('name');
    });
  });

  describe('Component', () => {
    const component = navbarDirective();
    const ctrl = new NavbarCtrl();

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
