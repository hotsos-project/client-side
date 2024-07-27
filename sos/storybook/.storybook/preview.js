/** @type { import('@storybook/react').Preview } */
import '@sos/style-tokens/style-tokens.css';
import '@sos/components-react/style/css';


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
