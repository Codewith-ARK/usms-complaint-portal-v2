
"use client";

import { Dropdown } from "flowbite-react";
import { useState } from "react";

export function ComplaintCategory() {
  const [category, setCategory] = useState();
  return (
    <Dropdown label="Complaint Category" dismissOnClick={true} color={'light'} size={'sm'}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
