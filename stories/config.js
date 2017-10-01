import React from 'react';
import { configure, storiesOf } from '@storybook/react';
import Demo from './Demo';

function loadStories() {
  storiesOf('Examples', module)
    .add('demo', () => <Demo />)
}

configure(loadStories, module);