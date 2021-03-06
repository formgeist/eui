import React from 'react';
import { renderToHtml } from '../../services';

import {
  GuidePage,
  GuideSection,
  GuideSectionTypes,
} from '../../components';

import {
  EuiCode,
} from '../../../../src/components';

import Tabs from './tabs';
const tabsSource = require('!!raw-loader!./tabs');
const tabsHtml = renderToHtml(Tabs);

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="Tabs"
      source={[{
        type: GuideSectionTypes.JS,
        code: tabsSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: tabsHtml,
      }]}
      text={
        <p>
          The <EuiCode>EuiTabs</EuiCode> component should have <EuiCode>EuiTab</EuiCode>
          components as children.
        </p>
      }
      demo={
        <Tabs />
      }
    />
  </GuidePage>
);
