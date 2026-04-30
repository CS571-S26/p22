import '../App.css'
import bg from '../assets/Page.png'
import { Link } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import AboutText from '../components/AboutText'
import sprite from '../assets/Karmila.PNG'
import PageWrapper from '../components/PageWrapper'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about-card">
        <h1 className="about-title">About Me</h1>

        <AboutText>
          Hi! I’m Annabelle Kim, a student at UW-Madison who is passionate about game development, design, and building creative digital experiences.
        </AboutText>

        <AboutText>
          This website is dedicated towards my projects, artwork, and other accomplishments to display my skills and interests in a fun and interactive way.
        </AboutText>

        <AboutText>
          This will include game design projects, digital art, sprites, and more! I hope you enjoy exploring my portfolio and learning more about me.
        </AboutText>
        <img src={sprite} className="about-sprite" />
        <AboutSection title="Recent Projects">
          <ul>
            <li>
              <Link to="/projects/strung-along">
                Strung Along (Game Jam Submission)
              </Link>
            </li>

            <li>
              <Link to="/projects/website">
                Personal Website Design
              </Link>
            </li>

            <li>
              <Link to="/projects/into-the-pit">
                Into the Pit (Game Design Project)
              </Link>
            </li>
          </ul>
        </AboutSection>

        <AboutSection title="Links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/annabelle-kim-7b9620382/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://itch.io/profile/wucke" target="_blank" rel="noopener noreferrer">
                Itchio
              </a>
            </li>
            <li>
              <a href="https://www.artstation.com/wuckeee8" target="_blank" rel="noopener noreferrer">
                Artstation
              </a>
            </li>
          </ul>
        </AboutSection>
      </div>
    </div>
    </PageWrapper>
  )
}