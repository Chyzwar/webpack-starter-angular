
class Auth {
  constructor(API_URL, $q, $http) {
    this.$q = $q;
    this.$http = $http;

    /**
     * Create URL endpoint + base
     * @type {URL}
     */
    this.url = new URL('/auth', API_URL);
  }

  /**
   * Setter for token
   * @param  {String}
   */
  set token(token) {
    this.token = token;
  }

  /**
   * Setter for User
   * @param {User} user
   */
  set user(user) {
    this.user = user;
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
    // return this.user;
    return {
      firstName: 'Marcin',
      lastName: 'Kopacz',
      pictureUrl: 'http://pl.memgenerator.pl/mem-image/jestem-mistrzem-szaolin-pl-000000',
      permisions: {
        role: 'Master of The Universe',
      },
    };
  }

  /**
   * Check if user is logged
   * @return {Boolean}
   */
  isLogged() {
    return (this.token && this.user);
  }

  /**
   * Perform User Logins using provided credentials
   * @param  {Object} credentials
   * @return {Promise}
   */
  login(credentials) {
    const deferred = this.$q.defer();

    this.$http.post(this.url.href, credentials).then(
      (response) => {
        this.user = response.user;
        this.token = response.token;

        deferred.resolve({
          type: 'success',
          text: 'Login is succesfull',
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

  /**
   * Logount current User,
   * Clear user, token
   * @return {Promise}
   */
  logout() {
    const deferred = this.$q.defer();

    this.$http.delete(this.url.href, this.user).then(
      () => {
        this.token = this.user = undefined;

        deferred.resolve({
          type: 'success',
          text: 'Logout succesfull',
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

export default Auth;
