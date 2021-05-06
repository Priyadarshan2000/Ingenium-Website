import React from "react"
import Tilt from "react-tilt"

import Icon1 from "../../images/download.jpg"
import Icon2 from "../../images/download1.jpg"
import Icon3 from "../../images/download2.jpg"
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
	ServicesCardContent,
} from "./ServiceElements"

const Services = () => {
	return (
		<ServicesContainer id="Prayukti">
			<ServicesH1>Gallery</ServicesH1>
			<ServicesWrapper>
				<Tilt options={{ max: 25, speed: 400 }}>
					<ServicesIcon src={Icon1} />
					<ServicesCard>
						<ServicesCardContent>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
								you can acess our plataform online anywhere in the world.
							</ServicesP>
							{/* <ServicesA>Read More</ServicesA> */}
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
				<Tilt options={{ max: 25, speed: 400 }}>
					<ServicesIcon src={Icon2} />
					<ServicesCard>
						<ServicesCardContent>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
								you can acess our plataform online anywhere in the world.
							</ServicesP>
							{/* <ServicesA>Read More</ServicesA> */}
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
				<Tilt options={{ max: 25, speed: 400 }}>
					<ServicesIcon src={Icon3} />
					<ServicesCard>
						<ServicesCardContent>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
								Unlock our special membership card that returns 5% cash back.
							</ServicesP>
							{/* <ServicesA>Read More</ServicesA> */}
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
