import React from 'react';
import './Home.css';

export default class Home extends React.Component<{}, {selfie: any}> {

  constructor(props: any) {
    super(props);
    this.state = {
      selfie: undefined
    };
  }

  componentDidMount() {
    this.updateSelfie();
  }

  updateSelfie(): void {
    fetch('http://localhost:3001/fetchSelfie')
    .then((res: any) => {
      return res.blob();
    })
    .then((blob: any) => {
      let objectURL = URL.createObjectURL(blob);
      this.setState({selfie: objectURL});
    });
  }

  getFullNameGreeting(): JSX.Element {
    const fullName = "Bepen Neupane";
    return (
      <div className="Home">
        Hello, world! My name is {fullName}.
      </div>
    );
  }

  getImageElement(): JSX.Element {
    return <img src={this.state.selfie} alt="Selfie" />;
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