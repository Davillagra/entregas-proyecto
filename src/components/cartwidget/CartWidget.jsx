import styled from "@emotion/styled"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useState } from "react"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -0,
    top: -0,
    border: `1px solid ${theme}`,
    padding: "0 4px",
  },
}))

export const CartWidget = () => {
  const [addToCart, setAddToCart] = useState(0) // por ahora agrego items al carro solo haciendole click
  return (
    <StyledBadge badgeContent={addToCart} color="warning">
      <ShoppingCartOutlined onClick={() => setAddToCart(addToCart + 1)} />
    </StyledBadge>
  )
}