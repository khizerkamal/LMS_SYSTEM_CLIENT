import React, { useState, FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("*required"),
  password: Yup.string().required("*required").min(6),
});

const Login: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, values, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with ELearning</h1>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your email
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${errors.password && touched.password && "border-red-500"} ${
              styles.input
            }`}
          />
          {
            !show ? (
                <AiOutlineEyeInvisible 
                    className="absolute bottom-3 right-2 z-1 cursor-pointer"
                    size={20}
                    onClick={() => setShow(true)}
                />
            ) : (
                <AiOutlineEye 
                    className="absolute bottom-3 right-2 z-1 cursor-pointer"
                    size={20}
                    onClick={() => setShow(false)}
                />
            )
          }
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="sumit" value="Login" className={`${styles.button}`}/>
        </div>
        <br/>
        <h5></h5>
      </form>
    </div>
  );
};

export default Login;
