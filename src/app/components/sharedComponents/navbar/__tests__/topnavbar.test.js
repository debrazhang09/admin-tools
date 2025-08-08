import {render, screen} from '@testing-library/react';

import TopNavbar from '../TopNavbar';

describe('Top Navbar ', () => {
  it('should renders header', () => {
    render(<TopNavbar />);
    expect(screen.getByText(/top navbar/i)).toBeInTheDocument();
  })
})