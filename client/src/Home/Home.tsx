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

  getBlueLagoonBio(): JSX.Element {
    return (
      <div>
        <h1>Blue Lagoon</h1>
        <p>Blue Lagoon is a website I created to combine my curiosity with my software engineering skills. On the front end, you will find stories that I have written with a computer science focus.
          On the back end (see <a href="https://github.com/Bepen/BlueLagoon">GitHub</a>), you will find my source code which you'll see is ridiculously over the top for a simple blog site. Enjoy!
        </p>
      </div>
    );
  }

  render() {
    const label: JSX.Element = this.getFullNameGreeting();
    const photo: JSX.Element = this.getImageElement();
    const bio: JSX.Element = this.getBlueLagoonBio();
    return (
      <React.Fragment>
        {photo}
        {label}
        {bio}
      </React.Fragment>
    );
  }
}