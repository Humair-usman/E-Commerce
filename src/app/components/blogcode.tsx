export default function blog() {
    return (
        
        
        <div className="bg-gray-100 font-sans">
            
            {/* Blog Header */}
            <header className="bg-white shadow-md py-4 px-6">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Blog</h1>
                    <nav>
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-gray-500">Blog</span>
                    </nav>
                </div>
            </header>
            <div className='flex'>
                {/* Blog Content */}
                <main className="max-w-4xl mx-auto py-10 px-6 text-center">
                    {/* First Blog Post */}
                    <section className="bg-white shadow rounded-md mb-6 p-6">
                        <h2 className="text-xl font-bold mb-4">Exploring new ways of decorating</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <img src=".\Images (11).png" alt="Blog post 1" width={100} height={50} className="w-[50%] h-[25%] mx-auto rounded-md mb-4" />
                        <div className="flex justify-center gap-2 items-center text-sm text-gray-500">
                            <span>Admin</span>
                            <span>14 Oct 2022</span>
                            <span>Wood</span>
                        </div>
                    </section>

                    {/* Second Blog Post */}
                    <section className="bg-white shadow rounded-md mb-6 p-6">
                        <h2 className="text-xl font-bold mb-4">Handmade pieces that took time to make</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <img src=".\Images (12).png" alt="Blog post 2" width={100} height={50} className="w-[50%] h-[25%] mx-auto rounded-md mb-4" />
                        <div className="flex justify-center gap-2 items-center text-sm text-gray-500">
                            <span>Admin</span>
                            <span>14 Oct 2022</span>
                            <span>Handmade</span>
                        </div>
                    </section>

                    {/* Third Blog Post */}
                    <section className="bg-white shadow rounded-md mb-6 p-6 mx-auto">
                        <h2 className="text-xl font-bold mb-4">Going all-in with millennial design</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <img src=".\Images (13).png" alt="Blog post 3" width={100} height={50} className="w-[50%] h-[25%] mx-auto rounded-md mb-4" />
                        <div className="flex justify-center gap-2 items-center text-sm text-gray-500">
                            <span>Admin</span>
                            <span>14 Oct 2022</span>
                            <span>Design</span>
                        </div>
                    </section>
                </main>
                <div className="">
                    {/* Categories Section */}
                    <aside className="max-w-2xl mx-auto px-6 m-10">
                        <h3 className="text-lg font-bold mb-4">Categories</h3>
                        <ul className="bg-white shadow rounded-md p-6">
                            <li className="mb-2 text-gray-700">Crafts <span className="text-sm text-gray-500">(2)</span></li>
                            <li className="mb-2 text-gray-700">Design <span className="text-sm text-gray-500">(8)</span></li>
                            <li className="mb-2 text-gray-700">Handmade <span className="text-sm text-gray-500">(7)</span></li>
                            <li className="mb-2 text-gray-700">Interior <span className="text-sm text-gray-500">(1)</span></li>
                            <li className="text-gray-700">Wood <span className="text-sm text-gray-500">(6)</span></li>
                        </ul>
                    </aside>

                    {/* Sidebar with Recent Posts */}
                    <aside className=" max-w-2xl mx-auto px-6 mb-10">
                        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                        <ul className="bg-white shadow rounded-md p-6">
                            <li className="mb-2 text-gray-700 flex items-center">
                                <img src=".\Images (14).png" alt="Recent post thumbnail" width={40} height={40} className="h-8 mr-4" />
                                <span>Going all-in with millennial design <span className="text-sm text-gray-500">- 3 Aug 2022</span></span>
                            </li>
                            <li className="mb-2 text-gray-700 flex items-center">
                                <img src=".\Images (15).png" alt="Recent post thumbnail" width={40} height={40} className="h-8 mr-4" />
                                <span>Exploring new ways of decorating <span className="text-sm text-gray-500">- 3 Aug 2022</span></span>
                            </li>
                            <li className="mb-2 text-gray-700 flex items-center">
                                <img src=".\Images (16).png" alt="Recent post thumbnail" width={40} height={40} className=" h-8 mr-4" />
                                <span>Handmade pieces that took time to make <span className="text-sm text-gray-500">- 3 Aug 2022</span></span>
                            </li>
                        </ul>
                    </aside>

                    
                </div>
            </div>
        </div>
    );
}