import React from 'react'

const Signin = () => {
    return (
        <div>
        <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-form">
                            <form action="" method="post">
                                <div class="form-group">
                                    <label>User</label>
                                    <input class="au-input au-input--full" type="email" name="email" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" name="password" placeholder="Password"/>
                                </div>
                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                            </form>
                            <div class="register-link">
                                <p>
                                    User
                                    <a href="!#">guest</a>
                                </p>
                                <p>
                                    Password
                                    <a href="!#">guest</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
}

export default Signin
