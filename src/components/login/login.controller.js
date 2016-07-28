class LoginController {
  constructor($state, Auth) {
    this.$state = $state;
    this.Auth = Auth;
    this.user = {
      userName: '',
      password: '',
    };
  }

  login() {
    this.Auth.login(this.user).then(
      () => {
        this.$state.go('home');
      }
    ).catch(
      (message) => {
        this.message = message;
      }
    );
  }

  reset() {
    this.$state.go('reset', {
      userName: this.user.userName,
    });
  }
}

export default LoginController;
