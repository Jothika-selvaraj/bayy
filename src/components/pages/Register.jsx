import React from 'react';
import { PageBanner,RegisterForm}  from '../layouts/register/index';

import Layout from '../../common/Layout';

const Register = () => {
    return (
        <div className="">       
            <Layout>       
                <PageBanner
                    title="Register"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Sign up"
                    />
                <RegisterForm />
            </Layout>
        </div>
    );
}

export default Register;