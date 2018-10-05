import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable'
import store  from './store/'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}/>
                            <Route path='/detail/:id' exact component={Detail}/>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
