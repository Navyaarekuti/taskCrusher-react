import * as React from 'react';
import '../styles/login.css';
import classNames from 'classnames';
import { request, setAuthToken } from '../axios_helper';

export default class parentLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "parentLogin",
            username: "",
            password: "",
            onParentLogin: props.onParentLogin,
        }
    }

    /* This method: store in the state the updated values of the fields */
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    onParentLogin = (e, username, password) => {
        e.preventDefault();
        request("POST",
            "/api/parent-dash",
            {
                username: username,
                password: password
            }
        ).then((response) => {
            this.setState({ componentToShow: "parentDash" })
            setAuthToken(response.data.token)
        }).catch((error) => {
            this.setState({ componentToShow: "parentLogin" })
        })
    }

    onSumbitParentLogin = (e) => {
        this.state.onParentLogin(
            e,
            this.state.username,
            this.state.password
        )
    }

    render() {
        return (
            <div className='body'>
                <header className='header-body'>
                    <a href='/'>
                        <img src={require('../images/TC-sm-logo.png')} alt='Small Task Crusher Logo' className='header-logo' />
                    </a>
                </header>
                <div className={classNames("tab-pane", "fade", this.state.active === 'parentLogin' ? 'show active' : '')} id='pills-register'>
                    <form className='login-form' onSubmit={this.onSumbitParentLogin}>
                        <div className=''>
                            <div className='jumbotron jumbotron'>
                                <div className='container'>
                                    <h1 className='row justify-content-center display-4 welcome-message'>Welcome Back!</h1>
                                    {/* <p className='row justify-content-center lead message'>Create an account with us!</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='form-outline mb-4'>
                            <input type="text input-lg" id='username' name='username' className='form-control' onChange={this.onChangeHandler} />
                            <label className='form-label' htmlFor='username'>Username</label>
                        </div>

                        <div className='form-outline mb-4'>
                            <input type='password' id='password' name='password' className='form-control' onChange={this.onChangeHandler} />
                            <label className='form-label' htmlFor='password'>Password</label>
                        </div>
                        <div>
                            <a href='./parentDash' className='row justify-content-center'>
                                <button className='btn btn-primary register-btn' type='submit'>Sign In</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}