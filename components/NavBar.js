// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import logo from "../public/vercel.svg"

const navBar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image src={logo} width="100" alt="/"></Image>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b-2 border-indigo-500">
								Home
							</li>
						</Link>
						<Link href="/contact">
							<li className="ml-10 text-sm uppercase hover:border-b-2 border-indigo-500">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-300"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src={logo} width="100" alt="/"></Image>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className="py-4 flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/contact">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-blue-600">
								Let's Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default navBar
