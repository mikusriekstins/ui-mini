import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Loading } from '../Loading';

describe('Loading', () => {
  it('renders with default medium size', () => {
    const { container } = render(<Loading />);
    const loading = container.firstChild as HTMLElement;

    expect(loading).toHaveClass('loading', 'loading--medium');
  });

  it('applies size variants correctly', () => {
    const { container: small } = render(<Loading size="small" />);
    const { container: large } = render(<Loading size="large" />);

    expect(small.firstChild).toHaveClass('loading--small');
    expect(large.firstChild).toHaveClass('loading--large');
  });

  it('forwards custom className and props', () => {
    const { container } = render(
      <Loading className="custom-class" data-testid="loader" />
    );
    const loading = container.firstChild as HTMLElement;

    expect(loading).toHaveClass('custom-class');
    expect(loading).toHaveAttribute('data-testid', 'loader');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Loading ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
