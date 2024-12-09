import { PartialTheme, Theme } from 'bad-ui-sy';
/**
 * 根据theme， 创建一个css规则
 * Bad-ui-Badproviderr0 {
 *  --borderRadiusNone: 0;
 * 	--borderRadiusSmall: 2px;
 * 	...
 * }
 */
export const createCssRuleFromTheme = (
	selector: string,
	theme: Theme | PartialTheme | undefined
): string => {
	if (theme) {
		const cssVarsAsString = (
			Object.keys(theme) as (keyof typeof theme)[]
		).reduce((cssVarRule, cssVar) => {
			return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
		}, '');
		return `${selector} { ${cssVarsAsString} }`;
	}
	return `${selector} {}`;
};
