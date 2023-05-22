import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box, Switch } from "@mui/material"
import { useState } from "react"
import { theme } from "../navbar/Navbar"
import "./DarkModeHandler.css"

export function DarkModeHandler() {
  const [themeHanlder, setThemeHanlder] = useState(true)
  return (
    <Box className="switch">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch onChange={() => setThemeHanlder(!themeHanlder)} />
      </ThemeProvider>
    </Box>
  )
}
