import React, { Component } from "react";

export class PortfolioPage extends Component {
  render() {
    const portfolioId = window.location.pathname.split("/").at(-1);
    return <div>PortfolioPage {portfolioId}</div>;
  }
}

export default PortfolioPage;
