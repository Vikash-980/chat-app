import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Login = () => {

    const navigate = useNavigate();
    const { setAuthUser } = useAuth();

    const [userInput, setUserInput] = useState({});
    const [loading, setLoading] = useState(false)

    const handelInput = (e) => {
        setUserInput({
            ...userInput, [e.target.id]: e.target.value
        })
    }
    console.log(userInput);

    const handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const login = await axios.post(`/api/auth/login`, userInput);
            const data = login.data;
            if (data.success === false) {
                setLoading(false)
                console.log(data.message);
            }
            toast.success(data.message)
            localStorage.setItem('chatapp', JSON.stringify(data));
            setAuthUser(data)
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        // Pehle jahan "bg-gray-400" tha, wahan "bg-red-500" aur styling classes modify ki hain.
        // Dono inputs mein "bg-white text-black" add kiya hai.
        // Button already dark tha, usme thoda adjust kiya hai.

        <div className='flex flex-col items-center justify-center mix-w-full mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg
                    bg-red-500 bg-clip-padding 
                    backderop-filter backdrop-blur-sm bg-opacity-70'> {/* Yahan changes hain (Tomato/Red and opacity) */}
                <h1 className='text-3xl font-bold text-center text-gray-100'>Login
                    <span className='text-black'> Chatters </span>
                </h1>
                <form onSubmit={handelSubmit} className='flex flex-col text-black'>
                    <div>
                        <label className='label p-2'>
                            <span className='font-bold text-black text-xl label-text'>Email :</span>
                        </label>
                        {/* Yahan add kiya gaya hai: bg-white text-black */}
                        <input
                            id='email'
                            type='email'
                            autoComplete="new-password"
                            onChange={handelInput}
                            placeholder='Enter your email'
                            required
                            className='bg-white text-black w-full input input-bordered h-10 placeholder:text-gray-500' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='font-bold text-black text-xl label-text'>Password :</span>
                        </label>
                        {/* Yahan add kiya gaya hai: bg-white text-black */}
                        <input
                            id='password'
                            type='password'
                            autoComplete="new-password"
                            onChange={handelInput}
                            placeholder='Enter your password'
                            required
                            className='bg-white text-black w-full input input-bordered h-10 placeholder:text-gray-500' />
                    </div>
                    {/* Button already dark hai, hover adjust kiya gaya hai */}
                    <button type='submit'
                        className='mt-6 self-center w-auto px-4 py-1.5 bg-black text-lg hover:bg-gray-800 text-white rounded-lg hover: scale-105 transition-all'>
                        {loading ? "loading.." : "Login"}
                    </button>
                </form>
                <div className='pt-4 text-center'>
                    <p className='text-sm font-semibold text-gray-900'>
                        Don't have an Acount? <Link to={'/register'}>
                            <span className='text-black font-bold underline cursor-pointer hover:text-green-950'>
                                Register Now!!
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login