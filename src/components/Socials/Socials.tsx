import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import "./socials.css";

function Socials() {
  return (
    <section className="socials">
      <p className="socials__text">Stay Connected</p>
      <div className="socials__item">
        <span className="socials__icon">
          <FacebookLogo size={26} color="#9eff00" weight="fill" />
        </span>
        <span className="socials__icon">
          <TwitterLogo size={26} color="#9eff00" weight="fill" />
        </span>
        <span className="socials__icon">
          <LinkedinLogo size={26} color="#9eff00" weight="fill" />
        </span>
      </div>
    </section>
  );
}

export default Socials;
