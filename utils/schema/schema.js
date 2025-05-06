import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const LoginSchema = () => Yup.object().shape({
    email: Yup.string().email("Invalid email address format").required("Email is required"),
    password: Yup.string()
            .min(8, "Password must be 8 characters at minimum")
            .required("Password is required")
});


export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        //.min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
        .matches(/[a-z]/, 'at least one lowercase char, at least one uppercase char, at least 1 number')
        .matches(/[A-Z]/, 'at least one uppercase char, at least 1 number')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
        .min(8, 'at least 8 chars'),
    password_confirmation: Yup.string()
        .oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        ).required("Password confirmation is required"),
    // mobile: Yup.string()
    //     .required('Phone no. is required')
    //     .matches(phoneRegExp, 'Phone number is not valid'),
    // last_name: Yup.string()
    //     .required("Last name is required")
    //     .matches(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/, 'only alphabets allowed'),
    // first_name: Yup.string()
    //     .required("First name is required")
    //     .matches(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/, 'only alphabets allowed'),
});