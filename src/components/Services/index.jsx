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
							<ServicesH2>Nature</ServicesH2>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
							👤 Priyadarshan Ghosh

							</ServicesP>
							
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
				<Tilt options={{ max: 25, speed: 400 }}>
					<ServicesIcon src={Icon2} />
					<ServicesCard>
						<ServicesCardContent>
						    <ServicesH2>Nature</ServicesH2>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
							👤 Priyanshu Chatterjee
							</ServicesP>
							
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
				<Tilt options={{ max: 25, speed: 400 }}>
					<ServicesIcon src={Icon3} />
					<ServicesCard>
						<ServicesCardContent>
						    <ServicesH2>Nature</ServicesH2>
							<ServicesH2>Photography</ServicesH2>
							<ServicesP>
							👤 Sumitava Chakraborty
							</ServicesP>
							
						</ServicesCardContent>
					</ServicesCard>
				</Tilt>
			</ServicesWrapper>
			
		</ServicesContainer>
	)
}

export default Services
