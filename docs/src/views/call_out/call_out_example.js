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

import Info from './info';
const infoSource = require('!!raw-loader!./info');
const infoHtml = renderToHtml(Info);

import Success from './success';
const successSource = require('!!raw-loader!./success');
const successHtml = renderToHtml(Success);

import Warning from './warning';
const warningSource = require('!!raw-loader!./warning');
const warningHtml = renderToHtml(Warning);

import Danger from './danger';
const dangerSource = require('!!raw-loader!./danger');
const dangerHtml = renderToHtml(Danger);

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="Info"
      source={[{
        type: GuideSectionTypes.JS,
        code: infoSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: infoHtml,
      }]}
      text={
        <p>
          Use <EuiCode>EuiCallOut</EuiCode> to communicate general information to the user.
          Note that the <EuiCode>Icon</EuiCode> prop is optional.
        </p>
      }
      demo={
        <Info />
      }
    />

    <GuideSection
      title="Success"
      source={[{
        type: GuideSectionTypes.JS,
        code: successSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: successHtml,
      }]}
      text={
        <p>
          Use this CallOut to notify the user of a succesfully completed action.
        </p>
      }
      demo={
        <Success />
      }
    />

    <GuideSection
      title="Warning"
      source={[{
        type: GuideSectionTypes.JS,
        code: warningSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: warningHtml,
      }]}
      text={
        <p>
          Use this CallOut to warn the user against decisions they might regret.
        </p>
      }
      demo={
        <Warning />
      }
    />

    <GuideSection
      title="Danger"
      source={[{
        type: GuideSectionTypes.JS,
        code: dangerSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: dangerHtml,
      }]}
      text={
        <p>
          Use this CallOut to let the user know something went wrong.
        </p>
      }
      demo={
        <Danger />
      }
    />
  </GuidePage>
);
