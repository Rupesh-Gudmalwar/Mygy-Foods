// import "../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <div className="logo">
          <a href="/">Mygy</a>
        </div>
        <ul>
          <li>
            <a href="/Offers">Offers</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/SignUp">SignUp</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
