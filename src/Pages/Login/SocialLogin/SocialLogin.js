import React from 'react';
import facebook from '../../../images/social/facebook logo.png';
import github from '../../../images/social/github logo.png';
import google from '../../../images/social/google logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate =useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
      errorElement=<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
           
    }

    if(user || user1){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                onClick={()=>signInWithGoogle()}
                className='btn btn-outline-dark d-block mx-auto w-50 my-2'>
                    <img className='' src={google} alt="" />
                    <span className='px-2'>Sign up with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;


