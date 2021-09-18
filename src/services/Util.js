// @flow
import _ from "lodash";
import moment from "moment";
import DataHandler from "./DataHandler";

class Util {
  keyExtractor = (item, index) => index.toString();

  /**
   *
   * @param {string} phone
   * @return {string}
   */
  formatPhone = (phone) => {
    return phone;
    return `+${phone}`;
  };

  isEmpty(value) {
    return value == "";
  }

  isRequiredErrorMessage(fieldName) {
    return `${this.capitalizeFirstLetter(fieldName)} ${"is required"}`;
  }
  isNotValidErrorMessage(fieldName) {
    return `${this.capitalizeFirstLetter(fieldName)} ${"is not valid"}`;
  }

  isValidURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }

  isValidHttpsURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(https|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return re.test(url);
  }

  isTimeFormat(time) {
    // eslint-disable-next-line no-useless-escape

    const re =
      /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/[0-9]{4} [012]{0,1}[0-9]:[0-6][0-9]$/;
    let bol = re.test(time);
    return bol;
  }
  iosToFormat(date, format) {
    return moment(date).format(format);
  }

  isEmailValid(email) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  }
  isPasswordValid(password) {
    return password.length > 5;
  }
  isValidName(name) {
    return /^[a-zA-Z ]*$/.test(name);
  }

  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "";
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return "";
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return "";
  };

  getCurrentAccessToken() {
    let token = DataHandler.getStore().getState().user.data.access_token;
    return token;
  }
  getCurrentRefreshToken() {
    let token = DataHandler.getStore().getState().user.data.refresh_token;

    return token;
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }
  generateGuid() {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
}

export default new Util();
