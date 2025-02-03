import { Spacer } from "../components/spacer";

export default {
  title: "Example/Spacer",
  component: Spacer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    x: {
      control: {
        type: "number",
      },
    },
    y: {
      control: {
        type: "number",
      },
    },
  },
};

export const defaultSpacer = {
  args: {
    x: undefined,
    y: undefined,
  },
}

export const X10 = {
  args: {
    x: 10,
  },
};

export const Y10 = {
  args: {
    y: 10,
  },
};

export const X10Y10 = {
  args: {
    x: 10,
    y: 10,
  },
};
