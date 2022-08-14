import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
	const {
		getJobs,
		jobs,
		isLoading,
		page,
		totalJobs,
		search,
		searchStatus,
		searchType,
		sort,
		numOfPages,
	} = useAppContext();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			getJobs();
		}, 500);
		return () => clearTimeout(delayDebounceFn);
		// eslint-disable-next-line
	}, [page, search, searchStatus, searchType, sort]);

	setTimeout(() => {
		if (isLoading) return <Loading center />;
	});

	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h2>No job applications to display...</h2>
				<h2>
					Would you like to{' '}
					<Link
						to='/add-job'
						style={{ textDecoration: 'underline', color: 'black' }}
					>
						<span style={{ fontWeight: 'bold' }}> add a job application?</span>
					</Link>
				</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h5>
				{totalJobs} job{jobs.length > 1 ? 's' : ''} found
			</h5>
			<div className='jobs'>
				{jobs.map((job) => {
					return <Job key={job._id} {...job} />;
				})}
				{/* pagination buttons */}
			</div>
			{numOfPages > 1 && <PageBtnContainer />}
		</Wrapper>
	);
};

export default JobsContainer;
