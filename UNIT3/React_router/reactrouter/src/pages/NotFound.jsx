import Header from "../components/Header";
import Nf from "../components/404";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [])

    return (
        <div>
            <Nf />
        </div>
    )
}


export default NotFound