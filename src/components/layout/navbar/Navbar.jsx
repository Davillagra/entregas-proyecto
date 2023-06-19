import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Link,
  Switch,
  TextField,
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
import { CartWidget } from "../../cartwidget/CartWidget"
import { useState } from "react"
import { Link as CustomLink } from "react-router-dom"

export const Navbar = ({ onThemeChange }) => {
  const [themeHanlder, setThemeHanlder] = useState(true)
  const handleThemeChange = () => {
    const newThemeHandler = !themeHanlder
    setThemeHanlder(newThemeHandler)
    onThemeChange(newThemeHandler)
  }
  return (
    <>
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
            <Switch checked={themeHanlder} onChange={handleThemeChange} />
          </Grid>
        </Grid>
        <Grid container item xs={12} className="navigation">
          <Grid container item xs={8} gap={8} className="navigationLinks">
            <CustomLink to="/">
              <HomeOutlined className="icons" />
            </CustomLink>
            <Accordion className="prodAccordion">
              <AccordionSummary
                className="accordionSummary"
                expandIcon={<ExpandMore color="primary" />}
              >
                <Inventory2Outlined className="icons" color="primary" />
              </AccordionSummary>
              <AccordionDetails className="prodCategory">
                <CustomLink to="/">Todo</CustomLink>
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                <CustomLink to="category/urbanas">Urbanas</CustomLink>
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                <CustomLink to="category/deportivas">Deportivas</CustomLink>
              </AccordionDetails>
            </Accordion>
            <Link>
              <ContactSupportOutlined className="icons" />
            </Link>
          </Grid>

          <Grid container item xs={4} gap={8} className="navigationLinks">
            <CustomLink to="/cart">
              <CartWidget />
            </CustomLink>
            <Link>
              <AccountCircleOutlined className="icons" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
