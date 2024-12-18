import { expect, test } from '@jest/globals';
import { formatDate, getDaysUntilNextBirthday } from '../date';

test('format date to display the date with different local date formats', () => {
  expect(formatDate(new Date('2024-02-07'))).toBe('07/02/2024');
  expect(formatDate(new Date('2024-02-07'), 'en-US')).toBe('02/07/2024');

  // Date for 29/02 without a leap year
  expect(formatDate(new Date('2023-02-29'))).toBe('01/03/2023');
  // Date for 29/02 with a leap year
  expect(formatDate(new Date('2024-02-29'))).toBe('29/02/2024');
});

test('format date for displaying the date with different options', () => {
  expect(
    formatDate(new Date('2024-02-07'), 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  ).toBe('February 7, 2024');

  expect(
    formatDate(new Date('2024-02-07'), 'de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  ).toBe('7. Februar 2024');
});

test('throws an error when dates are not valid', () => {
  expect(() => formatDate(false)).toThrow('Pass only dates!');
});

test('calculate days until next birthday', () => {
  expect(
    getDaysUntilNextBirthday(new Date('2024-02-08'), new Date('2024-02-07')),
  ).toBe(365);
});

test('throws an error when arguments are not dates', () => {
  expect(() => getDaysUntilNextBirthday('123', new Date('2024-02-07'))).toThrow(
    'Pass only dates!',
  );
});
