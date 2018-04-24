import React from 'react';
import { connect } from 'react-redux';
import { login,getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';

//合并reducers
@connect(
    state=>state.auth,
    {login,getUserData}
)
class Auth extends  React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:{}
    //     }
    // }
    componentDidMount(){
        this.props.getUserData()
    }
    render(){
        return(
            <div>
                <h2>我的名字{this.props.user}</h2>
                {this.props.isAuth?<Redirect to='./dashboard'/>:null}
                <h2>没有权限</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
export default Auth;