import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createTheme,
  Grid,
  IconButton,
  Link,
  TextField,
  ThemeProvider,
} from "@mui/material"
import "./Navbar.css"
import {
  HomeOutlined,
  Search,
  AccountCircleOutlined,
  Inventory2Outlined,
  ContactSupportOutlined,
  ExpandMore,
} from "@mui/icons-material"
import { CartWidget } from "../cartwidget/CartWidget"
import { DarkModeHandler } from "../darkmodehandler/DarkModeHandler"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    warning: {
      main: "#ff0000",
    },
  },
})

export const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="container">
        <Grid container item action="" xs={12} className="search">
          <Grid className="searchBox" item xs={9}>
            <TextField
              id="outlined-basic"
              label="Buscar"
              variant="outlined"
              className="searchFields"
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton className="searchFields" color="primary">
              <Search />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <DarkModeHandler />
          </Grid>
        </Grid>
        <Grid container item xs={12} className="navigation">
          <Grid container item xs={8} gap={8} className="navigationLinks">
            <Link>
              <HomeOutlined className="icons" />
            </Link>
            <Accordion className="prodAccordion">
              <AccordionSummary
                className="accordionSummary"
                expandIcon={<ExpandMore color="primary" />}
              >
                <Inventory2Outlined className="icons" color="primary" />
              </AccordionSummary>
              <AccordionDetails className="prodCategory">
                Producto1
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                Producto2
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                Producto3
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                Producto4
              </AccordionDetails>
            </Accordion>
            <Link>
              <ContactSupportOutlined className="icons" />
            </Link>
          </Grid>

          <Grid container item xs={4} gap={8} className="navigationLinks">
            <Link>
              <CartWidget />
            </Link>
            <Link>
              <AccountCircleOutlined className="icons" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
