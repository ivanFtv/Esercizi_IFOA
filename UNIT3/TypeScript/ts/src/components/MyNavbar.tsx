import Navbar from 'react-bootstrap/Navbar';
import { FC } from 'react';

type MyNavbarProps = {
    link1: string;
    link2: string;
    link3?: string;
}

const MyNavbar: FC<MyNavbarProps> = ({ link1, link2, link3 }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={link1}>Navbar</Navbar.Brand>
            <Navbar.Brand href={link2}>Navbar</Navbar.Brand>
            <Navbar.Brand href={link3}>Navbar</Navbar.Brand>
        </Navbar>
    );
}


export default MyNavbar;