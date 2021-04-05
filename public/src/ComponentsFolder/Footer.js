const e = React.createElement;
const setState = ReactDOM.setState;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      data: [],
    };
  }

  render() {
    return <div>Creatella</div>;
  }
}

const container = document.querySelector(".footer");
ReactDOM.render(e(Footer), container);
