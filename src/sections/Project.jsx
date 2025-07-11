
function Project() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
                <p className='text-2xl font-light mb-7'>Recent Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* <!-- Project 1 --> */}

                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                        <div className="relative h-48 overflow-hidden">
                            <img src="./projectLoop.png" alt="E-commerce dashboard showing product analytics charts and metrics" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-5 opacity-0 hover:opacity-100 transition duration-300">
                                <a href="https://loop-shop.netlify.app/" target="_blank" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">View</a>
                                <a href="https://github.com/indreshbipul/loop-frontend" target="_blank" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">GitHub</a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Loop E-commerce Full-Stack Web-Application</h3>
                            <p className="text-gray-600 mb-4">Developed a full-stack shopping web application “LOOP”, featuring comprehensive user functionalities such as Cart, Wishlist, My Orders, Profile Management, and Address Book. Integrated a dedicated Admin Panel for managing users, products, and orders efficiently.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">React</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Node.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">MongoDB</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express-Validator</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express-Session</span>
                                {/* <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"></span> */}
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Project 2 --> */}

                    <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4357d08f-ef3c-4772-8aad-a79c88451f53.png" alt="Mobile application interface design with finance charts and expense tracking" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-5 opacity-0 hover:opacity-100 transition duration-300">
                                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">View</a>
                                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">GitHub</a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">HomeAway Full-Stack Peer-to-peer platform  </h3>
                            <p className="text-gray-600 mb-4">Developed a full-stack ' HomeAway ' web application with features for both guests and hosts. Guests can book stays, and manage their wishlists. Hosts can list their spaces and manage their listings efficiently through host panel .</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">React</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Node.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">MongoDB</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express-Validator</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express-Session</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Project 3 --> */}

                    <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <img src="./projectTender.png" alt="Machine learning model visualization showing prediction accuracy metrics" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-5 opacity-0 hover:opacity-100 transition duration-300">
                                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">View </a>
                                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">GitHub</a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">TenderFlow full-stack B2B tender-management platform.</h3>
                            <p className="text-gray-600 mb-4">Developed “TenderFlow”, a full-stack B2B tender management platform that allows companies to register, create, browse, and apply for tenders. The platform includes a company discovery feature, enabling users to view basic public profiles of other registered companies, promoting transparency and informed bidding.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">React</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Node.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">PostgresSQL</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express.js</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">JOI</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Express-Session</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Sequelize Cli</span>
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Cloudinary</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-300">View All Projects</a>
                </div>
            </div>
        </section>

  )
}

export default Project