'use client'

import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@twilight-toolkit/ui'
import Page from '~/components/Page'

const NotFound = () => {
	const router = useRouter()

	return (
		<Page>
			<Head>
				<title>404 - TonyHe</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<div className="lg:mt-20 mt-0 lg:pt-0 pt-24 justify-center">
				<div className="text-center">
					<h1 className="font-medium text-3xl leading-14 lg:text-1 text-black dark:text-white tracking-wide mb-0.5">
						Oops
					</h1>
					<p className="text-3 lg:text-2 text-gray-500 leading-14 tracking-wide font-light">
						404 Not Found
					</p>
					<div className="inline-block justify-center mt-4">
						<Button
							type="primary"
							onClick={() => {
								router.push('/')
							}}
							className="mx-auto"
						>
							Back to Home
						</Button>
					</div>
				</div>
			</div>
		</Page>
	)
}

export default NotFound
