import DesktopComputer from "../svg/DesktopComputer";
import Page from "../svg/Page";
import PhoneQr from "../svg/PhoneQr";
import SaleDataBar from "../svg/SaleDataBar";
import Setting from "../svg/Setting";

const HowItWorksCards = [
  {
    stepNumber: "01",
    icon: Setting,
    who: "Owner",
    title: "Set up your menu",
    description:
      "Add items, prices, and categories via web dashboard in 15 minutes. No technical skills needed.",
  },
  {
    stepNumber: "02",
    icon: Page,
    who: "TableTab",
    title: "QR codes generated",
    description:
      "Unique QR code per table. Print on paper, put on table. Done.",
  },
  {
    stepNumber: "03",
    icon: PhoneQr,
    who: "Customer",
    title: "Scan & order",
    description:
      "Opens on their phone instantly. No app download, no login, no friction.",
  },
  {
    stepNumber: "04",
    icon: DesktopComputer,
    who: "Kitchen",
    title: "Order appears live",
    description:
      "Instant notification on your kitchen display. Any tablet or old laptop works in Chrome.",
  },
  {
    stepNumber: "05",
    icon: SaleDataBar,
    who: "Owner",
    title: "See your sales data",
    description:
      "Daily revenue, top items, peak hours — auto-generated every day.",
  },
];

export default HowItWorksCards;
