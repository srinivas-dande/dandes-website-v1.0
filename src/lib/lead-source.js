export function initializeLeadSource() {
  if (typeof window === "undefined") return;

  const existingSource = sessionStorage.getItem("lead_source");
  const existingSubSource = sessionStorage.getItem("lead_sub_source");

  if (!existingSource && !existingSubSource) {
    const params = new URLSearchParams(window.location.search);

    const leadSource =
      params.get("lead_source") || "Website";

    const leadSubSource =
      params.get("lead_sub_source") || "Website";

    sessionStorage.setItem("lead_source", leadSource);
    sessionStorage.setItem("lead_sub_source", leadSubSource);
  }
}

export function getLeadSource() {
  return {
    leadSource:
      sessionStorage.getItem("lead_source") || "Website",

    leadSubSource:
      sessionStorage.getItem("lead_sub_source") || "Website",
  };
}