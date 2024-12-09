import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from 'bad-ui-sy';
import { BadProviderProps } from './BadProvider';
import { useThemeStyleTag } from './useThemeStyleTag';
const fishProviderClassNames = {
	root: 'bad-ui-FishProvider',
};
const useBaseStyles = makeStyles({
	root: {
		color: tokens.colorNeutralBackground1,
		backgroundColor: tokens.colorNeutralBackground1,
		textAlign: 'left',
	},
});
export const useStyles = ({ className, theme }: Partial<BadProviderProps>) => {
	const baseStyles = useBaseStyles();
	const { themeClassName } = useThemeStyleTag({ theme });
	const cls = mergeClasses(
		fishProviderClassNames.root,
		themeClassName,
		baseStyles.root,
		className
	);
	return cls;
};
