'use client';

import React from 'react';
import { SidebarMenu } from './Components/SidebarMenu';
import { useLogin } from './Context/loginContext';

export default function ClientLayout({ children }) {
  const { isLoggedIn } = useLogin();

  return (
    <div className="flex last:flex-grow">
      {isLoggedIn && <SidebarMenu />}
      {children}
    </div>
  );
}
