import { Component } from "react";
class Header extends Component {
  render() {
    return <h1>welcome iam {this.props.name1}</h1>;
  }
}

// above is class version of below Header

// function Header(props) {
//   return <h1>welcome iam {props.name1} </h1>;
// }

// below uses exporting another type of exporting
export function Footer() {
  return <h2>Hello iam Footer</h2>;
}

export default Header;
