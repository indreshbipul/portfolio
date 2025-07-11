import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">indreshvikrambipul1217@gmail.com</span>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">+91 8757822854</span>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Gaya, Bihar</span>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="singhindresh909@gmail.com" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                            {/* Email */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M2.01 6.5A2.5 2.5 0 0 1 4.5 4h15a2.5 2.5 0 0 1 2.49 2.5v11a2.5 2.5 0 0 1-2.49 2.5h-15a2.5 2.5 0 0 1-2.49-2.5v-11Zm2.49-.5a.5.5 0 0 0-.49.5v.638l8.01 4.806 8-4.805V6.5a.5.5 0 0 0-.49-.5h-15Zm15 12a.5.5 0 0 0 .49-.5v-7.197l-7.51 4.512a.75.75 0 0 1-.74 0L4.5 10.303V17.5a.5.5 0 0 0 .49.5h15Z" />
                            </svg>

                        </a>

                        <a href="https://www.instagram.com/singhindresh909/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                            {/* Instagram */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.41a4.92 4.92 0 011.775 1.153 4.92 4.92 0 011.153 1.775c.17.457.354 1.257.41 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.427a4.92 4.92 0 01-1.153 1.775 4.92 4.92 0 01-1.775 1.153c-.457.17-1.257.354-2.427.41-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.41a4.92 4.92 0 01-1.775-1.153 4.92 4.92 0 01-1.153-1.775c-.17-.457-.354-1.257-.41-2.427C2.175 15.746 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.427a4.92 4.92 0 011.153-1.775 4.92 4.92 0 011.775-1.153c.457-.17 1.257-.354 2.427-.41C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.17 0-3.548.012-4.796.07-1.004.046-1.55.216-1.912.36a3.092 3.092 0 00-1.133.738 3.092 3.092 0 00-.738 1.133c-.144.362-.314.908-.36 1.912-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.046 1.004.216 1.55.36 1.912.176.44.402.798.738 1.133.335.335.693.562 1.133.738.362.144.908.314 1.912.36 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.004-.046 1.55-.216 1.912-.36a3.092 3.092 0 001.133-.738 3.092 3.092 0 00.738-1.133c.144-.362.314-.908.36-1.912.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.046-1.004-.216-1.55-.36-1.912a3.092 3.092 0 00-.738-1.133 3.092 3.092 0 00-1.133-.738c-.362-.144-.908-.314-1.912-.36-1.248-.058-1.626-.07-4.796-.07zm0 4.838a5.163 5.163 0 100 10.325 5.163 5.163 0 000-10.325zm0 8.488a3.325 3.325 0 110-6.65 3.325 3.325 0 010 6.65zm6.406-9.599a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/indresh-vikram-bipul-b72a30251/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                            {/* LinkedIn */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.73s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.73-1.75 1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.39-1.54 2.86-1.54 3.06 0 3.63 2.02 3.63 4.64v5.54z" />
                            </svg>
                        </a>

                        <a href="https://github.com/indreshbipul" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                            {/* GitHub */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.799 8.207 11.386.6.11.82-.26.82-.577 0-.286-.012-1.233-.012-2.235-3.34.726-4.033-1.41-4.033-1.41-.546-1.386-1.332-1.754-1.332-1.754-1.09-.746.082-.73.082-.73 1.205.087 1.838 1.237 1.838 1.237 1.07 1.836 2.81 1.305 3.495.997.108-.776.42-1.305.762-1.605-2.665-.31-5.466-1.332-5.466-5.928 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.52.105-3.176 0 0 1.005-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.285-1.23 3.285-1.23.645 1.656.24 2.876.115 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.917.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.29 0 .315.215.69.825.572C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
                        <form id="contactForm" className="space-y-4">
                            <div>
                                <label for="name" className="block text-gray-700 mb-2">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label for="email" className="block text-gray-700 mb-2">Your Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label for="subject" className="block text-gray-700 mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label for="message" className="block text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact