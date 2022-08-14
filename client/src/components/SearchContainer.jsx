import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
import { BsFilter } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const SearchContainer = () => {
	const {
		isLoading,
		search,
		searchStatus,
		searchType,
		sort,
		sortOptions,
		handleChange,
		clearFilters,
		statusOptions,
		jobTypeOptions,
	} = useAppContext();

	const handleSearch = (e) => {
		if (isLoading) return;

		handleChange({ name: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearFilters();
	};

	const [filterOpen, setFilterOpen] = useState(true);

	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 700;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		if (width < breakpoint) {
			setFilterOpen(false);
		} else {
			setFilterOpen(true);
		}
		return () => window.removeEventListener('resize', handleWindowResize);
		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper>
			<form
				className='form'
				style={{ marginTop: -10, marginBottom: -40, padding: 25 }}
			>
				<div className={filterOpen ? 'form-center' : 'form-center-search'}>
					{width < breakpoint ? (
						<div className='filter-container'>
							<BsFilter
								size={27}
								className='filter-btn'
								onClick={() => {
									setFilterOpen(!filterOpen);
								}}
							/>
						</div>
					) : (
						''
					)}
					<FormRow
						type='text'
						name='search'
						value={search}
						handleChange={handleSearch}
					/>

					{filterOpen ? (
						<>
							<FormRowSelect
								labelText='status'
								name='searchStatus'
								value={searchStatus}
								handleChange={handleSearch}
								list={['all', ...statusOptions]}
							/>
							<FormRowSelect
								labelText='type'
								name='searchType'
								value={searchType}
								handleChange={handleSearch}
								list={['all', ...jobTypeOptions]}
							/>
							<FormRowSelect
								name='sort'
								value={sort}
								handleChange={handleSearch}
								list={sortOptions}
							/>
							<button
								className='btn btn-block btn-danger'
								disabled={isLoading}
								onClick={handleSubmit}
							>
								Clear Filters
							</button>
						</>
					) : (
						''
					)}
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;
