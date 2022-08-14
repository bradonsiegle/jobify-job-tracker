import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import Demo from '../components/Demo';
import { useAppContext } from '../context/appContext';

const Landing = () => {
	const { toggleDemo } = useAppContext();

	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* {info} */}
				<div className='info'>
					<h2>
						Job Application <span>Tracking</span> Made Easy
					</h2>
					<p>
						Jobify is a free organizational tool to help you track your job
						applications and keep your job search organized, all in one place.
					</p>
					<p>
						No more messy job search spreadsheets. Jobify keeps track of every
						detail about your job opportunities regardless of where you found
						them. Organize your job search with Jobify today.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>

					<button type='button' className='btn demo-btn' onClick={toggleDemo}>
						Demo
					</button>
					<Demo />
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
