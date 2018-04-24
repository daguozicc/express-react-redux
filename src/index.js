import React from 'react'
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Auth from './Auth';
import Dashboard from './Dashboard';
import './config';
import 'antd-mobile/dist/antd-mobile.css'
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():()=>{};
const store = createStore(reducers,compose(applyMiddleware(thunk),reduxDevtools));


console.log(store.getState());

    //登录
    //没有登录信息 统一跳转login
    //页面
    // 一营
    //二营
    //骑兵连
    ReactDOM.render(
        (<Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        {/*只渲染命中的第一个Route*/}
                        <Route path ='/login' exact component={Auth}></Route>
                        <Route path ='/Dashboard' component={Dashboard}></Route>
                        <Redirect to='/dashboard' ></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>),
        document.getElementById('root'));

