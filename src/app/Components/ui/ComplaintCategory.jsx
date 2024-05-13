
"use client";

import { Label, Select } from "flowbite-react";

export function ComplaintCategory() {
  return (
    <div className="">
      <div className="mb-2 block">
        <Label htmlFor="category" value="Category" />
      </div>
      <Select id="category" required>
        <option>Faculty</option>
        <option>Management</option>
        <option>Cleanliness</option>
        <option>Other</option>
      </Select>
    </div>
  );
}
