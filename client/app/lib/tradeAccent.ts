export type TradeAccent = {
  text: string;
  bg: string;
  soft: string;
  rowHover: string;
  borderHover: string;
  shadowHover: string;
};

const ACCENTS: Record<string, TradeAccent> = {
  electricidad: {
    text: "text-elec",
    bg: "bg-elec",
    soft: "bg-elec-soft",
    rowHover: "hover:bg-elec-soft",
    borderHover: "hover:border-elec",
    shadowHover: "hover:shadow-[0_12px_28px_-10px_rgb(204_133_0/0.5)]",
  },
  plomeria: {
    text: "text-agua",
    bg: "bg-agua",
    soft: "bg-agua-soft",
    rowHover: "hover:bg-agua-soft",
    borderHover: "hover:border-agua",
    shadowHover: "hover:shadow-[0_12px_28px_-10px_rgb(13_143_160/0.5)]",
  },
  gas: {
    text: "text-flame",
    bg: "bg-flame",
    soft: "bg-flame-soft",
    rowHover: "hover:bg-flame-soft",
    borderHover: "hover:border-flame",
    shadowHover: "hover:shadow-[0_12px_28px_-10px_rgb(224_82_6/0.5)]",
  },
};

const DEFAULT_ACCENT: TradeAccent = {
  text: "text-blue",
  bg: "bg-blue",
  soft: "bg-mist",
  rowHover: "hover:bg-row-hover",
  borderHover: "hover:border-blue",
  shadowHover: "hover:shadow-[0_12px_28px_-10px_rgb(22_104_184/0.45)]",
};

export const tradeAccent = (slug: string): TradeAccent =>
  ACCENTS[slug] ?? DEFAULT_ACCENT;
