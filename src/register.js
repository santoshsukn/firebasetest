import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup  from 'yup';
import axios from 'axios';
import { createStore,applyMiddleware } from 'redux';
import { Button} from 'react-bootstrap';
window.$user = false
export default class Register extends React.Component {
    constructor(props){
        super(props);
        let user = false;
        this.state = {
            allUserData : ''
        }
}

    componentDidMount() {
        //https://heroku-node-tests.herokuapp.com/login
        //heroku node URL https://heroku-node-tests.herokuapp.com/
        axios.get('http://localhost:4000/userData')
            .then(response => {
                this.setState({
                    allUserData : response.data
                })
                console.log(this.state.allUserData)
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
    userNameCheck = (userData) =>{
        if(this.state.allUserData){
            this.state.allUserData.forEach(function(element){
                if(element.userName == userData.userName){
                    alert('User name already exist,please use different username');
                    // this.setState({
                        window.$user = true
                    //})
                } 
            });
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                <h1>Register Yourself</h1>
                <hr/>
                <Formik initialValues = {{
                                            fname:'', 
                                            address:'',
                                            // lname:'',
                                            // DOB:'',
                                            // email:'',
                                            // role:'',
                                            // mobile:'',
                                            // fatherName:'',
                                            // userName:'',
                                            // password:'',
                                            // cpassword:''
                                        }}
                            validationSchema={
                                Yup.object().shape({
                                    fname: Yup.string().required('name is required'),
                                    address: Yup.string().required('Address is Required'),
                                    // email:Yup.string().email('please enter a valid email').required('Please enter an email'),
                                    // role:Yup.string().required('Please select User Type'),
                                    // mobile: Yup.string().max(10).min(10).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Please enter a valid mobile number"),
                                    // userName: Yup.string().min(8).required('user name is required'),
                                    // password: Yup.string().required('No password provided.') 
                                    //         .min(8, 'Password is too short - should be 8 chars minimum.')
                                    //         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                                    // cpassword: Yup.string().required('Please fill your password match').test('passwords-match', 'Passwords must match', function(value) {
                                    //                 return this.parent.password === value;
                                    //             })
                                })
                            }
                            onSubmit = {data =>{
                                console.log(data);
                                    const userData = {
                                            student_name : data.fname,
                                            student_address  : data.address
                                            // lname : data.lname,
                                            // DOB : '',
                                            // email : data.email,
                                            // mobile : data.mobile,
                                            // role : data.role,
                                            // fatherName : '',
                                            // userName : data.userName,
                                            // password : data.password
                                        };
                                        
                                        //this.userNameCheck(userData);
                                        debugger;
                                        console.log(userData)
                                        if(window.$user != true){
                                            axios.post('http://localhost:4000/register', userData).then(res => console.log(res)).catch(function (error){
                                                console.log(error);
                                            });
                                            setTimeout(()=>{
                                                this.props.history.push('/');
                                            },500)
                                        }
                                        
                                        
                            }}
            >{({errors, values, handleChange,touched,isSubmitting, handleBlur}) =>(
                <Form>
                    {/* <div className="form-group"> 
                    <div className="img-wrapper">
                        <UserAvatar userId={ currentUser._id } imageId={ currentUser.profile.picture } size="small" fSize="small" shape="circle" />
                            <input type="file" name="avatar" onChange={ this.uploadFile } ref="imageInput" accept="image/png, image/jpeg"  multiple="false" />
                    </div>
                    </div> */}
                    <div className="form-group"> 
                        <label>Full Name: </label>
                        <Field  type="text"
                                className={'form-control' + (errors.fname && touched.fname ? ' is-invalid' : '')}
                                placeholder = 'First name'
                                name = 'fname'
                                onChange={handleChange}
                                />
                        <ErrorMessage name="fname" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label>Address : </label>
                        <Field  type="text" 
                                className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')}
                                placeholder = 'Last Name'
                                name = 'address'
                                onChange={handleChange}
                                />
                        
                        <ErrorMessage name="address" component="div" className="invalid-feedback" />
                    </div>
         
                    <div className="form-group">
                        <Button  type="submit" value="Register" className="btn btn-primary" >Register</Button>
                    </div>
                </Form>
            )}
                </Formik>
                </div>
                <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}