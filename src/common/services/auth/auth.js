import { joinUrl } from '../../utilities/http';

class Auth {
  constructor(API_URL, $http, $q) {
    this.$http = $http;
    this.$q = $q;

    this.token = undefined;
    this.user = undefined;

    this.endpoint = '/auth';
    this.url = joinUrl(API_URL, this.endpoint);
  }


  /**
   * Get current X Token
   * @return {String}
   */
  get token() {
    return this.token;
  }

  /**
   * Getter for User
   * @return {User}
   */
  get user() {
    return this.user;
  }

  /**
   * Check if user is logged
   * @return {Boolean}
   */
  isLogged() {
    return (this.token && this.user);
  }

  /**
   * Make request to reset a password
   * @param  {String} userName
   * @return {Promise}
   */
  reset(userName) {
    const deferred = this.$q.defer();

    this.$http.update(this.url, userName).then(
      () => {
        deferred.response({
          type: 'success',
          text: 'Password resent link has been send, check your email',
        });
      },
      (error) => {
        deferred.response({
          type: 'error',
          text: error.text,
        });
      });

    return deferred.promise;
  }

  /**
   * Perform User Logins using provided credentials
   * @param  {Object} userCredentials
   * @return {Promise}
   */
  login(userCredentials) {
    const deferred = this.$q.defer();

    this.$http.post(this.url, userCredentials).then(
      (response) => {
        this.user = response.user;
        this.token = response.token;

        deferred.resolve({
          type: 'success',
          text: 'Login is succesfull',
        });
      },
      (error) => {
        deferred.resolve({
          type: 'error',
          text: error.text,
        });
      }
    );

    return deferred.promise;
  }

  /**
   * Logount current User,
   * Clear user, token
   * @return {Promise}
   */
  logout() {
    const deferred = this.$q.defer();

    this.$http.delete(this.url, this.user).then(
      () => {
        this.token = this.user = undefined;

        deferred.resolve({
          type: 'success',
          text: 'Logout succesfull',
        });
      },
      (error) => {
        deferred.resolve({
          type: 'error',
          text: error.text,
        });
      });

    return deferred.promise;
  }
}

export default Auth;
