export default function validateLogin(values) {
    let errors = {};

    if (!values.email) {
        errors.email = "Email adress is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 3) {
        errors.password = "Password need to be more than 3 characthers"
    }


    return errors;
}