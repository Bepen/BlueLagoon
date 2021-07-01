import React from 'react';
import './Home.css';
import selfie from '../images/placeholder.jpg'

export default class Home extends React.Component {

  firstName: string = "Bepen";
  lastName: string = "Neupane";


  getFullNameGreeting(): JSX.Element {
    const fullName = `${this.firstName} ${this.lastName}`
    return (
      <div className="Home">
        Hello, world! My name is {fullName}.
      </div>
    );
  }

  getImageElement(): JSX.Element {
    return <img src={selfie} alt="Selfie" />;
  }

  render() {
    const label: JSX.Element = this.getFullNameGreeting();
    const photo: JSX.Element = this.getImageElement();
    return (
      <React.Fragment>
        {photo}
        {label}
      </React.Fragment>
    );
  }
}