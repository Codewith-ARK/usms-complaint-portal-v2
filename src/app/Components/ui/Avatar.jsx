"use client";

import { useUser } from "@/app/Context/userContext";
import { Avatar } from "flowbite-react";

export function UserAvatar() {
  const { user } = useUser()
  const { first_name, last_name } = user;
  const username = `${first_name} ${last_name}`;
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar rounded>
        <div className="space-y-1 font-medium dark:text-white">
          <div>{username ? username : "John Doe"}</div>
        </div>
      </Avatar>
    </div>
  );
}
