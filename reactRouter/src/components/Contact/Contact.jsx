import { Link } from 'react-router'

function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Contact Us
                            <span className="hidden sm:block text-4xl">
                                We'd Love To Hear From You
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600">
                            Have a question or need some help?
                            Feel free to get in touch with us.
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
                        alt="Contact us"
                    />
                </div>
            </aside>

            {/* Contact Information */}
            <div className="grid place-items-center sm:mt-20 px-6">

                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                    Get In Touch
                </h1>

                <p className="max-w-3xl text-center text-gray-600 text-lg leading-8">
                    We are here to help. You can reach us through email,
                    phone, or by visiting our office.
                </p>

            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16">

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Email
                    </h2>

                    <p className="text-gray-600">
                        hello@example.com
                    </p>
                </div>

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Phone
                    </h2>

                    <p className="text-gray-600">
                        +977 9800000000
                    </p>
                </div>

                <div className="p-6 text-center rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">
                        Location
                    </h2>

                    <p className="text-gray-600">
                        Kathmandu, Nepal
                    </p>
                </div>

            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                We Are Happy To Help
            </h1>

        </div>
    )
}

export default Contact