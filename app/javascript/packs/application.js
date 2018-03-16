import React from 'react';
import { render } from 'react-dom';
import DashboardComponent from '../components/DashboardComponent';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<DashboardComponent/>, container);
});
