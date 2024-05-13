"use client";

import { Badge, FooterDivider, Timeline } from "flowbite-react";
import {Calendar, FlagIcon, ThumbsUp } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";

export function ComplaintTimeline({date, category, title, body, complaintId,isResolved}) {
  return (
    <Timeline>

      <Timeline.Item>
        <Timeline.Point icon={Calendar} />
        <Timeline.Content>
          <div className="flex justify-between items-center">
            <Timeline.Time>{date}</Timeline.Time>
            <div className="flex gap-3 items-center">
              <StatusBadge status={isResolved ? isResolved : false} />
              <Badge size={'sm'}>{category ? category : 'Default'}</Badge>
            </div>
          </div>
          <Timeline.Title>{title}</Timeline.Title>
          <Timeline.Body>
            {body}
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
            <p><span className="font-bold">Complaint ID:</span> {complaintId}</p>
          </div>
        </Timeline.Content>
      </Timeline.Item>


    </Timeline>
  );
}
