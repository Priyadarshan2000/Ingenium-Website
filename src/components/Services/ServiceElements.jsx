import styled from "styled-components"

export const ServicesContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;

	@media screen and (max-width: 768px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`
export const ServicesWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 786px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`
export const ServicesCard = styled.div`
	/* background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  } */

	position: relative;
	width: 280px;
	height: 400px;
	/* margin: 30px; */
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.1);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	&:hover {
		backdrop-filter: blur(5px);
		transition: 0.5s;
		transform: scale(1.05)
	}
`
export const ServicesIcon = styled.img`
	height: 400px;
	width: 160px;
	margin-bottom: 10px;
	position: absolute;
	width: 280px;
	height: 100%;
	border-radius: 20px;
`
export const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const ServicesCardContent = styled.div`
	padding: 20px;
	text-align: center;
	transform: translateY(100px);
	opacity: 0;
	transition: 0.5s;

	&:hover {
		transform: translateY(0px);
		opacity: 1;
	}
`

export const ServicesH2 = styled.h2`
	font-size: 1.8em;
	color: #fff;
	z-index: 1;
`

export const ServicesP = styled.p`
	font-size: 1em;
	color: #fff;
	font-weight: 300;
`

// export const ServicesA = styled.a`
// 	position: relative;
// 	display: inline-block;
// 	padding: 8px 20px;
// 	margin-top: 15px;
// 	background: #fff;
// 	border-radius: 20px;
// 	text-decoration: none;
// 	font-weight: 500;
// 	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
// `
