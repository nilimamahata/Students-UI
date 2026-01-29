import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h3 className="header__title">Welcome Back Student</h3>
        <p className="header__subtitle">Let’s learn something new today</p>
      </div>

      <div className="header__right">
        <button className="header__btn">Select Course</button>
        <div className="header__avatar">👤</div>
      </div>
    </header>
  );
}
