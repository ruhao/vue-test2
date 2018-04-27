export default {
    install (Vue, options) {
      Vue.prototype.getTest = function () {
        var api = 'https://www.laowaicang.com'
        return api
      }
    }
  }
  