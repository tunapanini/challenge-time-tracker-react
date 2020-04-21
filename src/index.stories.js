import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

export default {
  title: 'App',
  decorators: [
    (getStory) => <MemoryRouter>{getStory()}</MemoryRouter>,
  ],
};

export const Default = () => <App />;
