import { joinUrl } from '../../utilities/http';

class Password {
  constructor(API_URL, $http, $q) {
    this.$http = $http;
    this.$q = $q;

    this.endpoint = '/password';
    this.url = joinUrl(API_URL, this.endpoint);
  }

  /**
   * Make request to reset a password
   * @param  {String} userName
   * @return {Promise}
   */
  resetLink(userName) {
    const deferred = this.$q.defer();

    this.$http.get(this.url, userName).then(
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

  changePassword() {

  }
  validateLink() {

  }
}

export default Password;
