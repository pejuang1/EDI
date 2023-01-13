import React, { useState } from 'react';
import { css } from 'aphrodite'
import { Loader } from 'rsuite';

import { styles } from './style';

import { login, register } from './action';
import { encryptStorage } from '../GlobalFunction';

const LoginScreen = () => {

    const [loading, setLoading] = useState(false)
    const [dataUser, setDataUser] = useState({
        username: '',
        password: ''
    })

    const handleOnSubmit = async(e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const data = {
                username: dataUser.username,
                password: dataUser.password
            }
            const result = await register(data)
            if(result.status == 200 && result.data.status == 1){
                handleLogin(data)
            }else{
                handleLogin(data)
            }
        } catch (error) {
            console.log('handleOnSubmit', error.response);
        }
    }

    const handleLogin = async(data) => {
        try {
            const result = await login(data)
            if(result.status == 200){
                setLoading(false)
                encryptStorage.setItem('userToken', result.data.data)
                window.location.reload()
            }
        } catch (error) {
            console.log('handleLogin', error.response);
        }
    }

    return (
        <div className={css(styles.container)}>
            <div className={css(styles.containerLogin)}>
                <h1 className={css(styles.loginTitle)}>Login</h1>
                    <form onSubmit={handleOnSubmit}>
                        <div className={css(styles.containerInput)}>
                            <input 
                                className={css(styles.input)} 
                                type='text' onChange={(e) => setDataUser({...dataUser, username: e.target.value})} 
                                placeholder='Username'
                            />
                            <input 
                                className={css(styles.input)} 
                                type='password'onChange={(e) => setDataUser({...dataUser, password: e.target.value})}
                                placeholder='Password'
                            />
                            <button className={css(styles.button)} type='submit'>{loading ? <Loader/> : 'Login'}</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default LoginScreen;