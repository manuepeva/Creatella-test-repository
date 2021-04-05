var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Products = function (_React$Component) {
  _inherits(Products, _React$Component);

  function Products(props) {
    _classCallCheck(this, Products);

    var _this = _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).call(this, props));

    _this.state = {
      liked: false,
      data: []
    };
    return _this;
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      // if (this.state.liked) {
      //   return "You liked this.";
      // document.write(`<img class="ad" src="/ads/?r='+Math.floor(Math.random() * 1000) +'"`/>
      // ' );
      // let info; const products =
      // fetch("http://localhost:3000/products") .then((res) => res.json())
      // .then((data) => (info = data));
      // }
      var info = fetch("http://localhost:3000/products").then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      });
      console.log(this.state.data);
      // const getData = async () => {
      //   const data = await axios.get("http://localhost:3000/products");
      //   console.log(data);
      // };
      // getData();

      return React.createElement(
        "div",
        null,
        React.createElement(
          "main",
          null,
          React.createElement(
            "ul",
            { className: "products" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "div",
                { className: "product" },
                "info"
              )
            )
          )
        ),
        React.createElement(
          "p",
          null,
          "But first, a word from our sponsors:"
        )
      );
    }
  }]);

  return Products;
}(React.Component);

var domContainer = document.querySelector(".main");
ReactDOM.render(e(Products), domContainer);