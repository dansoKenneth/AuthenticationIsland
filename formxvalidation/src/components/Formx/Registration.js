import { Avatar, ButtonForm, colors, ExtraText, StyledFormArea, StyledTitle, TextLink } from "./styled"
import Logo from '../../assets/keep_moving.jpeg'
import {Formik,Form} from 'formik';
import { TextInput } from "./FormLib";
import {FiMail,FiLock, FiUser, FiCalendar} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';

function SignUp() {
  return (
       <div>
        <StyledFormArea>
           <Avatar image={Logo}/>
           <StyledTitle color={colors.theme}>Member Login</StyledTitle>
               <Formik
                 initialValues={{
                    email:"",
                    password:"",
                    repeatPassword:"",
                    name:"",
                    dateOfBirth:"",
                 }}
                 onSubmit={(values,{setSubmitting})=>{
                    console.log(values)
                 }}

                 validationSchema={
                    Yup.object({
                        email:Yup.string().email("Invalid email address")
                        .required("Required"),
                        password:Yup.string().min(8,"password is too short")
                        .max(30,"password is too long")
                        .required("Required"),
                        dateOfBirth:Yup.date().required("Required"),
                        repeatPassword:Yup.string().required("Required").oneOf([Yup.ref("password")],"password must match")
                    })
                 }
               >
                {()=>(
                    <Form>
                        <TextInput
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="highest"
                        icon={<FiUser/>}
                        />

                        <TextInput
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="@gmail.com"
                        icon={<FiMail/>}
                        />

                      <TextInput
                        name="dateofBirth"
                        type="date"
                        label="Date of Birth"
                        icon={<FiCalendar/>}
                        />

                        <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="***************"
                        icon={<FiLock/>}
                        />

                       <TextInput
                        name="repeatPassword"
                        type="password"
                        label="Repeat Password"
                        placeholder="***************"
                        icon={<FiLock/>}
                        />

                         

                      <ButtonForm>Login</ButtonForm>


                     <ExtraText>
                        New here? <Link to="/"><TextLink>Signup</TextLink></Link>
                     </ExtraText>
                    </Form>
                )}
               </Formik>
        </StyledFormArea>
   
        </div>
  )
}

export default SignUp