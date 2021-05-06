import React from "react"
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="Editorial" onClick={toggle}>
						Editorial
					</SidebarLink>
					<SidebarLink to="Abohoman" onClick={toggle}>
						Abohoman
					</SidebarLink>
					<SidebarLink to="Prayukti" onClick={toggle}>
						Prayukti
					</SidebarLink>
					<SidebarLink to="signup" onClick={toggle}>
						Gallery
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Subscribe</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
