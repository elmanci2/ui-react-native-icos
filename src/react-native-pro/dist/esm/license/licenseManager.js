/**
 * @license @hugeicons/react-native-pro v0.1.7
 *
 * See the LICENSE file in the root directory of this source tree.
 */

import { decode as I } from 'js-base64';
import { md5 as u } from 'js-md5';
const f = 'Hugeicons LOG',
  a = '='.repeat(60),
  n = (s) => {
    console.log(`
${a}
${f}:
${s}
${a}
`);
  };
let o = null;
const m = (s) => {
  o = s;
};

// Modificación aquí
const v = () => {
  return 1;
};

export { n as logger, m as setLicenseKey, v as validateLicense };
