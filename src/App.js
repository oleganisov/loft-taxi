import React from 'react';
import Layout from './Components/layout';
import Map from './Components/map';
import Profile from './Components/profile';
import LoginForm from './Components/login';

class App extends React.Component {
    state = { navigation: '', auth: false };
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
        this.setState({ navigation: 'map', auth: true });
    };
    handlerLoginLink = e => {
        e.preventDefault();
        this.setState({ navigation: 'login' });
    };
    handlerSignup = e => {
        e.preventDefault();
        this.setState({ navigation: 'map', auth: true });
    };
    handlerSignupLink = e => {
        e.preventDefault();
        this.setState({ navigation: 'signup' });
    };

    render() {
        const { navigation, auth } = this.state;

        if (!auth)
            return (
                <LoginForm
                    navigation={navigation}
                    handlerLogin={this.handlerLogin}
                    handlerSignup={this.handlerSignup}
                    handlerLoginLink={this.handlerLoginLink}
                    handlerSignupLink={this.handlerSignupLink}
                />
            );

        return (
            <div className="App">
                <Layout handlerMenu={this.handlerMenu}>
                    <Map navigation={navigation} />
                    <Profile navigation={navigation} />
                </Layout>
            </div>
        );
    }
}

export default App;
