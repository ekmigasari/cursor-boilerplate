import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import React from "react";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  //Add font to storybook preview
  decorators: [
    (Story) => {
      return <main className={font.className}>{Story()}</main>;
    },
  ],
};

export default preview;
