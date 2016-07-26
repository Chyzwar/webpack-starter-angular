class LoginController {
  constructor(Auth) {
    this.name = 'Reset Password Component';

    this.Auth = Auth;
    this.user = {
      userName: '',
    };
    this.message = {
      type: '',
      text: '',
    };
  }

  reset() {
    this.Auth.reset(this.user)
      .then((response) => {
        this.message = response;
      }
    );
  }
}

export default LoginController;
