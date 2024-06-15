
"use client";

import { Button, Sidebar } from "flowbite-react";
import { UserAvatar } from "./ui/Avatar";
import { LayoutDashboard,MessageCircleWarning, Inbox, UserRoundCog, Home } from "lucide-react";
import Link from "next/link";

export function SidebarMenu() {
  return (
    <Sidebar className="h-screen w-fit max-w-80 block">
      <Sidebar.Logo href="/" img="https://placehold.co/64" imgAlt="Brand Logo">
        USMS Complaint Portal
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <UserAvatar />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {/* Item 1 */}
          <Link href='/'>
          <Sidebar.Item icon={Home} className='hover:bg-blue-200'>
            Home
          </Sidebar.Item>
          </Link>
          {/* Item 2 */}
          <Link href="/Dashboard">
          <Sidebar.Item  icon={LayoutDashboard} className='hover:bg-blue-200'>
            Dashboard
          </Sidebar.Item>
          </Link>
          {/* Item 3 */}
          <Link href="/Complaints">
          <Sidebar.Item  icon={MessageCircleWarning} className='hover:bg-blue-200'>
            Complaints
          </Sidebar.Item>
          </Link>
          {/* Item 4 */}
          <Link href="/Inbox">
          <Sidebar.Item  icon={Inbox} className='hover:bg-blue-200'>
            Inbox
          </Sidebar.Item>
          </Link>
          {/* Item 5 */}
          <Link href="/User/edit">
          <Sidebar.Item icon={UserRoundCog} className='hover:bg-blue-200'>
            Customize Profile
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
