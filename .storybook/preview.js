/** @type { import('@storybook/html').Preview } */
export const customViewports = {
  smallUgly: {
    styles: {
      width: "360px",
      height: "540px",
    },
  },
  mediumUgly: {
    styles: {
      width: "1024px",
      height: "1200px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViwport: "someDefault",
    },
  },
};

export default preview;
