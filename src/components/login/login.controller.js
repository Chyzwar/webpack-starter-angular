class LoginController {
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;

    /**
     * User can be email or nick
     * @type {Object}
     */
    this.credentials = {
      user: '',
      password: '',
    };
  }

  login() {
    this.Auth.login(this.credentials).then(
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
      user: this.credentials.user,
    });
  }
}

export default LoginController;
