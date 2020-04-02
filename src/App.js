import React from 'react';
import Layout from './Components/layout';
import Map from './Components/map';
import Profile from './Components/profile';
import LoginForm from './Components/login';
import SignupForm from './Components/signup';

class App extends React.Component {
    state = { navigation: 'login' };
    handlerMenu = e => {
        e.preventDefault();
        if (e.target) {
            let link = e.target.getAttribute('href');
            link === 'login'
                ? this.setState({ navigation: link, auth: false })
                : this.setState({ navigation: link });
        }
    };
    handlerLogin = e => {
        e.preventDefault();
        this.setState({ navigation: 'map' });
    };
    handlerLoginLink = e => {
        e.preventDefault();
        this.setState({ navigation: 'login' });
    };
    handlerSignup = e => {
        e.preventDefault();
        this.setState({ navigation: 'map' });
    };
    handlerSignupLink = e => {
        e.preventDefault();
        this.setState({ navigation: 'signup' });
    };

    render() {
        const { navigation } = this.state;

        if (navigation === 'login')
            return (
                <LoginForm
                    handlerLogin={this.handlerLogin}
                    handlerSignupLink={this.handlerSignupLink}
                />
            );
        else if (navigation === 'signup')
            return (
                <SignupForm
                    handlerSignup={this.handlerSignup}
                    handlerLoginLink={this.handlerLoginLink}
                />
            );
        else if (navigation === 'map')
            return (
                <Layout handlerMenu={this.handlerMenu}>
                    <Map />
                </Layout>
            );
        else if (navigation === 'profile')
            return (
                <Layout handlerMenu={this.handlerMenu}>
                    <Profile />
                </Layout>
            );
    }
}

export default App;
