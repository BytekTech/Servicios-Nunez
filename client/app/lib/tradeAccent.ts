export type TradeAccent = {
  text: string;
  bg: string;
  soft: string;
  rowHover: string;
};

const ACCENTS: Record<string, TradeAccent> = {
  electricidad: {
    text: "text-elec",
    bg: "bg-elec",
    soft: "bg-elec-soft",
    rowHover: "hover:bg-elec-soft",
  },
  plomeria: {
    text: "text-agua",
    bg: "bg-agua",
    soft: "bg-agua-soft",
    rowHover: "hover:bg-agua-soft",
  },
  gas: {
    text: "text-flame",
    bg: "bg-flame",
    soft: "bg-flame-soft",
    rowHover: "hover:bg-flame-soft",
  },
};

const DEFAULT_ACCENT: TradeAccent = {
  text: "text-blue",
  bg: "bg-blue",
  soft: "bg-mist",
  rowHover: "hover:bg-row-hover",
};

export const tradeAccent = (slug: string): TradeAccent =>
  ACCENTS[slug] ?? DEFAULT_ACCENT;
