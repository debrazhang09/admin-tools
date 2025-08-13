import {render, screen, fireEvent} from '@testing-library/react';
import SharedTable from '../SharedTable';

const columns = ['Name', 'Age', 'Email'];
const data = [
  {Name:"Alice", Age: 25, Email: 'alice@example.com'},
  {Name:"Bob", Age: 30, Email: 'bob@example.com'},
  {Name:"Charlie", Age: 35, Email: 'charlie@example.com'},
  {Name:"David", Age: 40, Email: 'david@example.com'},
  {Name:"Eve", Age: 45, Email: 'eve@example.com'},
  {Name:"Frank", Age: 50, Email: 'frank@example.com'},
  {Name:"Geodge", Age: 55, Email: 'geodge@example.com'},
];

describe('Shared Table component', () => {
  it('renders caption and count corrently', () => {
    render(<SharedTable caption="user list" count={data.length} columns={columns} data={data}/>)
    expect(screen.getByText(/user list/i)).toBeInTheDocument();
    expect(screen.getByText(data.length.toString())).toBeInTheDocument();
  });
  it('renders initial page data (page 1)', () => {
    render(<SharedTable caption="user list" count={data.length} columns={columns} data={data} pageSize={2} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument();

  });
  it('toggles expand/collapse when button clicked', () => {
    render(<SharedTable columns={columns} data={data}/>);
    const toggleButton = screen.getByRole('button', {name: /expand/i});
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByText(/expand/i)).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByText(/collapse/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name: /collapse/i}));
    expect(screen.getByText(/expand/i)).toBeInTheDocument();


  })
  it('change page when page button clicked', () => {
    render(<SharedTable columns={columns} data={data} pageSize={2}/>);

    const toggleButton = screen.getByRole('button', {name: /expand/i});
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    const pageButton = screen.getByRole('button', {name: /2/});
    fireEvent.click(pageButton);
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  })
  it('scroll buttons work correctly', () => {
    const bigData = Array.from({length: 50}, (_, i) => (
      {
        Name: `Name ${i}`,
        Age: i + 20,
        Email: `email${i}@gmail.com`
      }
    ))
    render(<SharedTable data={bigData} columns={columns} scrollSize={3} pageSize={5}/>);
    const expandButton = screen.getByRole('button', {name: /expand/i});
    fireEvent.click(expandButton);
    expect(screen.queryByText('<')).not.toBeInTheDocument();
    const rightBtn = screen.getByRole('button', {name: '>'});
    expect(rightBtn).toBeInTheDocument();
    fireEvent.click(rightBtn);
    expect(screen.getByText('<')).toBeInTheDocument();
    fireEvent.click(screen.getByText('<'));
    expect(screen.queryByText('<')).not.toBeInTheDocument();

  })
})
