import styled from 'styled-components';

const Wrapper = styled.aside`
	.sidebar-container {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		opacity: 0;
		transition: var(--transition);
	}
	.show-sidebar {
		z-index: 99;
		opacity: 1;
	}
	.content {
		background: var(--white);
		width: var(--fluid-width);
		height: 95vh;
		border-radius: var(--borderRadius);
		padding: 4rem 2rem;
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.close-btn {
		position: absolute;
		top: 10px;
		left: 10px;
		background: transparent;
		border-color: transparent;
		font-size: 2rem;
		color: var(--red-dark);
		cursor: pointer;
		.active {
			color: var(--grey-900);
		}
		.active .icon {
			color: var(--primary-500);
		}
	}
	@media (min-width: 992px) {
		.content {
			width: 50vw;
			justify-content: center;
		}
	}
`;
export default Wrapper;
