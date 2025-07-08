import { playfair, poppins } from '@/config/fonts';
import Image from 'next/image';
import aboutUsBanner from '@/app/assests/images/dyning-area.jpg';
import React from 'react';

const about = () => {
    return (
        <div className={` ${poppins.className} bg-white text-black`}>

            {/* banner section  */}
            <div className="relative -mt-[160px]">
                <Image
                    className="relative w-full h-[400px] object-cover"
                    src={aboutUsBanner}
                    alt="banner Image"
                ></Image>
                <div className="absolute top-0 w-full bg-black opacity-70 inset-0" />
                <div className="absolute mt-28 inset-0 w-full flex justify-center items-center text-center">
                    <div>
                        <h1 className={`${playfair.className} uppercase text-3xl text-white`}>
                            About Us
                        </h1>
                    </div>
                </div>
            </div>
            {/* content section  */}
            <div className="">
                <div className=" mt-20 pb-56 lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-auto  md:mx-6 sm: mx-4">

                    <p className="text-lg text-gray-600 pb-10 text-center max-w-3xl mx-auto">
                        At Concrare, we’re more than just a real estate company — we’re your trusted partner in finding
                        the perfect space to live, invest, or grow. Whether you’re looking for your dream home or a smart investment,
                        we’re here to make it happen.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 mt-12 text-center">
                        <div className='text-white bg-[#CFAF6E] px-4 py-8 rounded-xs shadow-md shadow-gray-900'>
                            <h2 className={`${playfair.className} text-2xl font-semibold uppercase`}>Who We Are</h2>
                            <hr className='w-52 mx-auto mb-4' />
                            <p className=" leading-relaxed">
                                Concrare is a modern real estate platform built with technology and human connection at its core.
                                Based in Bangladesh, we specialize in residential and commercial properties that offer both value and vision.
                                Our team is made up of real estate professionals, developers, and strategists passionate about building better communities.
                            </p>
                        </div>

                        <div className='text-white bg-[#CFAF6E] px-4 py-8 rounded-xs shadow-md shadow-gray-900'>
                            <h2 className={`${playfair.className}  text-2xl font-semibold uppercase`} >Our Mission</h2>
                            <hr className='w-52 mx-auto mb-4' />
                            <p className=" leading-relaxed">
                                Our mission is simple: to simplify the property search process through innovation, transparency,
                                and exceptional customer service. We combine cutting-edge design with deep market insights to
                                help our clients make confident real estate decisions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Concrare?</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Smart and user-friendly property search features</li>
                            <li>Trusted listings from verified sellers and agents</li>
                            <li>Dedicated support throughout your buying or renting journey</li>
                            <li>Expertise in emerging and high-potential real estate markets</li>
                            <li>Real-time updates and personalized recommendations</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 text-lg">
                            Whether you’re buying your first apartment, upgrading your lifestyle, or investing for the future,
                            <span className="text-black font-medium"> Concrare is here to lead the way.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;