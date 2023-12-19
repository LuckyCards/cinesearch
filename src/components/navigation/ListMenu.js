import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function ListMenu({ children, to }) {
  const [isSelected, setIsSelected] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSelected(to === location.pathname);
  }, [location]);

  return (
    <li className={isSelected ? style.selected : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
