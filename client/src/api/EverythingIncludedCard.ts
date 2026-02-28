import {
  Bell,
  ChartColumnIncreasing,
  TabletSmartphone,
  UtensilsCrossed,
} from "lucide-solid";

interface Card {
  title: string;
  description: string;
  icon: any;
  listItem: string[];
}

const EverythingIncludedCard: Card[] = [
  {
    title: "Menu Management",
    description:
      "Full control over your menu from any browser — update in seconds, changes go live instantly.",
    icon: UtensilsCrossed,
    listItem: [
      "Unlimited categories & items with photos",
      "Mark items sold out in one tap",
      "Item modifiers: size, add-ons, spice level",
      "Drag-and-drop reordering",
    ],
  },
  {
    title: "Sales Reports",
    description: "Know your business. Automatically every day",
    icon: ChartColumnIncreasing,
    listItem: [
      "Daily revenue vs yesterday",
      "Top 10 items this week",
      "Peak hours chart",
      "CSV export for accountant",
    ],
  },
  {
    title: "Table & QR Management",
    description: "Create tables, generate QR codes, print as PDF.",
    icon: TabletSmartphone,
    listItem: [
      "Custom table names",
      "Live table status view",
      "'Call for bill' button",
    ],
  },
  {
    title: "Order Tracking",
    description:
      "Real-time feed with sound alerts. Mark orders through each stage.",
    icon: Bell,
    listItem: [
      "Received → Preparing → Ready",
      "SMS notification when ready (opt.)",
      "Manual orders for walk-ins",
    ],
  },
];

export default EverythingIncludedCard;
