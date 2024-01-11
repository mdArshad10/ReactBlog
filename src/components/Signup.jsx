import {useForm} from 'react-hook-form'
import authServices from '../appwrite/auth.services'
import {useState} from 'react'
import {Button, Input, Logo} from './index'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Signup = () =>{
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    
    return(<>
    
    </>)
}

export default Signup;