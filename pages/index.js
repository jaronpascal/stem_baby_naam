import Head from "next/head";
import styles from "../styles/Home.module.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const names = [
  "Lias",
  "Nolan",
  "Nando",
  "Otis",
  "Laurits",
  "Thor",
  "Oliver",
  "Ezequiel",
  "Felix",
  "Magnus",
  "Måns",
  "Tobias",
  "Mika",
  "Egon",
  "Marvin",
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
        maxWidth="800px"
        flexWrap="wrap"
      >
        {names.sort().map(function (name, index) {
          return <Item>{name}</Item>;
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
          href="https://forms.gle/27Q6ApYtkZ2yVfDX6"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Stem en win 🥳
        </a>
      </Button>
    </Box>
  );
}
