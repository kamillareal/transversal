import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../../routes/enum";

export default function BasicMenu() {
  const navigate = useNavigate();
  const [topics, setTopics] = React.useState<null | HTMLElement>(null);
  const open = Boolean(topics);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTopics(event.currentTarget);
  };
  const handleClose = () => {
    setTopics(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        Tópicos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={topics}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => navigate(RoutesEnum.racismoAlgoritmico)}>
          Racismo algoritímico
        </MenuItem>
        <MenuItem onClick={() => navigate(RoutesEnum.privacidadeDeDados)}>
          Privacidade de dados
        </MenuItem>
        <MenuItem onClick={() => navigate(RoutesEnum.impactoNoMercado)}>
          Impacto no mercado
        </MenuItem>
      </Menu>
    </div>
  );
}
