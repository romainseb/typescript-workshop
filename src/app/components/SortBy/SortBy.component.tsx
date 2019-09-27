import React from "react"
import { Col, Row } from "react-styled-flexboxgrid"
import styled from "@emotion/styled"
import {
	faArrowCircleUp,
	faComments,
	faUserCircle
} from "@fortawesome/free-solid-svg-icons"
import { IconButton } from "../IconButton"
import { ArticleProp } from "../../types"

const Buttons = styled(Col)`
	color: #989898;
	padding: 15px 30px;
	align-items: center;
`

const SortByLabel = styled.div`
	padding: 15px 0;
`

type SortByProps = {
	setSort: <T extends keyof ArticleProp>(sort: T) => void
	sort: keyof ArticleProp
}

export const SortBy: React.SFC<SortByProps> = ({ setSort, sort }) => {
	return (
		<Buttons lg={4}>
			<SortByLabel>Sort By :</SortByLabel>
			<Row>
				<IconButton
					disabled={sort === "points"}
					icon={faArrowCircleUp}
					onClick={() => setSort("points")}
				>
					Points
				</IconButton>
				<IconButton
					disabled={sort === "comments_count"}
					icon={faComments}
					onClick={() => setSort("comments_count")}
				>
					Comments
				</IconButton>
				<IconButton
					disabled={sort === "user"}
					icon={faUserCircle}
					onClick={() => setSort("user")}
				>
					User
				</IconButton>
			</Row>
		</Buttons>
	)
}
