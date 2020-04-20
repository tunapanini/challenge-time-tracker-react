import React from 'react';
import { Button } from '@storybook/react/demo';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default { title: 'Button' };

export const withText = () => <Button onClick={action('button-click')}>{text('Text', 'Hello Button')}</Button>;

export const withEmoji = () => (
    <Button onClick={action('button-click')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);
