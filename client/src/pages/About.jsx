import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Mission</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to building exceptional web experiences using the modern MERN stack, 
            empowering developers and businesses alike.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Founded with a passion for modern web technologies, we've been at the forefront 
              of MERN stack development, creating scalable and efficient applications that 
              solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our team of dedicated developers believes in the power of JavaScript across 
              the entire stack, delivering seamless user experiences from database to frontend.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                Meet Our Team
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
                Our Values
              </button>
            </div>
          </div>

          {/* Right Content - Image/Graphic */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700">Projects</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
                <div className="text-gray-700">Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to stay ahead 
                in the rapidly evolving web development landscape.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every line of code is written with precision and care, ensuring 
                high-performance, maintainable, and scalable applications.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and open communication to 
                deliver the best solutions for our clients and users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate individuals driving innovation and excellence in MERN stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-blue-600 mb-4">Lead Developer</p>
            <p className="text-gray-600 text-sm">
              Full-stack developer with 8+ years of experience in MERN stack and cloud technologies.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              SJ
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
            <p className="text-blue-600 mb-4">UI/UX Designer</p>
            <p className="text-gray-600 text-sm">
              Creating beautiful and intuitive user experiences that drive engagement and satisfaction.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              MS
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Smith</h3>
            <p className="text-blue-600 mb-4">DevOps Engineer</p>
            <p className="text-gray-600 text-sm">
              Ensuring seamless deployment, scalability, and reliability of all our applications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 rounded-2xl mx-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Let's build something amazing together using the power of MERN stack.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default About