const e = React.createElement;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      data: [],
    };
  }

  render() {
    // if (this.state.liked) {
    //   return "You liked this.";
    // document.write(`<img class="ad" src="/ads/?r='+Math.floor(Math.random() * 1000) +'"`/>
    // ' );
    // let info; const products =
    // fetch("http://localhost:3000/products") .then((res) => res.json())
    // .then((data) => (info = data));
    // }
    let info = fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(this.state.data);
    // const getData = async () => {
    //   const data = await axios.get("http://localhost:3000/products");
    //   console.log(data);
    // };
    // getData();

    return (
      <div>
        <main>
          <ul className="products">
            <li>
              <div className="product">info</div>
            </li>
          </ul>
        </main>
        <p>But first, a word from our sponsors:</p>
      </div>
    );
  }
}
const domContainer = document.querySelector(".main");
ReactDOM.render(e(Products), domContainer);
