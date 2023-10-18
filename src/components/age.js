import { Component } from "react";
import "./style.css";
import img0to5 from "./images0to5.jpg";
import img5to10 from "./images5to10.jpg";
import img10to20 from "./images10to20.jpg";
import img20to50 from "./images20to50.jpg";
import img50to70 from "./images50to70.jpg";
import img70to100 from "./images70to100.jpg";
import img100to150 from "./images100to150.jpg";
import imgInfinity from "./imagesinfinity.jpg";

export class Age extends Component {
  constructor(props) {
    super(props);
    this.state = { age: null };
  }

  handleClick = () => {
    const d = document.getElementById("date").value;
    let today=new Date();
      const currYear=today.getFullYear();
      const currdate=today.getDate();
      const currMonth=today.getMonth()+1;
      const arr=d.split("-");
      const year=arr[0];
      const mont=arr[1];
      const date=arr[2];
      let dob=(365*(currYear-year)+30*(currMonth-mont)+(currdate-date))/365;
 
    
    let image;
    if (dob >= 0 && dob <= 5) {
      image = img0to5;
    } else if (dob > 5 && dob <= 10) {
      image = img5to10;
    } else if (dob > 10 && dob <= 20) {
      image = img10to20;
    } else if (dob > 20 && dob <= 50) {
      image = img20to50;
    } else if (dob > 50 && dob <= 70) {
      image = img50to70;
    } else if (dob > 70 && dob <= 100) {
      image = img70to100;
    } else if (dob > 100 && dob <= 150) {
      image = img100to150;
    } else {
      image = imgInfinity;
    }

    if (dob < 0) {
      this.setState({
        age: "Please enter a valid date of birth",
        image: null,
      });
    } else {
      this.setState({
        age: "You are " + parseInt(dob) + " Years old",
        image: image,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input type="date" id="date"></input>
        <br />
        <button onClick={this.handleClick} id="b1">
          Calculate Age
        </button>
        <h3>{this.state.age}</h3>
        {this.state.image && <img src={this.state.image} alt="Age Image" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
      </div>
    );
  }
}
