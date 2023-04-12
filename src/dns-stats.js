const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((obj, item) => {
    const dns = item.split(".").reverse();
    const dnsLength = dns.length;
    for (let i = 0; i < dnsLength; i += 1) {
      const key = `.${dns.join(".")}`;
      obj[key] = (obj[key] || 0) + 1;
      dns.pop();
    }
    return obj;
  }, {})
}

module.exports = {
  getDNSStats
};
