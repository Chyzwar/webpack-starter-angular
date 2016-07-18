class LoginController {
  constructor() {
    this.name = 'Login Component';
    this.user = {
      userName: '',
      password: '',
    };
  }

  login(){
    console.log(this.user);
  }
}

export default LoginController;
