import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default {
  title: 'NavigationBar',
  decorators: [
    (getStory) => <MemoryRouter>{getStory()}</MemoryRouter>,
  ],
};

export const Timesheets = () => <NavigationBar pathname="/timesheets" />;

export const Expenses = () => <NavigationBar pathname="/expenses" />;

export const Management = () => <NavigationBar pathname="/management" />;
