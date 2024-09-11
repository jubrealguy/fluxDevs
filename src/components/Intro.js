// import introImg from '../img/image 29.png'
import introImg from '../img/Anim.gif'
import bulb from '../img/image 16.png'
// import airbnb from '../img/airbnb.png'
// import hubspot from '../img/hubspot.png'
// import google from '../img/google.png'
// import microsoft from '../img/microsoft.png'
// import walmart from '../img/walmart.png'
// import fedex from '../img/fedEx.png'
import css from '../img/css.png'
import python from '../img/python.png'
import reactDay from '../img/react.png'
import reactNight from '../img/reactNight.png'
import wordpress from '../img/wordpress.png'
import githubDay from '../img/github.png'
import githubNight from '../img/githubNight.png'
import slack from '../img/slack.png'
import figma from '../img/figma.png'
import arr from '../img/arr.png'

const Intro = ({logo, dayLogo}) => {
    return (
        <section className='intro'>
            <div className='intro__head'>
                <div className='intro__head--img-box'>
                    <img src={bulb} alt='' className='bulb1' />
                    <img src={introImg} alt='' className='intro_img' />
                    {/* <iframe src="https://lottie.host/embed/1cf3a382-487e-4a28-839f-ec6893794850/sC54aS5iJp.json" className='intro_img' ></iframe> */}
                </div>
                <div className='intro__head-content'>
                    <p>We Provide Digital Solutions.</p>
                    <p> Let’s create something extraordinary together—explore our services and start transforming your digital experience today!</p>
                    <img src={bulb} alt='' className='bulb2' />
                    <a href='##'>Get in touch</a>
                </div>
            </div>
            {/* <div className='intro__companies'>
                <img src={airbnb} alt='' />
                <img src={hubspot} alt='' />
                <img src={google} alt='' />
                <img src={microsoft} alt='' />
                <img src={walmart} alt='' />
                <img src={fedex} alt='' />
            </div> */}
            <div className="intro__languages">
                <div className="slide-wrapper">
                    <div className='shown-img'>
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                    </div>
                    <div className='hidden-img'>
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                        <img src={figma} alt="" />
                        <img src={arr} alt="" />
                        <img src={slack} alt="" />
                        <img src={logo === dayLogo ? reactNight : reactDay} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={python} alt="" />
                        <img src={logo === dayLogo ? githubNight : githubDay} alt="" />
                        <img src={css} alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Intro