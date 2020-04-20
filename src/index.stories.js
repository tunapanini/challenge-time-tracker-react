import React from 'react';
import { Button } from '@storybook/react/demo';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default { title: 'Button' };

export const withEmoji = () => (
    <Button onClick={action('button-click')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);

export const withTextKnob = () => <Button>{text('Text', 'Hello Button')}</Button>;

export const withAction = () => <Button onClick={action('button-click')}>Click Me</Button>;

export const withConsole = () => (
    <div>
        <Button onClick={() => console.log('log')}>console.log</Button>
        <Button onClick={() => console.warn('warn')}>console.warn</Button>
        <Button onClick={() => console.error('error')}>console.error</Button>
    </div>
);
