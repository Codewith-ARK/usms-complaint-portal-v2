"use client";

import { Badge, FooterDivider, Timeline } from "flowbite-react";
import {Calendar, FlagIcon, ThumbsUp } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";

export function ComplaintTimeline() {
  return (
    <Timeline>

      <Timeline.Item>
        <Timeline.Point icon={Calendar} />
        <Timeline.Content>
          <div className="flex justify-between items-center">
            <Timeline.Time>February 2022</Timeline.Time>
            <div className="flex gap-3 items-center">
              <StatusBadge status={false} />
              <Badge size={'sm'}>Debug</Badge>
            </div>
          </div>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <div className='w-fit overflow-clip flex gap-1 rounded-2xl'>
            <img src="https://placehold.co/180" alt="complaint media" />
            <img src="https://placehold.co/180" alt="complaint media" />
            <img src="https://placehold.co/180" alt="complaint media" />
          </div>
          <FooterDivider />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <ThumbsUp size={18} className="text-gray-700 hover:text-black" />
              <FlagIcon size={18} className="text-gray-700 hover:text-black" />
            </div>
            <p><span className="font-bold">Complaint ID:</span> #1234567890</p>
          </div>
        </Timeline.Content>
      </Timeline.Item>


    </Timeline>
  );
}
