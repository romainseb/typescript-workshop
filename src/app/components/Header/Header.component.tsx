import React from "react"
import { Col } from "react-styled-flexboxgrid"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTalend } from "../faTalend/faTalend"

const StyledIcon = styled(FontAwesomeIcon)`
	padding-right: 10px;
`
const Nav = styled.nav`
	background-image: linear-gradient(90deg, #4e54c8, #8f94fb);
	height: 70px;
	color: #fbf3f2;
`

const AppName = styled(Col)`
	padding: 20px 20px;
	font-weight: bold;
	font-size: 25px;
	display: flex;
	align-items: center;
`

export const Header = () => {
	return (
		<Nav>
			<AppName lg={3}>
				<StyledIcon icon={faTalend} />
			</AppName>
		</Nav>
	)
}
