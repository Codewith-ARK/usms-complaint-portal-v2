'use client';

import React from 'react';
import { SidebarMenu } from './Components/SidebarMenu';
import { useUser } from './Context/userContext';

export default function ClientLayout({ children }) {
  const { isLoggedIn } = useUser();

  return (
    <div className="flex last:flex-grow">
      {isLoggedIn && <SidebarMenu />}
      {children}
    </div>
  );
}
