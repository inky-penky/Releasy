import Image from "next/image"
import Logo from "@/public/vectors/images/logo-no-background 1.png"
import Email from "@/public/vectors/svg/material-symbols_mail-outline.svg"
import Location from "@/public/vectors/svg/mi_location.svg"
import {links, useCases, contactUs} from "@/app/components/data/footerLinks"
import Link from "next/link"






const Footer = () => {

  const socials = [
    {
      platform: "/vectors/svg/mdi_facebook.svg"
    },
    {
      platform: "/vectors/svg/uil_youtube.svg"
    },
    {
      platform: "/vectors/svg/basil_instagram-solid.svg"
    },
    {
      platform: "/vectors/svg/uil_twitter.svg"
    }
  ]

  return (
    <div className='flex flex-col lg:px-20 py-5 px-5'>
        <div className="flex flex-col lg:flex-row pb-10 justify-between gap-10">
          <div className="flex flex-col gap-5">
            <div className="w-[5rem] lg:w-[7rem]">
              <Image src={Logo} alt="logo" />
            </div>
            <p className="text-[0.7rem] lg:text-xs max-w-[18rem]">
            When you visit or interact with our sites, 
            services or tools, we or our authorized service 
            providers may use cookies for storing information 
            to help provide you with a better, faster and safer 
            experience and for marketing purposes.
            </p>
            <div className="gap-2 flex flex-col">
              <div className="flex items-center gap-2">
                <Image src={Email} alt="email_icon" width={15} />
                <p className="text-[0.6rem] text-gray-500">support@releasyapp.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Location} alt="location_icon" width={15} />
                <p className="text-[0.5rem] text-gray-500">33024 US Highway 19 North, Palm Harbor, FL. US 34684</p>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex flex-col gap-5">
              <h2 className="font-medium text-sm">Company</h2>
              <div className="text-xs flex flex-col gap-2 lg:gap-4">
                {links.map((link, index) => (
                  <Link href={link.link} key={index}>{link.text}</Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-medium text-sm">Releasy For</h2>
              <div className="text-xs flex flex-col gap-2 lg:gap-4">
                {useCases.map((link, index) => (
                  <Link href={link.link} key={index}>{link.text}</Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-medium text-sm">Contact Us</h2>
              <div className="text-xs flex flex-col gap-2 lg:gap-4">
                {contactUs.map((link, index) => (
                  <Link href={link.link} key={index}>{link.text}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-5 flex-col-reverse lg:flex-row gap-5">
          <div className="">
            <p className="text-[0.6rem]">© Releasy Corp. All rights reserved</p>
          </div>
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <a href="" className="" key={index}>
                <Image src={social.platform} width={20} height={10} alt="socials" />
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer