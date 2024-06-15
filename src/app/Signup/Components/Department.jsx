"use client";

import { Label, Select, TextInput } from "flowbite-react";

export function Department({ selectedDepartment, setSelectedDepartment }) {
  return (
    <>
      <Label htmlFor="department">Department</Label>
      <Select
        id="department"
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
      >
        <option value="">Select a department</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Business Administration">Business Administration</option>
        <option value="Education">Education</option>
        <option value="English">English</option>
        <option value="Other">Other</option>
      </Select>
      {/* <TextInput type="text" id="other" disabled={selectedDepartment !== 'Other'} /> */}
      {selectedDepartment === "Other" && (
        <div className="flex items-center gap-2 mt-2">
          <Label value="Other:" />
          <TextInput type="text" />
        </div>
      )}
    </>
  );
}
