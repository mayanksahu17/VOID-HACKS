"use client";  // Ensures that this file runs client-side in Next.js

import React from "react";
import Components from "@/components/piechart"; // Adjust the path based on the actual location of the Components file
import Barr from "@/components/barchart"; // Adjust the path based on the actual location of the BarChart file
export default function AdminDashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Admin Dashboard</h1>
      
      {/* Using the Components (Pie chart) */}
      <Components />
      <Barr />
    </div>
  );
}