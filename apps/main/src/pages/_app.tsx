import '~/assets/styles/vendors/tailwind.css'
import '~/styles/global.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '~/store'

export type NextPageWithLayout = NextPage & {
	layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.layout ?? ((page) => page)

	return (
		<div>
			{/* Analytics Script */}
			<Script
				async
				defer
				data-do-not-track="true"
				data-domains="www.ouorz.com"
				data-website-id="e3d939fa-1fa0-4c06-adb1-1081d6b6686e"
				src="https://analytics.ouorz.com/analytics.js"
			/>
			{/* NProgress Loading Progress Bar */}
			<NextNprogress
				color="#d4d4d8"
				height={2}
				options={{ showSpinner: false }}
			/>
			{/* Next-Themes Theme Provider */}
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem={true}
			>
				{/* Redux Store Provider */}
				<ReduxProvider store={store}>
					<div className="bg-gbg dark:bg-neutral-900 dark:text-white min-h-screen">
						{getLayout(<Component {...pageProps} />)}
					</div>
				</ReduxProvider>
			</ThemeProvider>
		</div>
	)
}

export default App
