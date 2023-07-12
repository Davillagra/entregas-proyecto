import { ButtonBase, Grid, Paper, styled, Typography } from "@mui/material"
import { ItemCount } from "../../common/ItemCount"
import "./ProductDetail.css"

export const ProductDetail = ({ productSelected, addToCart, quantity }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    }

    addToCart(data)
  }
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  })

  return (
    <Paper
      className="paper"
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 700,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 256, height: 256 }}>
            <Img alt={productSelected.title} src={productSelected.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container className="container">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {productSelected.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {productSelected.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quedan: {productSelected.stock}
              </Typography>
            </Grid>
            {productSelected.stock > 0 ? (
              <ItemCount
                stock={productSelected.stock}
                initial={quantity}
                onAdd={onAdd}
              />
            ) : (
              <h3>No hay stock</h3>
            )}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $ {productSelected.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
