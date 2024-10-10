import React from 'react'
import {Form,Input} from 'antd';
import {Link} from 'react-router-dom'
export const Login = () => {
    const onfinishhandler=(value)=>{
        console.log(value);
    }

  return (
  <>
   <div className='flex justify-center items-center p-5 h-full '>
   <div className=" form_container p-5 w-1/4 items-center justify-center border-2 border-solid">
    <h1 className='text-zinc-950 text-center'>Login</h1>
   <Form layout="vertical" onFinish={onfinishhandler}>
    

    <Form.Item label="Email" name="email">
        <Input type="email" required />
    </Form.Item>

    <Form.Item label="Password" name="password">
        <Input type="password" required />
    </Form.Item>
    <Link to="/register" className="m-5"> Register here</Link>

    <button type='submit' className='bg-blue-500'>Login</button>
   </Form>
   </div>
   </div>
  
  </>
  )
}
