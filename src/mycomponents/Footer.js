import React from 'react';

const Footer = () => {
  let footerstyle = {
    position: "absolute",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace"
  }
  return (
    <footer  style={footerstyle}>
      <p>
      Copyright &copy: Mytodolist.com
      </p>
    </footer>
  );
}

export default Footer;
