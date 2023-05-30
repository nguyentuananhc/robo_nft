import { ThemeProps } from 'flowbite-react'

export const extendTheme: ThemeProps = {
  theme: {
		sidebar: {
			inner: "bg-sidebar_bgcolor bg-sidebar_linear",
			item: {
				content: {
					base: 'px-0',
				}
			},
		}
	}
}
