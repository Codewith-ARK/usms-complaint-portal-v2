'use client'
import { Tabs } from "flowbite-react";
import { ComplaintTimeline } from "./ComplaintTimeline";

export function ComplaintTabs() {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="Your Complaints" color="blue">
        {/* Fetch data here or in the ComplaintTimeline component */}
        <ComplaintTimeline />
      </Tabs.Item>
      <Tabs.Item title="General">
      </Tabs.Item>
      <Tabs.Item title="Department-Wise Complaints">
      </Tabs.Item>
      <Tabs.Item title="Resolved" disabled>
      </Tabs.Item>
    </Tabs>
  );
}
