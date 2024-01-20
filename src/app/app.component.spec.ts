import { render, screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { AppComponent } from './app.component';

it('renders and interacts with counter', async () => {
  const user = userEvent.setup();
  await render(AppComponent);

  const div = screen.getByTestId('count');
  expect(div).not.toBeNull();

  expect(div.textContent).toBe('0');

  await user.click(screen.getByRole('button', { name: /increment/i }));
  await user.click(screen.getByRole('button', { name: /increment/i }));
  expect(div.textContent).toBe('2');

  await user.click(screen.getByRole('button', { name: /decrement/i }));
  expect(div.textContent).toBe('1');

  await user.click(screen.getByRole('button', { name: /reset/i }));
  expect(div.textContent).toBe('0');
});
