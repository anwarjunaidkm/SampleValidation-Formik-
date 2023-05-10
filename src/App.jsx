import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';



function App() {


  // --------manual fromik validation-----------

  // const validate = values =>{
  //   const errors={};

  //   if(!values.firstname){
  //     errors.firstname ="required"
  //   }else if(values.firstname.length > 15){
  //     errors.firstname ="must be 15 characters or less"
  //   }
  //   if (!values.lastname){
  //     errors.lastname ="required"
  //   }else if (values.lastname.length >20){
  //     errors.lastname ="must be 20 characters or less"
  //   }
  //   if (!values.email){
  //     errors.email = "required"
  //   }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  //   if(!values.password){
  //     errors.password ="required"
  //   }else if(values.password.length < 6){
  //     errors.password ="must 6 characteerrrrr"
  //   }





  //   return errors;
  // }

  //<<<---------end-------------------------------->>

 
  const formik =useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
    },
    
    validationSchema:Yup.object({
      firstname:Yup.string()
      .max(15,"Must be 15 characters or less")
      .required('required'),
      lastname:Yup.string()
      .max(20,'Must be 15 characters or less')
      .required("required"),
      email:Yup.string()
      .email("'Invalid email address'")
      .required("required"),
      password:Yup.string()
      .required("required")
      .min(6,"must 6 charactorr")



    }),
    onSubmit:values =>{
      console.log({values});
      
     
    }
  })

 
  return (
    <>
    
      <form action="" onSubmit={formik.handleSubmit} >
        <h1 className='flex justify-center text-2xl font-bold text-slate-900'>formik</h1>
       <div className='flex flex-col m-auto items-center   ' >
        <input className='bg-slate-600 rounded p-1 m-2 ' type="text" placeholder='FirstName'name='firstname' onChange={formik.handleChange} value={formik.values.firstname}onBlur={formik.handleBlur} />
        {formik.touched.firstname && formik.errors.firstname ? (
         <div className='font-thin text-red-600'  >{formik.errors.firstname}</div>
       ) : null}

        <input className='bg-slate-600 rounded p-1 m-2 ' type="text" placeholder='LastName'name='lastname' onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
        {formik.touched.lastname && formik.errors.lastname ? (
         <div className='font-thin text-red-600'  >{formik.errors.lastname}</div>
       ) : null}

        <input className='bg-slate-600 rounded p-1 m-2 ' type="email" placeholder='Email'name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (
         <div className='font-thin text-red-600' >{formik.errors.email}</div>
       ) : null}

        <input className='bg-slate-600 rounded p-1 m-2 ' type="password" placeholder='Password'name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
        {formik.touched.password && formik.errors.password ? (
         <div className='font-thin text-red-600' >{formik.errors.password}</div>
       ) : null}
        <button type='sumbit' className='bg-slate-600 hover:bg-slate-400 px-4 rounded text-white p-1 text-sm'>submit</button>
       <p>
       

        </p> 
      
        
       </div>
      
        
        
       

     
      </form>  
     

   
        
    </>
  )
}

export default App
