class ResetLinkController {
  constructor(Password, $stateParams) {
    this.Password = Password;

    /**
     * userName or password
     * @type {String}
     */
    this.user = $stateParams.user;

    this.message = {
      type: '',
      text: '',
    };
  }

  sendResetLink() {
    this.Password.resetLink(
      { user: this.user }
    ).then(
      (message) => {
        this.message = message;
      }
    ).catch(
      (message) => {
        this.message = message;
      }
    );
  }
}

export default ResetLinkController;
