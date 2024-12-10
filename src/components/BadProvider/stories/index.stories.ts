import { Meta } from '@storybook/react';
import { BadProvider } from 'bad-ui-sy';
import Nested from './Nested.stories';
import Default from './Default.stories';
import DefaultSource from './Default.stories?raw';
import NestedSource from './Nested.stories?raw';

const meta = {
	title: '组件/BadProvider',
	component: BadProvider,
} satisfies Meta<typeof BadProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
	docs: {
		source: {
			code: DefaultSource,
		},
	},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Nested as any).parameters = {
	docs: {
		description: {
			story: 'FishProvider可以嵌套使用。',
		},
		source: {
			code: NestedSource,
		},
	},
};

export { Default, Nested };
