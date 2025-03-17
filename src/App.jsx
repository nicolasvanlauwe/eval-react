import { Route, Routes } from "react-router";
import "./App.css";
import { Accueil } from "./pages/Accueil/Accueil";
import { Films } from "./pages/Films/Films";
import { AddFilm } from "./pages/AddFilm/AddFilm";
import { EditFilm } from "./pages/EditFilm/EditFilm";
import { Connexion } from "./pages/Connexion/Connexion";
import { Inscription } from "./pages/Inscription/Inscription";
import { FilmDetails } from "./pages/FilmDetails/FilmDetails";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Accueil></Accueil>}></Route>
      <Route path="/films" element={<Films></Films>}></Route>
      <Route path="/add-film" element={<AddFilm></AddFilm>}></Route>
      <Route path="/login" element={<Connexion></Connexion>}></Route>
      <Route path="/signin" element={<Inscription></Inscription>}></Route>
      <Route path="/films/:id" element={<FilmDetails></FilmDetails>}></Route>
      <Route path="/films/edit/:id" element={<EditFilm></EditFilm>}></Route>
    </Routes>
  );
}

export default App;
