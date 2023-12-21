import { Link } from "react-router-dom";
import ListMenu from "./ListMenu.js";
import style from "./style.module.scss";

export default function Navigation() {
  const buttonPagesList = [
    {
      name: "Atores",
      path: "/atores",
    },
    {
      name: "Filmes",
      path: "/filmes",
    },
    {
      name: "Sobre",
      path: "/sobre",
    },
  ];

  return (
    <div className={style.container}>
      
      <nav className={style.menu_aside}>
        <Link to={"/"}>
          <h1>CineSearch</h1>
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
