import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

const theme = {
	colors: {
		tangaroa: "#032539",
		elm: "#1C768F",
		fantasy: "#FBF3F2",
		treepoppy: "#FA991C"
	}
}

export const ThemeProvider: React.SFC = ({ children }) => {
	return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
