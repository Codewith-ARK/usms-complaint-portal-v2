
"use client";

import { Sidebar } from "flowbite-react";
import { UserAvatar } from "./ui/Avatar";
import { LayoutDashboard,MessageCircleWarning, Inbox, UserRoundCog } from "lucide-react";

export function SidebarMenu() {
  return (
    <Sidebar className="h-screen w-fit max-w-80 ">
      <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Brand Logo">
        USMS Complaint Portal
      </Sidebar.Logo>
      <Sidebar.Items >
        <Sidebar.ItemGroup>
          <UserAvatar />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {/* Item 1 */}
          <Sidebar.Item href="/Dashboard" icon={LayoutDashboard}>
            Dashboard
          </Sidebar.Item>
          {/* Item 2 */}
          <Sidebar.Item href="/Complaints" icon={MessageCircleWarning}>
            Complaints
          </Sidebar.Item>
          {/* Item 3 */}
          <Sidebar.Item href="/Inbox" icon={Inbox}>
            Inbox
          </Sidebar.Item>
          {/* Item 4 */}
          <Sidebar.Item href="/User/edit" icon={UserRoundCog}>
            Customize Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
