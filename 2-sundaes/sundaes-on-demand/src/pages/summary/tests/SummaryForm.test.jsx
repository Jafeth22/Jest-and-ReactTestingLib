import { render, screen, cleanup, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

test('Initial Conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmBtn = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmBtn).toBeDisabled();
});

test('Checkbox enables button on first click and disable on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    const confirmBtn = screen.getByRole('button', {
        name: /confirm order/i,
    });

    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(confirmBtn).toBeEnabled();

    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(confirmBtn).toBeDisabled();
});

test('popover respond to hover', async () => {
    render(<SummaryForm />);
    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
    );
    // const nullPopoverAgain = 
    // expect(nullPopoverAgain).not.toBeInTheDocument();
});