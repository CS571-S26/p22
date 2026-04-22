import '../App.css'
import { Card } from 'react-bootstrap'
import bg from '../assets/Page.png'

export default function AboutPage() {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about-card">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi! I’m Annabelle Kim, a student at UW-Madison who is passionate about game development, design, and building creative digital experiences.
        </p>

        <p className="about-text">
          This website is dedicated towards my projects, artwork, and other accomplishments to display my skills and interests in a fun and interactive way.
        </p>

        <p className="about-text">
          This will include game design projects, digital art, sprites, and more! I hope you enjoy exploring my portfolio and learning more about me.
        </p>

        <div className="about-section">
          <h3>Recent Projects</h3>
          <ul>
            <li>Strung Along (Game Jame Submission)</li>
            <li>Personal Website Design</li>
            <li>Into the Pit (Game Design Project)</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Links</h3>
          <ul>
            <li ><a href="https://www.linkedin.com/in/annabelle-kim-7b9620382/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://itch.io/profile/wucke" target="_blank" rel="noopener noreferrer">Itchio</a></li>
            <li><a href="https://www.artstation.com/wuckeee8" target="_blank" rel="noopener noreferrer">Artstation</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
