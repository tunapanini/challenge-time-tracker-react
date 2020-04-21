import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders Timesheets link', () => {
    const { getAllByText } = render(
      <MemoryRouter><App /></MemoryRouter>,
    );
    const linkElement = getAllByText('Timesheets')[0];
    expect(linkElement).toBeVisible();
  });

  it('renders Expenses link', () => {
    const { getAllByText } = render(
      <MemoryRouter><App /></MemoryRouter>,
    );
    const linkElement = getAllByText('Expenses')[0];
    expect(linkElement).toBeVisible();
  });

  it('renders Management link', () => {
    const { getAllByText } = render(
      <MemoryRouter><App /></MemoryRouter>,
    );
    const linkElement = getAllByText('Management')[0];
    expect(linkElement).toBeVisible();
  });
});
