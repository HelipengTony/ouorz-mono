import React from "react"
import { Button, Icon } from "@twilight-toolkit/ui"
import getAPI from "~/utilities/api"

const SubscriptionBox = ({ type }: { type: string }) => {
	const [email, setEmail] = React.useState<string>("")
	const [subscribed, setSubscribed] = React.useState<boolean>(false)
	const [processing, setProcessing] = React.useState<boolean>(false)

	const doSubscribe = async () => {
		setProcessing(true)

		const data = await fetch(getAPI("external", "subscribeToButtondown"), {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_BUTTONDOWN_TOKEN,
			},
			body: JSON.stringify({ email: email, tags: ["Blog Newsletter"] }),
		})
			.then((res) => res.json())
			.finally(() => setProcessing(false))

		if (data.creation_date) {
			setSubscribed(true)
		} else {
			alert("An error has occurred, please try again.")
		}
	}

	if (type === "sm") {
		return (
			<div className="border shadow-sm w-full py-3 px-5 hidden lg:flex rounded-md bg-white dark:bg-gray-800 dark:border-gray-800 items-center my-2 space-x-4">
				<div>
					<p className="text-xl tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap items-center flex">
						<span className="w-7 h-7 mr-2">
							<Icon name="subscribe" />
						</span>
						New Article Everytime I Publish :)
					</p>
				</div>
				<div className="flex justify-end w-full">
					{subscribed ? (
						<div className="bg-green-500 w-10/12 py-1.5 text-4 rounded-md text-center text-white">
							Done!
						</div>
					) : (
						<input
							type="email"
							value={email}
							className={`${
								processing ? "animate-pulse" : ""
							} text-4 px-4 h-8 focus:outline-none w-10/12 shadow-sm rounded-md border bg-white dark:bg-gray-700 dark:border-gray-700 text-gray-500 dark:text-gray-400 tracking-wide flex justify-items-center`}
							placeholder="Email address"
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									doSubscribe()
								}
							}}
						/>
					)}
				</div>
			</div>
		)
	}

	return (
		<div className="border shadow-sm w-full p-10 lg:py-11 lg:px-20 rounded-xl bg-white dark:bg-gray-800 dark:border-gray-800 items-center my-2 lg:block hidden">
			<div className="flex justify-between">
				<div>
					<h1 className="flex text-3xl font-medium text-gray-700 dark:text-white tracking-wide items-center">
						<span className="w-9 h-9 mr-2">
							<Icon name="subscribe" />
						</span>
						Subscribe
					</h1>
					<p className="text-xl tracking-wide text-gray-500 dark:text-gray-400 pl-1 mt-1 mb-5">
						New Article Everytime I Publish :)
					</p>
				</div>
				<div className="flex items-center">
					<a href="https://www.ouorz.com/feed" target="_blank" rel="noreferrer">
						<button className="-mt-4.5 text-gray-500 effect-pressing w-full py-1 px-2.5 shadow-sm border border-gray-300 dark:border-gray-700 hover:shadow-inner dark:hover:bg-gray-700 rounded-md cursor-pointer focus:outline-none justify-center items-center text-xl tracking-wider bg-white dark:bg-gray-800 flex gap-x-1">
							<span className="h-6 w-6">
								<Icon name="rss" />
							</span>
							RSS
						</button>
					</a>
				</div>
			</div>
			<div className="w-full grid grid-cols-3 gap-5">
				<div className="col-start-1 col-end-3 w-full grid grid-cols-3 rounded-md bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-600 dark:text-gray-400 tracking-wide">
					<input
						type="email"
						value={email}
						className="col-start-1 col-end-3 w-full font-light border-r-0 rounded-tl-md rounded-bl-md px-4 py-2 focus:outline-none shadow-sm border border-gray-200 dark:border-gray-500 focus:border-gray-300 dark:bg-gray-600"
						placeholder="Email address"
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								doSubscribe()
							}
						}}
					/>
					{subscribed ? (
						<div className="bg-green-500 border border-green-600 cursor-pointer shadow-sm col-start-3 col-end-4 rounded-tr-md rounded-br-md text-center text-green-50 flex items-center">
							<span className="mx-auto">Succeed</span>
						</div>
					) : (
						<button
							className="bg-blue-50 border border-blue-200 dark:border-blue-400 dark:bg-blue-500 hover:bg-blue-100 dark:hover:bg-blue-600 hover:border-blue-300 dark:hover:border-blue-400 cursor-pointer shadow-sm col-start-3 col-end-4 rounded-tr-md rounded-br-md text-center text-blue-500 dark:text-white flex items-center"
							onClick={() => {
								email && doSubscribe()
							}}
						>
							<span className="mx-auto">
								{processing ? "Processing..." : "Subscribe"}
							</span>
						</button>
					)}
				</div>
				<a
					href="https://discord.gg/TTwGnMgcxr"
					target="_blank"
					rel="noreferrer"
					className="flex text-indigo-700 dark:text-indigo-50 col-start-3 col-end-4 border-indigo-200 dark:border-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-100 border text-center bg-indigo-50 rounded-md shadow-sm items-center justify-center"
				>
					<i className="w-5 h-5 mr-1.5">
						<Icon name="chatRounded" />
					</i>{" "}
					Discord Server
				</a>
			</div>
		</div>
	)
}

export default SubscriptionBox
