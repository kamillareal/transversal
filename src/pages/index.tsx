import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: "1rem",
  justifyContent: "center",
}));

export const Font = styled("div")(() => ({
  color: "rgba(0,0,0,0.7)",
  fontSize: "18px",
  padding: "2rem 4rem",
}));

export const Gap = styled("div")(() => ({
  color: "rgba(0,0,0,0.7)",
  fontSize: "18px",
  paddingTop: "1rem",
}));
