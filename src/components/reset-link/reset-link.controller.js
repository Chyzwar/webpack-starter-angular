class ResetLinkController {
  constructor(PASSWORD_POLICY, Password, $state, $stateParams) {
    this.policy = PASSWORD_POLICY;

    this.Password = Password;
    this.$state = $state;

    this.credentials = {
      user: $stateParams.code,
      code: $stateParams.user,
      password: '',
      confirmation: '',
    };

    this.message = {
      type: '',
      text: '',
    };
  }

  changePassword() {
    this.Password.changePassword(this.credentials).then(
      (message) => {
        this.message = message;
        this.$state.go('login', {
          user: this.credentials.user,
        });
      }).catch(
      (message) => {
        this.message = message;
      });
  }
}

export default ResetLinkController;
