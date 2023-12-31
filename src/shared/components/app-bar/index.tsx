import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../../routes/enum";
import BasicMenu from "../menu";

export default function AppBarHeader() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#007FFF" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ética relacionada à IA
          </Typography>
          <BasicMenu></BasicMenu>
          <Button
            color="inherit"
            onClick={() => {
              navigate(RoutesEnum.Home);
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
