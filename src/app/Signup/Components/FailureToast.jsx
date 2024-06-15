import React from 'react'
import { Toast } from "flowbite-react";
import { CircleX } from "lucide-react";

export default function FailureToast() {
  return (
    <Toast className="border border-gray-300 absolute bottom-10 right-10">
      <CircleX className="h-5 w-5 text-red-500 dark:text-red-500" />
      <div className="pl-4 text-sm font-normal">Failed to Signup.</div>
      <Toast.Toggle />
    </Toast>

  )
}
