import { Tabs } from "flowbite-react";
import { ComplaintTimeline } from "./ComplaintTimeline";
import { fetchAllComplaints } from "@/app/db/utils";

async function GET(){
  const res= await fetchAllComplaints();
  return res;
}

export async function ComplaintTabs() {
  const complaints = await GET();
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="Your Complaints" color="blue">
        {/* <ComplaintTimeline /> */}
        {
          complaints.map(item=>{
            return (
            <ComplaintTimeline 
              id={item.id}
              title={item.title}
              body={item.desc}
              complaintId={item.id}
              date={item.created}
              category={item.category}
              isResolved={item.isResolved}
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
