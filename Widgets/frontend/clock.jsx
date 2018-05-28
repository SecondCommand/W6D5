import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Clock",
      time: new Date().getHours().toString() +":"+ new Date().getMinutes().toString() +":"+ new Date().getSeconds().toString(),
      date: new Date().toString().split(" ").slice(0, 4).join(" "),
      one: "I'm tabe one",
      two: "I'm tab two",
      three: "I'm tab three",
      currentTab: "one"
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  //

  tick() {
    this.setState({time: new Date().getHours().toString() +":"+ new Date().getMinutes().toString() +":"+ new Date().getSeconds().toString()
    });

  }

  click(tab) {
    return  () => this.setState({ currentTab: tab });
  }


  render() {
    return (
      <section className="clock-section">
        <div className="center">
          <h1 className="dont-center">{this.state.title}</h1>
          <div className="flex-clock"> 
            <ul>
              <li><h1 className="clock clock-color">Time:</h1></li>
              <li><h1 className="clock clock-color">Date:</h1></li>
            </ul>
            <ul>
              <li><h1 className="clock clock-color">{this.state.time}</h1></li>
              <li><h1 className="clock clock-color">{this.state.date}</h1></li>
            </ul>
          </div>
        </div>
        <div className="tabs">
          <h1 className="flex-tab">Tabs</h1>
          <section className="tabs-section">
            <ul className="tabs-ul">
              <li ><button className="tab-buttons" id={this.state.currentTab === "one" ? "selected" : ""} onClick={this.click("one")}>one</button></li>
              <li ><button className="tab-buttons" id={this.state.currentTab === "two" ? "selected" : ""} onClick={this.click("two")}>two</button></li>
              <li ><button className="tab-buttons" id={this.state.currentTab === "three" ? "selected" : ""} onClick={this.click("three")}>three</button></li>
            </ul>
            <div className="paragraph-div">
              <p className="paragraphcenterplease">{this.state[this.state.currentTab]}
              </p>
            </div>
        </section>
        </div>
    </section>
    );

  }

}

export default Clock;
