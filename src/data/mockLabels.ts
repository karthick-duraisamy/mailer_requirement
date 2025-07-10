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
    count:21
  },
  {
    id: "demo-request",
    name: "Demo Request",
    color: "#F59E0B", // amber-500
    description: "Requests for product demos",
    createdAt: "2024-01-19T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:212
  },
  {
    id: "support-inquiry",
    name: "Support Inquiry",
    color: "#EF4444", // red-500
    description: "Customer support questions",
    createdAt: "2024-01-20T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:1
  },
  {
    id: "compose-email",
    name: "Compose Email",
    color: "#3B82F6", // blue-500
    description: "Emails composed by the user",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:23
  },
  {
    id: "reply-email",
    name: "Reply to Email",
    color: "#6366F1", // indigo-500
    description: "Replies to received emails",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:41
  },
  {
    id: "forward-email",
    name: "Forward Email",
    color: "#8B5CF6", // violet-500
    description: "Emails forwarded to another recipient",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:242
  },
  {
    id: "delete-email",
    name: "Delete Email",
    color: "#EF4444", // red-500
    description: "Emails marked for deletion",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "intent",
    count:27
  },
  {
    id: "mark-as-read",
    name: "Mark as Read",
    color: "#10B981", // green-500
    description: "Emails marked as read",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "intent",
    count:31
  },
  {
    id: "mark-as-unread",
    name: "Mark as Unread",
    color: "#F59E0B", // amber-500
    description: "Emails marked as unread",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "intent",
    count:92
  },
  {
    id: "search-email",
    name: "Search Email",
    color: "#06B6D4", // cyan-500
    description: "Searching for specific emails",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:37
  },
  {
    id: "filter-by-label",
    name: "Filter by Label",
    color: "#A855F7", // purple-500
    description: "Filtering emails using labels or tags",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "intent",
    count:72
  },
  {
    id: "enterprise",
    name: "Enterprise",
    color: "#8B5CF6", // purple-500
    description: "Enterprise client communications",
    createdAt: "2024-01-21T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:32
  },
  {
    id: "partnerships",
    name: "Partnerships",
    color: "#06B6D4", // cyan-500
    description: "Business partnership discussions",
    createdAt: "2024-01-22T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:38
  },
  {
    id: "legal",
    name: "Legal",
    color: "#374151", // gray-700
    description: "Legal and compliance matters",
    createdAt: "2024-01-23T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:3712
  },
  {
    id: "meeting-request",
    name: "Meeting Request",
    color: "#3B82F6", // blue-500
    description: "Emails requesting to schedule meetings or calls",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:22
  },
  {
    id: "project-update",
    name: "Project Update",
    color: "#6366F1", // indigo-500
    description: "Emails providing updates on ongoing projects",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:24
  },
  {
    id: "escalation",
    name: "Escalation",
    color: "#EF4444", // red-500
    description: "Emails escalating issues to higher authorities",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "corporate",
    count:13
  },
  {
    id: "approval-request",
    name: "Approval Request",
    color: "#F59E0B", // amber-500
    description: "Emails requesting approval for decisions, budgets, or tasks",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:7
  },
  {
    id: "follow-up",
    name: "Follow Up",
    color: "#10B981", // green-500
    description: "Emails sent to follow up on pending actions or discussions",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:2
  },
  {
    id: "announcement",
    name: "Corporate Announcement",
    color: "#A855F7", // purple-500
    description: "Emails with company-wide announcements or notices",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "corporate",
    count:27
  },
  {
    id: "feedback-request",
    name: "Feedback Request",
    color: "#06B6D4", // cyan-500
    description: "Emails requesting feedback on tasks, meetings, or documents",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: false,
    category: "corporate",
    count:712
  },
  {
    id: "hr-communication",
    name: "HR Communication",
    color: "#F97316", // orange-500
    description: "Emails from or related to Human Resources",
    createdAt: "2024-01-18T00:00:00Z",
    isSystem: true,
    category: "corporate",
    count:72
  }
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
  "#9CA3AF", // gray-400 — newly added for Seen
];