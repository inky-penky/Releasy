import Image from "next/image"
import Logo from "@/public/vectors/images/logo-no-background 1.png"
import Link from "next/link"




type LinkItem ={
    text: string;
    link: string;
}

const Navbar = () => {

    const links: LinkItem[] = [
        {
            text: 'Features',
            link: '/features'
        },
        {
            text: 'Use Cases',
            link: '/usecases'
        },
        {
            text: 'Blog',
            link: '/blog'
        },
        {
            text: 'Pricing',
            link: '/pricing'
        },
        {
            text: 'Login',
            link: '/login'
        }
    ];

    return (
      <div className='flex justify-between lg:py-10 lg:px-20 items-center'>
          <div className="">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex items-center text-sm gap-10">
            <div className="flex gap-5">
                {links.map((item, index) => (
                    <Link href={item.link} key={index}>{item.text}</Link>
                ))}
            </div>
            <a className="bg-black p-3 rounded-lg text-white text-xs">Signup for Free</a>
          </div>
      </div>
    )
  }
  
  export default Navbar