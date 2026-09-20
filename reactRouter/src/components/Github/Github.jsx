import {Link, useLoaderData} from 'react-router'
import {useEffect, useState} from 'react'


function Github() {
    const data = useLoaderData();

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-10">

            {/* Profile Header */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">

                <img
                    className="h-32 w-32 rounded-full"
                    src={data.avatar_url}
                    alt={data.login}
                />

                <div className="text-center sm:text-left">

                    <h1 className="text-3xl font-bold">
                        {data.name || data.login}
                    </h1>

                    <p className="text-xl text-gray-600">
                        GitHub Profile
                    </p>

                    <p className="mt-3 max-w-2xl text-gray-600">
                        {data.bio || "No bio available"}
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:justify-start">

                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-gray-900 px-5 py-2 font-medium text-white hover:opacity-80"
                        >
                            Visit GitHub
                        </a>

                        <Link
                            to="/"
                            className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"
                        >
                            Home
                        </Link>

                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">
                        {data.followers}
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Followers
                    </p>
                </div>

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">
                        {data.following}
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Following
                    </p>
                </div>

                <div className="rounded-lg border p-6 text-center">
                    <h2 className="text-3xl font-bold">
                        {data.public_repos}
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Repositories
                    </p>
                </div>

            </div>

        </div>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/saroj304"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub information");
    }

    return response.json();
};

export default Github