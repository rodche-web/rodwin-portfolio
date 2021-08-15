import './styles.css';

const About = () => {
    return (
        <div className='about_container'>
            <div className='about_pic'><img src='images/avatar.svg' alt='profile pic' /></div>
            <div className='about_text'>
                <h1>About Me</h1>
                <p>
                    I'm a self-taught web developer skilled in the frontend framework React.
                    I'm a college graduate from the Polytechnic University of the Philippines 
                    with a Bachelor's degree in Electronics Engineering.
                    I first started coding as a kid on a Commodore 64 computer by copying
                    BASIC codes from old computer magazines. Since then I became passionate in 
                    computing.
                </p>
            </div>
        </div>
    )
}

export default About
