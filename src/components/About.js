import React from 'react'

const About = (props) => {
  return (
    <>
      <div class="p-3 mb-2 bg-info text-dark mt-2 rounded" style={{ fontFamily: "'Poppins', sans-serif", }}>
        <h3 className='mb-3 text-light'>About Me</h3>
        <p style={{ marginLeft: "10px" }}>
          Greetings! I'm <span style={{ color: "black", fontWeight: "bolder" }}>Vishwkant</span>, an enthusiastic and emerging full-stack developer with a deep passion for crafting digital experiences.
          My coding journey began with a spark of curiosity and has evolved into a dedicated pursuit of excellence in web development.
          <br />
          <br />
          I'm a perpetual learner, keeping pace with industry trends and best practices.
          Collaboration fuels my creativity, and I'm excited to collaborate with diverse teams to drive innovation.
          <br />
          <br />
          When I'm not coding, I'm exploring emerging technologies, brainstorming solutions, and finding inspiration in the ever-evolving tech landscape.
        </p>
      </div>
    </>
  )
}

export default About