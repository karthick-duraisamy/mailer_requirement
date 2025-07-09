import { CustomLabel } from "../types/email";

export const mockCustomLabels: CustomLabel[] = [
  {
    id: "urgent",
    name: "Urgent",
    color: "#F59E0B", // amber-500
    description: "Urgent emails requiring immediate attention",
    createdAt: "2024-01-10T00:00:00Z",
    isSystem: false,
  },
  {
    id: "clients",
    name: "Clients",
    color: "#06B6D4", // cyan-500
    description: "Client communications",
    createdAt: "2024-01-12T00:00:00Z",
    isSystem: false,
  },
  {
    id: "newsletters",
    name: "Newsletters",
    color: "#84CC16", // lime-500
    description: "Newsletter subscriptions",
    createdAt: "2024-01-14T00:00:00Z",
    isSystem: false,
  },
  {
    id: "purchase-intent",
    name: "Purchase Intent",
    color: "#10B981", // green-500
    description: "Emails showing purchase interest",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
  },
  {
    id: "demo-request",
    name: "Demo Request",
    color: "#F59E0B", // amber-500
    description: "Requests for product demos",
    createdAt: "2024-01-19T00:00:00Z",
    isSystem: false,
    category: "intent",
  },
  {
    id: "support-inquiry",
    name: "Support Inquiry",
    color: "#EF4444", // red-500
    description: "Customer support questions",
    createdAt: "2024-01-20T00:00:00Z",
    isSystem: false,
    category: "intent",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    color: "#8B5CF6", // purple-500
    description: "Enterprise client communications",
    createdAt: "2024-01-21T00:00:00Z",
    isSystem: false,
    category: "corporate",
  },
  {
    id: "partnerships",
    name: "Partnerships",
    color: "#06B6D4", // cyan-500
    description: "Business partnership discussions",
    createdAt: "2024-01-22T00:00:00Z",
    isSystem: false,
    category: "corporate",
  },
  {
    id: "legal",
    name: "Legal",
    color: "#374151", // gray-700
    description: "Legal and compliance matters",
    createdAt: "2024-01-23T00:00:00Z",
    isSystem: false,
    category: "corporate",
  },
];

export const labelColors = [
  "#3B82F6", // blue-500
  "#10B981", // green-500
  "#EF4444", // red-500
  "#8B5CF6", // purple-500
  "#F59E0B", // amber-500
  "#06B6D4", // cyan-500
  "#84CC16", // lime-500
  "#EC4899", // pink-500
  "#6366F1", // indigo-500
  "#14B8A6", // teal-500
  "#F97316", // orange-500
  "#A855F7", // violet-500
  "#9CA3AF", // gray-400 — newly added for `Seen`
];
