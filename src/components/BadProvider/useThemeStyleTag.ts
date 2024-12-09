import { BadProviderProps } from 'bad-ui-sy';
import React from 'react';
import { createCssRuleFromTheme } from './createCSSRuleFromTheme';

const createStyleTag = (
	target: Document | undefined,
	elementAttributes: Record<string, string>
) => {
	if (!target) {
		return undefined;
	}

	const tag = target.createElement('style');
	Object.keys(elementAttributes).forEach((attrName) => {
		tag.setAttribute(attrName, elementAttributes[attrName]);
	});

	target.head.appendChild(tag);

	return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
	const sheet = tag.sheet;
	if (sheet) {
		if (sheet.cssRules.length > 0) {
			sheet.deleteRule(0);
		}

		sheet.insertRule(rule, 0);
	}
};
export const useThemeStyleTag = ({ theme }: Partial<BadProviderProps>) => {
	const targetDocument = document;
	// style😊
	const styleTag = React.useRef<HTMLStyleElement | undefined | null>();
	const generatedId = React.useId();

	const excapedId = React.useMemo(
		() => generatedId.replace(/:/g, ''),
		[generatedId]
	);
	// 	唯一类名
	const themeClassName = 'Bad-ui-FishProvider' + excapedId;
	// 根据theme生成css规则
	const rule = React.useMemo(
		() => createCssRuleFromTheme(`.${themeClassName}`, theme),
		[theme, themeClassName]
	);
	React.useLayoutEffect(() => {
		styleTag.current = createStyleTag(targetDocument, {
			id: themeClassName,
		});
		if (styleTag.current) {
			insertSheet(styleTag.current, rule);
		}
		return () => {
			styleTag.current?.remove();
		};
	}, [themeClassName, targetDocument, rule]);
	return {
		themeClassName,
		rule,
	};
};
