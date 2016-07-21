class LoginController {
  constructor($state) {
    this.name = 'Login Component';
    this.user = {
      userName: '',
      password: '',
    };
  }

  login() {
    console.log(this.user);
  }

  reset() {

  }
}

export default LoginController;
