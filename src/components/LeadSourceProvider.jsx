"use client";

import { useEffect } from "react";
import { initializeLeadSource } from "@/lib/lead-source";

export default function LeadSourceProvider({ children }) {
  useEffect(() => {
    initializeLeadSource();
  }, []);

  return children;
}