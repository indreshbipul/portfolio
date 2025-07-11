import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          Education & Experience
        </h2>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  IIT Kharagpur
                </h4>
                {/* <span className="text-sm text-blue-600">2023 - Present</span> */}
              </div>
              <p className="text-gray-600">B.Tech in Mechanical Engineering</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  Delhi Public School, Gaya
                </h4>
                {/* <span className="text-sm text-blue-600">2019 - 2020</span> */}
              </div>
              <p className="text-gray-600">Senior Secondary (10+2)</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  D.A.V Public School, Cantonment Area, Gaya
                </h4>
                {/* <span className="text-sm text-blue-600">2018</span> */}
              </div>
              <p className="text-gray-600">Secondary (10th)</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Experience</h3>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-gray-800">
                Executive Member, Public Policy and Governance Society, IIT Kharagpur
              </h4>
              <span className="text-sm text-green-600">2024 - 2025</span>
            </div>
            <p className="text-gray-600 mt-2">
              Contributed to several key web pages (Policy Podcast, Start a Branch, Team page) using HTML, CSS, JavaScript. Worked with the team to build the Sansad Event page using Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
