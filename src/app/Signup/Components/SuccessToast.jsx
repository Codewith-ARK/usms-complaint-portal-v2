
"use client";

import { Toast } from "flowbite-react";
import { CircleCheck } from "lucide-react";

export default function SuccessToast() {
  return (
    <Toast className="border border-gray-300 absolute bottom-10 right-10">
      <CircleCheck className="h-5 w-5 text-green-400 dark:text-green-400" />
      <div className="pl-4 text-sm font-normal">Signed up successfully.</div>
      <Toast.Toggle />
    </Toast>
  );
}
