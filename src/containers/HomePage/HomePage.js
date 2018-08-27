import React from 'react';
import Typing from 'react-typing-animation';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

import ImageFiles from '../../assets/images/me_1.jpg';
import './HomePage.css';
import NavigationArrow from '../../components/Navigation/NavigationArrow/NavigationArrow'


const homePage = (props) => {
    const title = "Hello, my name is Prakhar Shukla.";
    const para = "I am a front end developer with experience of over 6 years. Throuhout my career, I've helped global companies, organizations and start-ups reach business goals with user focused, interactive design. I enjoy bringing clarity to complex problems with a people first approach."
    return (
      <Fade left>
        <div>
          <Rotate top left>
            <div className="Images">
              <img src={ImageFiles} alt="myself" />
            </div>
          </Rotate>
          <Typing speed={30}>
            <h1>{title}</h1>
            <p>{para}</p>
          </Typing>
        </div>
        <NavigationArrow class="Right" link="/portfolio" />
      </Fade>
    )
}

export default homePage;