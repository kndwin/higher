import { Flex } from "components/shared"

export const Breadcrumbs = ({ children, ...props  }) => {
	return (
		<Flex css={{ gap: "$2"}}>
			{children}
		</Flex>
	)
}
