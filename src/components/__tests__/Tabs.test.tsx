import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi, expect, describe, it } from 'vitest';

import { Tabs, TabItem } from '../Tabs';

describe('Tabs', () => {
  it('renders tabs with default props', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2">
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /tab 2/i })).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('shows correct content for active tab', () => {
    render(
      <Tabs defaultValue="tab2">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2">
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2">
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: /tab 2/i }));

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('works in controlled mode', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2">
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    await user.click(screen.getByRole('tab', { name: /tab 2/i }));

    expect(handleValueChange).toHaveBeenCalledWith('tab2');
  });

  it('disables tabs when disabled prop is true', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2" disabled>
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    const disabledTab = screen.getByRole('tab', { name: /tab 2/i });
    expect(disabledTab).toHaveAttribute('disabled');
  });

  it('applies custom className', () => {
    render(
      <Tabs defaultValue="tab1" className="custom-tabs">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByRole('tablist')).toHaveClass('tabs__list');
    expect(screen.getByRole('tablist').closest('.tabs')).toHaveClass(
      'custom-tabs'
    );
  });

  it('passes through other props to root element', () => {
    render(
      <Tabs defaultValue="tab1" data-testid="custom-tabs">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(
      screen.getByRole('tablist').closest('[data-testid="custom-tabs"]')
    ).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };

    render(
      <Tabs ref={ref} defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders tabs with complex label content', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem
          value="tab1"
          label={
            <span>
              Complex <strong>Label</strong>
            </span>
          }
        >
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Simple Label">
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: /simple label/i })
    ).toBeInTheDocument();
  });

  it('has accessible list with role="tablist"', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('has role="tabpanel" on content areas', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('respects disabled hover state', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div>Content 1</div>
        </TabItem>
        <TabItem value="tab2" label="Tab 2" disabled>
          <div>Content 2</div>
        </TabItem>
      </Tabs>
    );

    const disabledTab = screen.getByRole('tab', { name: /tab 2/i });

    expect(disabledTab).toHaveAttribute('data-disabled');
  });

  it('accepts additional props on TabItem', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabItem value="tab1" label="Tab 1">
          <div data-testid="custom-content">Content 1</div>
        </TabItem>
      </Tabs>
    );

    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });
});
