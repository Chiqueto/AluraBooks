import { IoMenu } from "react-icons/io5";
import './navbar.css';

export default function Navbar() {

    return (
        <nav>
            <div className="logo">
                <IoMenu size={48} color="#002F52" className="menu" />
                <img src="/logo.svg" alt="AluraBooks Logo" width={'40px'} height={'40px'} />
                <h1>Alura<span>Books</span></h1>
            </div>
            <div className='container'>
                <div className='link'><a href="#">CATEGORIAS</a></div>
                <div className='login'><a href="#"><img src='/profile.svg' alt='Login' />Login</a></div>
            </div>
        </nav>
    );
}