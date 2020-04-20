import React from 'react';
import { Button } from '@storybook/react/demo';
import { text } from '@storybook/addon-knobs';

export default { title: 'Button' };

export const withText = () => <Button>{text('Text', 'Hello Button')}</Button>;

export const withEmoji = () => (
    <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);
