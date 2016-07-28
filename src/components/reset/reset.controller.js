class ResetLinkController {
  constructor(Password) {
    this.Password = Password;

    /**
     * userName or password
     * @type {String}
     */
    this.user = '';

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
