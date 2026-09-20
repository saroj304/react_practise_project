import React from 'react'
import { Link } from 'react-router'

function About() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            About Us
                            <span className="hidden sm:block text-4xl">
                                Learn More About Us
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600">
                            We build simple and useful solutions that make
                            everyday work easier and more efficient.
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            Go to Home
                        </Link>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img
                        className="w-96"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="About us"
                    />
                </div>
            </aside>

            {/* About Content */}
            <div className="grid place-items-center sm:mt-20 px-6">

                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                    Who We Are
                </h1>

                <p className="max-w-3xl text-center text-gray-600 text-lg leading-8">
                    We are passionate about creating modern, reliable and
                    user-friendly applications. Our goal is to combine
                    technology and simplicity to provide a better experience
                    for our users.
                </p>

            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16">

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Innovation
                    </h2>
                    <p className="text-gray-600">
                        We continuously explore new ideas and technologies
                        to build better solutions.
                    </p>
                </div>

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Simplicity
                    </h2>
                    <p className="text-gray-600">
                        We believe good software should be simple,
                        intuitive and easy to use.
                    </p>
                </div>

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Reliability
                    </h2>
                    <p className="text-gray-600">
                        We focus on creating stable and dependable
                        applications that users can trust.
                    </p>
                </div>

            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Building Better Experiences
            </h1>

        </div>
    )
}

export default About