import { Link } from "react-router-dom";
import ListMenu from "./ListMenu.js";
import style from "./style.module.scss";

export default function Navigation() {
  const buttonPagesList = [
    {
      name: "Atores",
      path: "/atores",
      pos: "0",
      description: "Teste ATORES Teste",
    },
    {
      name: "Filmes",
      path: "/filmes",
      pos: "250",
      description: "Teste FILMES Teste",
    },
    {
      name: "Sobre",
      path: "/sobre",
      pos: "500",
      description: "Teste SOBRE Teste",
    },
  ];

  return (
    <div className={style.container}>
      
      <nav className={style.menu_aside}>
        <Link to={"/"}>
          <h1>Cine Search</h1>
        </Link>

        <ul className={style.list_button}>
          {buttonPagesList.map((e) => (
            <ListMenu to={e.path} key={e.path}>
              {e.name}
            </ListMenu>
          ))}
        </ul>
      </nav>
    </div>
  );
}
