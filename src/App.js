import React from 'react';
import Layout from './Components/layout';
import Map from './Components/map';
import Profile from './Components/profile';
// import LoginForm from './Components/login';
import './App.css';

class App extends React.Component {
    state = { navigation: '' };
    handlerMenu = e => {
        e.preventDefault();
        if (e.target) {
            let link = e.target.getAttribute('href');
            this.setState({ navigation: link });
        }
    };

    render() {
        const { navigation } = this.state;

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
