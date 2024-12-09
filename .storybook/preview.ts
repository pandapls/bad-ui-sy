import type { Preview } from '@storybook/react';

const preview: Preview = {
  // 自动生成开发文档
	tags: ['autodocs'],
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
