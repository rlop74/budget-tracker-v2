export const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
] as const;

export type Month = (typeof MONTHS)[number];

export type MonthlySummary = {
    month: Month;
    income: number;
    expenses: number;
    savings: number;
}

export const MONTHLY: MonthlySummary[] = [
    { month: "Jan", income: 5000, expenses: 3200, savings: 0 },
    { month: "Feb", income: 5200, expenses: 2800, savings: 0 },
    { month: "Mar", income: 5000, expenses: 3500, savings: 0 },
    { month: "Apr", income: 5500, expenses: 3000, savings: 0 },
    { month: "May", income: 5200, expenses: 3300, savings: 0 },
    { month: "Jun", income: 5800, expenses: 3600, savings: 0 },
    { month: "Jul", income: 5000, expenses: 3200, savings: 0 },
    { month: "Aug", income: 5200, expenses: 2800, savings: 0 },
    { month: "Sep", income: 5000, expenses: 3500, savings: 0 },
    { month: "Oct", income: 5500, expenses: 3000, savings: 0 },
    { month: "Nov", income: 5200, expenses: 3300, savings: 0 },
    { month: "Dec", income: 5800, expenses: 3600, savings: 0 },
];
