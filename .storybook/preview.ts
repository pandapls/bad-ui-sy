import type { Preview } from '@storybook/react';
import { useExportToSandboxButton } from '../docs/sandbox/decorators/with-export-to-sandbox-button';
import '../docs/sandbox/styles.css';
import { withFishProvider } from '../docs/src/withFishProvider';
export const decorators = [withFishProvider, useExportToSandboxButton];

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
		exportToSandbox: {
			requiredDependencies: {
				react: '^18',
				'react-dom': '^18',
			},
		},
	},
};

export default preview;
