import React from 'react';
import { PageBanner,LoginForm}  from '../layouts/login/index';
import Layout from '../../common/Layout';

const Login = () =>{
    return (
        <div className="">       
            <Layout>       
                    <PageBanner
                        title="Login"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Login Form"
                        />
                    <LoginForm />
            </Layout>
        </div>
    );
}

export default Login;