
"use client";

import { Sidebar } from "flowbite-react";
import { UserAvatar } from "./ui/Avatar";
import { LayoutDashboard,MessageCircleWarning, Inbox, UserRoundCog } from "lucide-react";

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
          <Sidebar.Item href="/Dashboard" icon={LayoutDashboard} className='hover:bg-blue-200'>
            Dashboard
          </Sidebar.Item>
          {/* Item 2 */}
          <Sidebar.Item href="/Complaints" icon={MessageCircleWarning} className='hover:bg-blue-200'>
            Complaints
          </Sidebar.Item>
          {/* Item 3 */}
          <Sidebar.Item href="/Inbox" icon={Inbox} className='hover:bg-blue-200'>
            Inbox
          </Sidebar.Item>
          {/* Item 4 */}
          <Sidebar.Item href="/User/edit" icon={UserRoundCog} className='hover:bg-blue-200'>
            Customize Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
