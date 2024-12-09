import { webLightTheme, type Theme } from 'bad-ui-sy'
import { useStyles } from './useStyles.styles'
import React from 'react';
// FishProvider作为祖先组件，传递主题，让后代消费
// 创建context
type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);

export type BadProviderProps = React.HTMLAttributes<HTMLDivElement> & {
    theme?: ThemeContextValue
}
export const BadProvider = ({
    theme = webLightTheme,
    className,
    children,
    ...restProps
}: BadProviderProps) => {
    const cls = useStyles({ theme, className });
    return (<ThemeContext.Provider value={theme}>
        <div {...restProps} className={cls} >{children}</div>
    </ThemeContext.Provider>)
}