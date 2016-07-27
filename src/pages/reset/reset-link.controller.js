class ResetLinkController {
  constructor(Password, $stateParams) {
    this.Password = Password;

    this.code = $stateParams.code;
    this.user = $stateParams.user;
    console.log($stateParams);
    this.message = {
      type: '',
      text: '',
    };

    this.Password.validateLink(
      { user: this.user, code: this.code }
    ).then(
      (message) => {
        this.message = message;
        this.showPasswordForm = true;
      }
    ).catch(
      (message) => {
        this.message = message;
      }
    );
  }

  changePassword() {

  }
}

export default ResetLinkController;
