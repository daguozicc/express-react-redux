import React from 'react';
import {
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from "./Auth.redux";
import App from './App';
function Erying(){
    return <h2>二营部</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}
@connect(
    state=>state.auth,
    { logout }
)
class Dashboard extends  React.Component{

    render(){

        const redirecTologin = <Redirect to='/login'></Redirect>;
        const app = (
            <div>
                <h1>
                    {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
                </h1>
                <ul>
                    <li><Link to='/dashboard/'>一营</Link></li>
                    <li><Link to='/dashboard/erying'>二营</Link></li>
                    <li><Link to='/dashboard/qibianlian'>骑兵连</Link></li>
                </ul>
                <Route path='/dashboard/'  excat component={App}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/qibianlian' component={Qibinglian}></Route>
            </div>
        );
        return(
        this.props.isAuth?app:redirecTologin
        )
    }
}
export default Dashboard;