import { userEvent, within } from "@storybook/testing-library";
import { createButton } from "./button";
import { expect } from "@storybook/jest";
// import ButtonDoc from "./button.md";

export default {
  title: "Design System/Atoms/Button",
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.margin = "24px";
      decorator.appendChild(story());
      return decorator;
    },
  ],
  parameters: {
    docs: {
      page: null,
      description: {
        // component: ButtonDoc
      },
    },
    actions: {
      handles: ["mouseover"],
    },
    backgrounds: {
      default: "default",
      values: [
        { name: "black", value: "#000000" },
        { name: "default", value: "#FFFFFF" },
      ],
    },
  },
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "text",
      },
    },
    style: {
      name: "style",
      options: ["filled", "outlined"],
      control: {
        type: "radio",
      },
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    onClick: {
      description: "Event",
      action: "clicked",
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  // Esto solo lo toma si no hay argTypes definidos
  label: "Button",
  style: "outlined",
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
  await expect(canvas.getByText("Button")).toBeInTheDocument;
};
