import React, { useState } from 'react';
import './Login.css'
import logo from '../../images/logo.png'

function Login(props) {
  const [alert, setAlert] = useState(false)
  const handleClick = e => {
    setAlert(!alert)
    e.stopPropagation()
  }
  return (
    <div>
      <div className='login'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='login-form'>
          <form>
            <div className='form-group'>
              <input type='tel' maxlength='13' placeholder='手机号' />
            </div>
            <div className='form-group'>
              <input type='number' placeholder='验证码' />
            </div>
            <div className='submit' onClick={e=>handleClick(e)}>
              <span>登录</span>
            </div>
          </form>
        </div>
      </div>
      {alert && <div className='alert'>
        <div className='alert-wrap'>
          <div className='alert-content'>暂时无法登录</div>
          <div className='alert-ok' onClick={e=>handleClick(e)}>好</div>
        </div>
      </div>}
    </div>
  );
}

export default Login;