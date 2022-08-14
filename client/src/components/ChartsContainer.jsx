import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { FaExchangeAlt } from 'react-icons/fa';

const ChartsContainer = () => {
	const [barChart, setBarChart] = useState(true);
	const { monthlyApplications: data } = useAppContext();

	return (
		<Wrapper>
			<h4>Monthly Applications</h4>
			<button
				type='button'
				onClick={() => {
					setBarChart(!barChart);
				}}
			>
				{barChart ? 'Area Chart' : 'Bar Chart'}
				<FaExchangeAlt style={{ marginLeft: 10 }} />
			</button>
			{barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
		</Wrapper>
	);
};

export default ChartsContainer;
