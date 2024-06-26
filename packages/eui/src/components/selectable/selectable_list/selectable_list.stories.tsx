/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  enableFunctionToggleControls,
  moveStorybookControlsToCategory,
} from '../../../../.storybook/utils';
import { EuiFlexItem } from '../../flex';
import { EuiIcon } from '../../icon';
import { EuiSelectableOption } from '../selectable_option';

import { EuiSelectableList, EuiSelectableListProps } from './selectable_list';

const options: EuiSelectableOption[] = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  },
  {
    label: 'Enceladus is disabled',
    disabled: true,
  },
  {
    label: 'Mimas',
    checked: 'on',
  },
  {
    label: 'Dione',
  },
  {
    label: 'Iapetus',
    checked: 'on',
  },
  {
    label: 'Phoebe',
  },
  {
    label: 'Rhea',
  },
  {
    label:
      "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
  },
  {
    label: 'Tethys',
  },
  {
    label: 'Hyperion',
  },
];

const meta: Meta<EuiSelectableListProps<{}>> = {
  title: 'Forms/EuiSelectable/Subcomponents/EuiSelectableList',
  component: EuiSelectableList,
  argTypes: {
    height: { control: 'number' },
    isPreFiltered: { control: 'boolean' },
    singleSelection: { control: 'boolean' },
  },
  args: {
    textWrap: 'truncate',
    paddingSize: 's',
    onFocusBadge: true,
    showIcons: true,
    // set up for easier testing/QA
    listId: '',
    allowExclusions: false,
    bordered: false,
    isPreFiltered: false,
    isVirtualized: false,
    searchable: false,
    singleSelection: true,
  },
};
enableFunctionToggleControls(meta, ['onOptionClick', 'setActiveOptionIndex']);
moveStorybookControlsToCategory(
  meta,
  [
    'allowExclusions',
    'onFocusBadge',
    'paddingSize',
    'searchable',
    'showIcons',
    'textWrap',
  ],
  'EuiSelectableListItem props'
);

export default meta;
type Story = StoryObj<EuiSelectableListProps<{}>>;

export const Playground: Story = {
  args: {
    options,
    activeOptionIndex: 0,
    makeOptionId: (index) => `selectable_list_item-${index}`,
    // ensuring that onOptionClick triggers an action as it's
    // only called through setActiveOptionIndex callback
    setActiveOptionIndex: (index, callback) => {
      callback?.();
      action('setActiveOptionIndex')(index);
    },
  },
};

export const Groups: Story = {
  parameters: {
    controls: {
      include: ['options'],
    },
  },
  args: {
    options: [
      { label: 'Group 1', isGroupLabel: true },
      ...[...options].splice(0, 4),
      {
        label: 'Group 2',
        isGroupLabel: true,
        prepend: (
          <EuiIcon
            type="warning"
            css={({ euiTheme }) => ({ marginRight: euiTheme.size.s })}
          />
        ),
        append: (
          <EuiFlexItem css={{ alignItems: 'flex-end' }}>(append)</EuiFlexItem>
        ),
      },
      ...[...options].splice(4, options.length),
    ],
    activeOptionIndex: 0,
    makeOptionId: (index) => `selectable_list_item-${index}`,
    // ensuring that onOptionClick triggers an action as it's
    // only called through setActiveOptionIndex callback
    setActiveOptionIndex: (index, callback) => {
      callback?.();
      action('setActiveOptionIndex')(index);
    },
  },
};
