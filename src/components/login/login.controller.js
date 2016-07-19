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

  forgotten() {

  }
}

export default LoginController;
