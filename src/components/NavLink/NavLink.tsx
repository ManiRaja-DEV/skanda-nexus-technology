import { Link, useRoute } from "wouter";

interface INavLink {
  to: string;
  name: string;
}

function NavLink({ to, name }: INavLink) {
  const [isActive] = useRoute(to);

  return (
    <Link to={to} className={`nav__link${isActive ? " nav__link_active" : ""}`}>
      {name}
    </Link>
  );
}

export default NavLink;
