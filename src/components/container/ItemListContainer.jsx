import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { useState } from "react"

export function ItemListContainer() {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Nombre</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value={"Maxi"}>Maxi</MenuItem>
          <MenuItem value={"Pedro"}>Pedro</MenuItem>
          <MenuItem value={"Juan"}>Juan</MenuItem>
        </Select>
      </FormControl>
      {name && <span>Hola {name} como estas?</span>}
    </div>
  )
}
