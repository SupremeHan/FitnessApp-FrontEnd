import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import authService from "../../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div>
                The field is required!
            </div>
        )
    }
}

const UserLogin = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            authService.userLogin(email, password).then(
                () => {
                    props.history.push("/user/dashboard");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <Form onSubmit={handleLogin} ref={form}>
            <label htmlFor="email">Email</label>
            <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
            />
            <label htmlFor="password">Password</label>
            <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
            />

            <button disabled={loading}>
                {loading && (
                    <span>Login</span>
                )}
                <span>Login</span>
            </button>

            {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
    )

}

export default UserLogin;