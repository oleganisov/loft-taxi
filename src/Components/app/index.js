import React from 'react';
import Map from '../map';
import Profile from '../profile';
import Login from '../login';
import Signup from '../signup';

class App extends React.Component {
    state = { navigation: 'login' };
    handlerMenu = (e) => {
        e.preventDefault();
        if (e.target) {
            let link = e.target.getAttribute('href');
            this.setState({ navigation: link });
        }
    };
    handlerLoginLink = (e) => {
        e.preventDefault();
        this.setState({ navigation: 'login' });
    };
    handlerSignup = (e) => {
        e.preventDefault();
        this.setState({ navigation: 'map' });
    };
    handlerSignupLink = (e) => {
        e.preventDefault();
        this.setState({ navigation: 'signup' });
    };

    render() {
        const { navigation } = this.state;

        if (navigation === 'login')
            return <Login handlerSignupLink={this.handlerSignupLink} />;
        else if (navigation === 'signup')
            return (
                <Signup
                    handlerSignup={this.handlerSignup}
                    handlerLoginLink={this.handlerLoginLink}
                />
            );
        else if (navigation === 'map') return <Map />;
        else if (navigation === 'profile') return <Profile />;
    }
}

export default App;
