import Wrapper from '../assets/wrappers/Demo';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import video from '../assets/images/demoVideo.mp4';
import { useRef } from 'react';

const Demo = () => {
	const { showDemo, toggleDemo } = useAppContext();
	const vidRef = useRef(null);
	const handlePauseVideo = () => {
		vidRef.current.pause();
	};

	return (
		<Wrapper>
			<div
				className={
					showDemo ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<button
						type='button'
						className='close-btn'
						onClick={() => {
							handlePauseVideo();
							toggleDemo();
						}}
					>
						<FaTimes />
					</button>
					{/* <header>
						<Logo />
					</header> */}
					<video ref={vidRef} autoPlay muted controls className='video'>
						<source
							src={video}
							type='video/mp4'
							onClick={(e) => {
								e.target.pause();
							}}
						/>
					</video>
				</div>
			</div>
		</Wrapper>
	);
};

export default Demo;
