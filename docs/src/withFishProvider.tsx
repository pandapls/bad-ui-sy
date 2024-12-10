import * as React from "react";
import {
  FishGlobals,
  FishStoryContext,
  THEME_ID,
  ThemeIds,
  themes,
} from "../theme-addon";
import { defaultTheme } from "../theme-addon/theme";
import { BadProvider } from "../../src";

const findTheme = (themeId?: ThemeIds) => {
  if (!themeId) {
    return;
  }
  return themes.find((value) => value.id === themeId);
};

const getActiveFishTheme = (globals: FishGlobals) => {
  const selectedThemeId = globals[THEME_ID];
  const { theme } = findTheme(selectedThemeId) ?? defaultTheme;

  return { theme };
};

export const withFishProvider = (
  Story: React.ElementType,
  context: FishStoryContext
) => {
  const { globals } = context;
  const globalTheme = getActiveFishTheme(globals);
  const { theme } = globalTheme;
  return (
    <BadProvider theme={theme}>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </BadProvider>
  );
};
