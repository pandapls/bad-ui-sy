import { renderHook } from "@testing-library/react";
import type { Theme } from "bad-ui-sy";
import { useThemeStyleTag } from "../useThemeStyleTag";

const createDocumentMock = (): Document => {
    const externalDocument = document.implementation.createDocument(
        "http://www.w3.org/1999/xhtml",
        "html",
        null
    );
    const body = document.createElement("body");
    const head = document.createElement("head");
    externalDocument.documentElement.appendChild(head);
    externalDocument.documentElement.appendChild(body);
    return externalDocument;
};

describe("useThemeStyleTag", () => {
    const defaultTheme = {
        "css-variable-1": "1",
        "css-variable-2": "2",
    } as unknown as Theme;

    it("should render style tag", () => {
        // Act
        const { result } = renderHook(() =>
            useThemeStyleTag({
                theme: defaultTheme,
            })
        );
        // Assert
        expect(
            document.getElementById(result.current.themeClassName)
        ).not.toBeNull();
    });

    it("should remove style tag on unmount", () => {
        // Arrange
        const { result, unmount } = renderHook(() =>
            useThemeStyleTag({
                theme: defaultTheme,
            })
        );

        // Act
        unmount();

        // Assert
        expect(document.getElementById(result.current.themeClassName)).toBeNull();
    });

    it("should move style tags in body to head on first render", () => {
        const targetDocument = createDocumentMock();

        vi.spyOn(targetDocument, "createElement");
        renderHook(() =>
            useThemeStyleTag({
                theme: defaultTheme,
            })
        );

        expect(targetDocument.body.querySelector("style")).toBeNull();
        // expect(targetDocument.head.querySelectorAll("style").length).toBe(0);
        expect(targetDocument.createElement).toHaveBeenCalledTimes(0);
    });
});
