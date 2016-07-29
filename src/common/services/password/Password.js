
class Password {
  constructor(API_URL, $q, $http) {
    this.$q = $q;
    this.$http = $http;

    /**
     * Create URLs endpoint + base
     * @type {URL}
     */
    this.urlReset = new URL('/password-reset', API_URL);
    this.urlChange = new URL('/password-change', API_URL);
  }

  /**
   * Make request to send reset password mail
   * @param  {String} user string | email
   * @return {Promise}
   */
  resetLink(user) {
    const deferred = this.$q.defer();

    this.$http.post(this.urlReset.href, user).then(
      () => {
        deferred.resolve({
          type: 'success',
          text: 'Password resent link has been send, check your email',
        });
      },
      (error) => {
        deferred.reject({
          type: 'error',
          text: error.text,
        });
      });

    return deferred.promise;
  }

  changePassword(credentials) {
    const deferred = this.$q.defer();

    this.$http.update(this.urlChange.href, credentials).then(
      () => {
        deferred.resolve({
          type: 'success',
          text: 'Password update was successful',
        });
      },
      (error) => {
        deferred.reject({
          type: 'error',
          text: error.text,
        });
      });

    return deferred.promise;
  }
}

export default Password;
