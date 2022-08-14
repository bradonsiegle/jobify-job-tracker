import Wrapper from '../assets/wrappers/StatItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const StatItem = ({ count, title, icon, color, bcg, path, filter }) => {
	const { getJobs, filterStatus } = useAppContext();
	const handleClick = (filter) => {
		filterStatus(filter);
		getJobs();
	};

	return (
		<Wrapper
			color={color}
			bcg={bcg}
			onClick={() => {
				handleClick(filter);
			}}
		>
			<Link to={path}>
				<header>
					<span className='count'>{count}</span>
					<span className='icon'>{icon}</span>
				</header>

				<h5 className='title'>{title}</h5>
			</Link>
		</Wrapper>
	);
};

export default StatItem;
