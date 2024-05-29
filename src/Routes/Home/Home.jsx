
function Home() {
  return (
    <>
      <div className="home_nav">
        <nav className="nav">
          <ul className="ul">
            <li className="item"><a href="#works">Works</a></li>
            <li className="item"><a href="#skills">Skills</a></li> 
            <li className="item"><a href="#about">About me</a></li> 
            <li className="item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div id="about" className="home_hero">
        <div className="hero">
          <h1 className="items">Hi, I am Abdulloh,<br />Frontend Developer</h1>
          <br />
          <p id="contact" className="items_p">I am 14 years old. <br />
            I am study at Najot Talim educational center.
            <br />
            I am also attended Mars It School before.
            <br />
            I am currently in the last month of my salvation.
            <br />
            Tell:+998(93)546-48-42
            <br />
            Telegram:@abdullokg
            </p>
        </div>
      </div>
      <div id="skills" className="home_header">
        <div className="header">
          <h1 className="h1">Soft Skills</h1>
        </div>
        <br />
        <br />
        <div className="header_skill">
          <p className="p">Planning & organizational <br />Focus & attention <br />Communication (and people  in general) <br />Troubleshootyour code <br />Manage unexpected urgent tasks & roadblocks <br />Learn new information & knowledge</p>
        </div>
        <div className="header">
          <h1 className="h1">Hard Skills</h1>
        </div>
        <br />
        <br />
        <div className="header_skill">
          <p className="p">Html and Css, Scss,<br />React, Typescript, Redux <br />Bootstrapp, Tailwind, Javascript, <br />Python, Next.js, Json, <br />Redux Toolkit</p>
        </div>
      </div>
      <div id="works" className="home_hero2">
          <div className="works2">
            <div className="works_txt">
              <h1 className="h1">Works</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="works">
            <a className="a" href="https://final-exam-vkcm.vercel.app/">
              <h1 className="h1">Ebay</h1>
              <br />
              <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png" alt="" />
            </a>
            <a className="a" href="https://lustrous-palmier-24c265.netlify.app/">
              <h1 className="h1">Product</h1>
              <br />
              <img className="img" src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-63314,resizemode-75,msid-100966025/jobs/c-suite/the-product-managers-toolkit-essential-skills-and-resources-for-success.jpg" alt="" />
            </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home