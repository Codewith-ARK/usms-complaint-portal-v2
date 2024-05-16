'use client'
import { Tabs } from "flowbite-react";
import { ComplaintTimeline } from "./ComplaintTimeline";
import { useState, useEffect } from "react";

export function ComplaintTabs() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/complaints');
        if (response.ok) {
          const fetchedComplaints = await response.json();
          setComplaints(fetchedComplaints);
        } else {
          console.error('Failed to fetch complaints:', response.status);
        }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="Your Complaints" color="blue">
        {
          complaints.map((item, key) => {
            return (
              <ComplaintTimeline
                id={item.id}
                title={item.title}
                body={item.description}
                category={item.category}
                date={item.date_of_creation}
                complaintId={item.id}
                upvotes={item.upvotes}
              />
            )
          })
        }
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
