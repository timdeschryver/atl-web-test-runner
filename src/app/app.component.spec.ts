import { expect } from '@esm-bundle/chai';
import { render, screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { AppComponent } from './app.component';

it('renders and interacts with counter', async () => {
  const user = userEvent.setup();
  await render(AppComponent);

  const div = screen.getByTestId('count');
  expect(div).to.not.equal(null);

  expect(div.textContent).equal('0');

  await user.click(screen.getByRole('button', { name: /increment/i }));
  await user.click(screen.getByRole('button', { name: /increment/i }));
  expect(div.textContent).to.equal('2');

  await user.click(screen.getByRole('button', { name: /decrement/i }));
  expect(div.textContent).to.equal('1');

  await user.click(screen.getByRole('button', { name: /reset/i }));
  expect(div.textContent).to.equal('0');
});
