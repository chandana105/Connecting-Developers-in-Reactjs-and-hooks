import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import loginimg from './img-01.png';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  //  pull from formdata
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords donot match', 'danger'); //pass this msg in actions msg then alerttype=danger
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if registered
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='login-100'>
        <div className='wrap login-100'>
          <div className='login-pic'>
            <img src={loginimg} alt='IMG' />
          </div>
       
          <form className='form  login-form' onSubmit={(e) => onSubmit(e)}>
            <p className='  login-form-title text-primary'>
              <i className='fas fa-user'></i> Sign Up
            </p>
            <div className='wrap-input100 input200'>
              <input
                className='input100'
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                // required
              />
              <small className='form-text '>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                // minLength='6'
              />
            </div>
            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
                // minLength='6'
              />
            </div>
            <input
              type='submit'
              className='btn btn-primary container-login100-form-btn login100-form-btn'
              value='Register'
            />
            <p className='text-center p-t-136'>
              Already have an account?
              <Link to='/login'>
                Sign In
                <i
                  className='fa fa-long-arrow-right m-l-5'
                  aria-hidden='true'
                ></i>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

