import { PartialTheme } from 'bad-ui-sy';
// import { describe, expect, it } from 'vitest';
import { createCssRuleFromTheme } from '../createCSSRuleFromTheme';

describe('createCSSRuleFromTheme', () => {
	it('handles undefined theme', () => {
		expect(
			createCssRuleFromTheme('.selector', undefined)
		).toMatchInlineSnapshot(`".selector {}"`);
	});

	it('handles a theme', () => {
		const theme: PartialTheme = {
			borderRadiusLarge: '10px',
			colorBackgroundOverlay: 'rgba(0, 0, 0, 0.4)',
		};

		expect(createCssRuleFromTheme('.selector', theme)).toMatchInlineSnapshot(
			`".selector { --borderRadiusLarge: 10px; --colorBackgroundOverlay: rgba(0, 0, 0, 0.4);  }"`
		);
	});
});
