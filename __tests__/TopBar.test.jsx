import React from 'react';
import TopBar from '../src/ui/components/topBar/TopBar';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

describe('TopBar component', () => {
  it('renders all elements correctly', () => {
    render(<TopBar />);
    
    // Logo should be rendered
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    
    // Search input should be rendered
    expect(screen.getByPlaceholderText('Search IP Solutions Portal')).toBeInTheDocument();
    
    // Notification icon should be rendered
    expect(screen.getByLabelText('show 4 new mails')).toBeInTheDocument();
    
    // Settings icon should be rendered
    expect(screen.getByLabelText('show 17 new notifications')).toBeInTheDocument();
    
    // User profile icon should be rendered
    expect(screen.getByLabelText('account of current user')).toBeInTheDocument();
  });

  it('clicking on profile icon should open profile menu', () => {
    render(<TopBar />);
    
    // Profile menu should not be visible initially
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    
    // Click on profile icon
    fireEvent.click(screen.getByLabelText('account of current user'));
    
    // Profile menu should be visible after clicking
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  // You can write similar tests for other functionalities like search, notifications, etc.
});
