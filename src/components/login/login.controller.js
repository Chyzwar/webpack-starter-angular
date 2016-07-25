class LoginController {
  constructor($state) {
    this.$state = $state;
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
    this.$state.go('reset', {
      email: this.user.userName
    });
  }
}

export default LoginController;
