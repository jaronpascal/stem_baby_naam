import Head from "next/head";
import styles from "../styles/Home.module.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const names = [
  "Luna",
  "Nina",
  "Zelda",
  "Freja",
  "Nova",
  "Daphne",
  "Lucie",
  "Tess",
  "Nora",
  "Juno",
  "Alejandra",
  "Nika",
  "Amelia",
  "Esmé",
  "Aurora",
  "Adeline",
  "Magna",
  "Mara",
  "Lena",
  "Livia"
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "70px",
  width: "200px",
  fontSize: "30px",
  margin: "20px",
}));

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding="50px"
      flexDirection="column"
    >
      <Box
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        maxWidth="1000px"
        flexWrap="wrap"
      >
        {names.sort().map(function (name, index) {
          return <Item key="{name}">{name}</Item>;
        })}
      </Box>
      <Button
        style={{
          width: "300px",
          padding: "5px",
          margin: "15px",
          fontSize: "20px",
        }}
        variant="contained"
      >
        <a
          href="https://forms.gle/RwUciAUrL7Qzk2gg7"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Stem en win 🥳
        </a>
      </Button>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </Box>
          
  );
}
