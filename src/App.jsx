import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material"
import { useState } from "react"
import "./App.css"
import { ItemListContainer } from "./components/container/ItemListContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import { ProductsListContainer } from "./components/pages/productlist/ProductsListContainer"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Cart } from "./components/pages/cart/Cart"
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer"

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#34c53e",
    },
    warning: {
      main: "#ff0000",
    },
  },
})

export const ligthTheme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    warning: {
      main: "#ff0000",
    },
  },
})

function App() {
  const [theme, setTheme] = useState(darkTheme)
  const handleThemeChange = (newThemeHandler) => {
    newThemeHandler ? setTheme(darkTheme) : setTheme(ligthTheme)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar onThemeChange={handleThemeChange} />
              <Outlet />
            </ThemeProvider>
          }
        >
          <Route path="/" element={<ProductsListContainer />} />
          <Route path="/itemdetail/:id" element={<ProductDetailContainer />} />
          <Route
            path="/category/:catName"
            element={<ProductsListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route />
        </Route>

        <Route path="*" element={<h1>La Ruta no existe</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
