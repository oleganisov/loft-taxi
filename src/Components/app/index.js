import React from 'react';
import Map from '../map';
import Profile from '../profile';
import Login from '../login';
import Signup from '../signup';

class App extends React.Component {
    state = { navigation: 'profile' };
    handlerMenu = (e) => {
        e.preventDefault();
        if (e.target) {
            let link = e.target.getAttribute('href');
            this.setState({ navigation: link });
        }
    };
    // handlerLogin = (e) => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     this.setState({ navigation: 'profile' });
    // };
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
            return (
                <Login
                    // handlerLogin={this.handlerLogin}
                    handlerSignupLink={this.handlerSignupLink}
                />
            );
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
