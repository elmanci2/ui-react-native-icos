/**
 * @license @hugeicons/react-native-pro v0.1.7
 *
 * See the LICENSE file in the root directory of this source tree.
 */

import { jsx as l } from 'react/jsx-runtime';
import { forwardRef as v } from 'react';
import {
  Svg as w,
  Path as $,
  Circle as g,
  Rect as x,
  G as y,
} from 'react-native-svg';
// Eliminar la importación de la validación de licencia
// import C from './license/withLicenseValidation.js';

const G = { path: $, circle: g, rect: x, g: y },
  P = (c, s) => {
    const t = v(
      (
        {
          color: e = 'currentColor',
          size: o = 24,
          variant: f = 'stroke',
          type: a = 'rounded',
          ...m
        },
        p
      ) => {
        const d = `${f}.${a}`,
          u =
            s[d]?.map(([n, h], k) => {
              const i = G[n];
              if (!i)
                return console.warn(`Unsupported SVG element: ${n}`), null;
              const r = { ...h };
              return (
                r.fill && (r.fill = e),
                r.stroke && (r.stroke = e),
                l(i, { ...r }, k)
              );
            }) ?? [];
        return l(w, {
          ref: p,
          width: o,
          height: o,
          viewBox: '0 0 24 24',
          fill: 'none',
          strokeWidth: 1.5,
          ...m,
          children: u,
        });
      }
    );
    return (t.displayName = `${c}Icon`), t; // Retornar directamente el componente `t`
  };
export { P as default };
