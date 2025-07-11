import React from 'react'

function Skill() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>

            {[
            {
                type: "Programming Languages",
                skills: [
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: "Intermediate" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Intermediate" },
                ],
            },
            {
                type: "Frontend",
                skills: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Advanced" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Advanced" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Advanced" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Advanced" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg", level: "Intermediate" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: "Advanced" },
                ],
            },
            {
                type: "Backend",
                skills: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Advanced" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: "Advanced" },
                { name: "Sequelize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", level: "Intermediate" },
                // { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: "Intermediate" },
                { name: "Express Validator", icon: "https://raw.githubusercontent.com/express-validator/express-validator/master/logo.png", level: "Intermediate" },
                { name: "Express Session", icon: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4", level: "Intermediate" },
                { name: "Joi", icon: "https://raw.githubusercontent.com/hapijs/joi/master/images/joi.png", level: "Intermediate" },
                ],
            },
            {
                type: "Database",
                skills: [
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "Intermediate" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Intermediate" },
                ],
            },
            {
                type: "DevOps & Cloud",
                skills: [
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: "Intermediate" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Intermediate" },
                { name: "Cloudinary", icon: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1611100241/brand/Cloudinary_Logomark_Blue.svg", level: "Intermediate" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Advanced" },
                ],
            },
            ].map((group) => (
            <div key={group.type} className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">{group.type}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill) => (
                    <div
                    key={skill.name}
                    className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg hover:scale-105 transition transform duration-300"
                    >
                    <div className="w-16 h-16 mx-auto mb-3">
                        <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                        }}
                        />
                    </div>
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>

  )
}

export default Skill