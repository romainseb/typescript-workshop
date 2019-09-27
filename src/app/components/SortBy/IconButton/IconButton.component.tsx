import React from "react"
import { css } from "emotion"
import styled from "@emotion/styled"
import { Button, ButtonProps } from "reakit"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = styled(FontAwesomeIcon)`
	margin-right: 5px;
`

type IconButtonProps = {
	icon: IconDefinition
	color?: string
}

export const IconButton: React.SFC<ButtonProps & IconButtonProps> = props => {
	return (
		<Button
			className={css({
				color: props.disabled ? "white" : "#4E54C8",
				"margin-right": "20px",
				"border-width": "1px",
				"border-style": "solid",
				"border-color": props.disabled ? "none" : "#4E54C8",
				padding: "5px 10px",
				background: props.disabled ? "#4E54C8" : "transparent",
				"&:disabled": {
					opacity: 1
				},
				"&:not([disabled]):hover": {
					color: props.disabled ? "#4E54C8" : "#4E54C8",
					background: "transparent"
				},
				"&:not([disabled]):active": {
					color: props.disabled ? "#4E54C8" : "#4E54C8",
					background: "transparent"
				}
			})}
			{...props}
		>
			<Icon icon={props.icon} />
			{props.children}
		</Button>
	)
}
