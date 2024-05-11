
"use client";

import { Card } from "flowbite-react";

export function Stats({statData, statTitle}) {
  return (
    <Card href="#" className="max-w-sm">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        {statData ? statData : 69}
      </h1>
      <h3 className="text-2xl font-semibold">{statTitle ? statTitle : "Total Complaints"}</h3>
  </Card>
  );
}
