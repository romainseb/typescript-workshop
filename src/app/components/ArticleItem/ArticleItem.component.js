import React from "react"
import PropTypes from "prop-types"
import { Col } from "react-styled-flexboxgrid"
import {
	faArrowCircleUp,
	faCircle,
	faClock,
	faComments,
	faUserCircle
} from "@fortawesome/free-solid-svg-icons"
import { faComments as faRegularComments } from "@fortawesome/free-regular-svg-icons"

import {
	ArticleContainer,
	ArticleIcon,
	FirstColumn,
	Link,
	Separator,
	SubTitleRow,
	TitleRow
} from "./ArticleItem.style"
// import types

// typings on the parameter
function isNumber(number) {
	return !isNaN(number)
}

// Typings for the component
export const ArticleItem = ({ article }) => {
	const commentsIcon = isNumber(article.comments_count)
		? faComments
		: faRegularComments
	const commentsLabel = isNumber(article.comments_count)
		? article.comments_count
		: "no comments"
	const pointsIcon = isNumber(article.points) ? faArrowCircleUp : faCircle
	const pointsLabel = isNumber(article.points) ? article.points : ""

	return (
		<ArticleContainer>
			<TitleRow>
				<FirstColumn>
					<ArticleIcon icon={pointsIcon} />
					{pointsLabel}
				</FirstColumn>
				<Col lg={11}>
					<Link href={article.url} target="_blank" rel="noopener noreferrer">
						{article.title}
					</Link>
				</Col>
			</TitleRow>
			<SubTitleRow>
				<ArticleIcon icon={faClock} />
				{article.time_ago}
				<Separator>|</Separator>
				<ArticleIcon icon={faUserCircle} />
				{article.user}
				<Separator>|</Separator>
				<ArticleIcon icon={commentsIcon} />
				{commentsLabel}
			</SubTitleRow>
		</ArticleContainer>
	)
}

// Remove proptypes
ArticleItem.propTypes = {
	article: PropTypes.shape({
		comments_count: PropTypes.number,
		points: PropTypes.number,
		url: PropTypes.string.isRequired,
		time_ago: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired
}
