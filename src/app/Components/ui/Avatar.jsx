"use client";

import { Avatar } from "flowbite-react";

export function UserAvatar({username}) {
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
