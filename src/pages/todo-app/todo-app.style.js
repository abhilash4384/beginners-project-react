import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px;
	height: 100vh;
	border-radius: 20px;
	background: #d9eee1;
	opacity: 0.8;

	@media (max-width: 768px) {
		margin: 0px;
		padding: 0px 10px;
	}
`;

export const FlexCard = styled.div`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
	align-items: ${({ alignItems }) => alignItems ?? 'center'};
	flex-direction: ${(flexDirection) => flexDirection ?? 'row'};
	margin: ${({ margin }) => margin ?? 'none'};
	padding: ${({ padding }) => padding ?? 'none'};
	border: ${({ border }) => border ?? 'none'};
	border-radius: ${({ borderRadius }) => borderRadius ?? 'none'};
`;
export const Title = styled.p`
	font-size: ${({ fontSize }) => fontSize ?? '20px'};
	font-weight: 600;
	color: #04aa6d;
`;

export const StyledInput = styled.input`
	height: 40px;
	border-radius: 20px;
	border: none;
	width: ${({ width }) => width ?? '400px'};
	padding: 0px 10px;
	font-weight: bolder;

	@media (max-width: 768px) {
		width: '300px';
	}
`;

export const StyledButton = styled.button`
	background: ${({ background }) => background ?? '#04aa6d'};
	border-radius: 3px;
	border: 2px solid #fff;
	color: ${({ color }) => color ?? '#fff'};
	margin: ${({ margin }) => margin ?? '0.5em 1em'};
	padding: ${({ padding }) => padding ?? '0.5em 1em'};
	cursor: pointer;
	font-weight: bolder;
`;

export const Text = styled.p`
	color: #808080;
	padding: 0px 5px;
	font-size: 1.2em;
	font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
	text-decoration: ${({ textDecoration }) => textDecoration ?? ''};
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
	height: 16px;
	width: 16px;
`;
