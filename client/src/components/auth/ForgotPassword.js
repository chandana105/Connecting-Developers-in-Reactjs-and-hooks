import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgot } from '../../actions/auth';
import loginimg from './img-01.png';

const Forgot = ({ forgot }) => {
  const [formData, setFormData] = useState({
    email: '',
    // password: '',
  });

  //  pull from formdata
  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    forgot(email);
  };

  // // Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }

  return (
    <Fragment>
      <div className='login-100'>
        <div className='wrap login-100'>
          <div className='login-pic'>
            <img src={loginimg} alt='IMG' />
          </div>

          <form className='form login-form' onSubmit={(e) => onSubmit(e)}>
            <p className='  login-form-title text-primary'>
              <i className='fas fa-user'></i> Forgot Password
            </p>
            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <input
              type='submit'
              className='btn btn-primary container-login100-form-btn login100-form-btn'
              value='Send it'
            />

             <p className='text-center p-t-136'>
              <Link to='/login'>Back to Login</Link>
            </p> 
{/* 
            <p className='text-center p-t-136'>
              Don't have an account?
              <Link to='/register'>
                Sign Up
                <i
                  className='fa fa-long-arrow-right m-l-5'
                  aria-hidden='true'
                ></i>
              </Link>
            </p>  */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Forgot.propTypes = {
  forgot: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool,
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

export default connect(null, { forgot })(Forgot);
