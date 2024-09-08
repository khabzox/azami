import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-between items-center max-w-7xl mx-auto py-4 px-8">
            <Image
                src="/header-logo.png"
                alt="logo"
                width={100}
                height={50}
            />
            <nav className="flex items-end space-x-8 font-medium text-text">
                <Link href="#"><h3 className="text-gray-800">Home</h3></Link>
                <Link href="#"><h3 className="text-gray-800">About Us</h3></Link>
                <Link href="#"><h3 className="text-gray-800">Services</h3></Link>
                <Link href="#"><h3 className="text-gray-800">Projects</h3></Link>
                <Link href="#"><h3 className="text-gray-800">Contact Us</h3></Link>
            </nav>
            <Button className="bg-primary text-white px-5 py-3 rounded-md">Get in Touch</Button>
        </header>
    );
}
