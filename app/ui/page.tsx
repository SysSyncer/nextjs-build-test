'use client'

import Link from "next/link";
import InvoiceStatus from "@/app/ui/invoices/status";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("pending");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <InvoiceStatus status={status}/>
      <button className="w-16 h-8 p-1 font-mono text-sm font-light text-white bg-blue-500 rounded-lg hover:opacity-75" onClick={() => setStatus((prev) => (prev === 'pending' ? 'paid' : 'pending'))}>Toggle</button>
    </div>
  );
}
