
import { Link } from 'react-router'

function User() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-10">

            {/* Profile Header */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">

                <img
                    className="h-32 w-32 rounded-full border-4 border-gray-200"
                    src="https://i.pravatar.cc/300?img=12"
                    alt="User profile"
                />

                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold">
                        Saroj Khatiwada
                    </h1>

                    <p className="mt-1 text-lg text-gray-600">
                        Java Developer
                    </p>

                    <p className="mt-3 max-w-2xl text-gray-600">
                        Software developer interested in Java, Spring Boot,
                        React, PostgreSQL and modern backend architecture.
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                        <Link
                            to="/"
                            className="rounded-lg bg-orange-700 px-5 py-2 font-medium text-white hover:opacity-80"
                        >
                            Home
                        </Link>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* User Information */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">3+</h2>
                    <p className="mt-2 text-gray-600">
                        Years Experience
                    </p>
                </div>

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">15+</h2>
                    <p className="mt-2 text-gray-600">
                        Projects
                    </p>
                </div>

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">Java</h2>
                    <p className="mt-2 text-gray-600">
                        Primary Technology
                    </p>
                </div>

            </div>

            {/* About */}
            <div className="mt-12 rounded-lg border p-6">

                <h2 className="text-2xl font-bold">
                    About Me
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                    I enjoy building reliable backend applications and
                    learning modern frontend technologies. My main focus
                    is Java backend development, while I am also exploring
                    React and modern web application architecture.
                </p>

            </div>

            {/* Skills */}
            <div className="mt-12">

                <h2 className="mb-6 text-2xl font-bold">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        Java
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        Spring Boot
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        React
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        PostgreSQL
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        Docker
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        Kafka
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2">
                        Git
                    </span>

                </div>

            </div>

            {/* Footer Heading */}
            <h1 className="py-10 text-center text-2xl font-medium sm:text-5xl">
                Building Better Software
            </h1>

        </div>
    )
}

export default User
