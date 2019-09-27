import { Row } from "react-styled-flexboxgrid"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FirstColumn = styled.div`
	color: #4e54c8;
	margin-bottom: 10px;
	margin-right: 30px;
	width: 55px;
`

export const ArticleContainer = styled.div`
	padding: 10px 23px;
	border-left-width: 6px;
	border-left-style: solid;
	border-left-color: transparent;
	&:hover {
		background: #f6f6f6;
		border-left-color: #4e54c8;
		a {
			color: #232323;
		}
	}
`

export const Separator = styled.span`
	padding: 0 10px;
`

export const TitleRow = styled(Row)`
	font-weight: 500;
`

export const ArticleIcon = styled(FontAwesomeIcon)`
	padding-right: 10px;
`

export const SubTitleRow = styled(Row)`
	color: #989898;
	font-size: 14px;
	padding-left: 92px;
	svg {
		margin-top: 2px;
		color: #989898;
	}
`

export const Link = styled.a`
	color: #717171;
	text-decoration: none;
`
