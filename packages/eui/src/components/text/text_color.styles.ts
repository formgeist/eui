/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../services';

export const euiTextColorStyles = ({ euiTheme }: UseEuiTheme) => ({
  euiTextColor: css``,
  default: css`
    color: ${euiTheme.colors.textParagraph};
  `,
  subdued: css`
    color: ${euiTheme.colors.textSubdued};
  `,
  success: css`
    color: ${euiTheme.colors.textSuccess};
  `,
  accent: css`
    color: ${euiTheme.colors.textAccent};
  `,
  accentSecondary: css`
    color: ${euiTheme.colors.textAccentSecondary};
  `,
  danger: css`
    color: ${euiTheme.colors.textDanger};
  `,
  warning: css`
    color: ${euiTheme.colors.textWarning};
  `,
  ghost: css`
    color: ${euiTheme.colors
      .ghost} !important; /* stylelint-disable-line declaration-no-important */
  `,
  inherit: css`
    color: inherit;
  `,
  customColor: css``, // Handled by `style` tag - this is just here for a className hook
});
