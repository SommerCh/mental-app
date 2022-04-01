import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

export default function Header() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1} - ${current.getFullYear()}`;

  return (
    <header className="header">
      <div className="homeicon">
        <FaChevronCircleLeft />
      </div>
      <p>I dag {date}</p>

      <div className="homeicon">
        <FaChevronCircleRight />
      </div>
    </header>
  );
}
