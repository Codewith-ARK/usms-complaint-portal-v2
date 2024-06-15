"use client";

import { Label, Select, TextInput } from "flowbite-react";

export function BatchCode({ selectedBatch, setSelectedBatch }) {
  return (
    <>
      <Label htmlFor="batch">Batch Code</Label>
      <Select
        id="batch"
        value={selectedBatch}
        onChange={(e) => setSelectedBatch(e.target.value)}
      >
        <option value="">Select a batch</option>
        <option value="2k20">2k20</option>
        <option value="2k21">2k21</option>
        <option value="2k22">2k22</option>
        <option value="2k23">2k23</option>
        <option value="Other">Other</option>
      </Select>
      {selectedBatch === "Other" && (
        <div className="flex items-center gap-2 mt-2">
          <Label value="Other:" />
          <TextInput type="text" />
        </div>
      )}
    </>
  );
}
