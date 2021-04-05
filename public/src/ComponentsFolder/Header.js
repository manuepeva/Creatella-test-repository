const e = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      data: [],
    };
  }

  render() {
    return (
      <div>
        <div class="brand">
          <button class="">&#9776;</button>
          <a href="index.html">Creatella E-Commerce</a>
        </div>
        <div class="header-links">
          <a href="cart.html">Cart</a>
        </div>
      </div>
    );
  }
}

const container = document.querySelector(".header");
ReactDOM.render(e(Header), container);
