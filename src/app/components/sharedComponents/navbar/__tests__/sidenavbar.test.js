import {render, screen} from '@testing-library/react';

import SideNavbar from '../SideNavbar';
// sede navbar is not built currently;
describe('Side Navbar ', () => {
  it('should renders aside side navbar', () => {
    render(<SideNavbar />);
    expect(screen.getByText(/side nav bar/i)).toBeInTheDocument();
  })
})