// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './Candidates';

// Initialize the Service Worker with the defined handlers
export const worker = setupWorker(...handlers);