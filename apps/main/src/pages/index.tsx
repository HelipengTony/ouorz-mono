import { Icon } from "@twilight-toolkit/ui"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import PagesAndLinks from "~/components/Banners/PagesAndLinks"
import EmploymentCard from "~/components/Card/Employment"
import PaperCard from "~/components/Card/Paper"
// import List from "~/components/List"
import { pageLayout } from "~/components/Page"
import SubscriptionBox from "~/components/SubscriptionBox"
import Top from "~/components/Top"
import { NextPageWithLayout } from "~/pages/_app"

const Home: NextPageWithLayout = () => {
	// const [showPosts, setShowPosts] = useState(false)
	const [maskClass, setMaskClass] = useState("mask-x-r")

	return (
		<>
			<Head>
				<title>Tony (Lipeng) He</title>
			</Head>
			<section className="mt-0 pt-24 lg:mt-20 lg:pt-0">
				<div className="flex items-center justify-between gap-x-10 gap-y-8">
					<div className="-ml-1 flex flex-col gap-y-1">
						<h1 className="flex items-center whitespace-nowrap break-words text-3xl font-medium tracking-wide text-black dark:text-white lg:text-[1.8rem]">
							<span className="mr-2.5 inline-block animate-waveHand cursor-pointer hover:animate-waveHandAgain">
								👋
							</span>
							Lipeng (Tony) He
						</h1>
						<div className="flex flex-col gap-y-1.5 break-words px-1 text-4 font-light leading-relaxed tracking-wider text-gray-500 dark:text-gray-300 lg:text-2">
							<p>
								I am a student, software engineer, and researcher at the{" "}
								<a
									href="https://uwaterloo.ca"
									target="_blank"
									className="inline-flex items-center gap-x-1 transition-colors hover:text-blue-500 dark:hover:text-blue-500"
									rel="noreferrer">
									University of Waterloo
									<span className="flex h-5 w-5">
										<Icon name="externalLink" />
									</span>
								</a>
								.
							</p>
						</div>
					</div>
					<div className="hidden flex-shrink-0 pt-1 lg:block">
						<Image
							src="https://static.ouorz.com/avatar_real_small.jpg"
							height={105}
							width={105}
							alt="Tony He"
							className="rounded-xl bg-gray-200 shadow-sm dark:border dark:border-gray-600"
						/>
					</div>
				</div>
			</section>
			<section className="mt-10">
				<div className="mt-6">
					<Top />
				</div>
			</section>
			<section className="mt-6">
				<div className="mt-5">
					<div className="mt-4">
						<PagesAndLinks />
					</div>
				</div>
			</section>
			<section className="mt-16">
				<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
					<span className="mr-1.5 flex h-5 w-5">
						<Icon name="microscope" />
					</span>
					<span className="uppercase">Research Interests</span>
				</label>
				<div className="mt-[15px] flex flex-col gap-y-2 break-words px-1 text-justify text-3 font-light leading-relaxed tracking-wide text-gray-500 underline-offset-[6px] dark:text-gray-300 lg:text-[17px]">
					<p className="mb-5">
						My research interests span Computer Security and the Theory &
						Applications of Cryptography (especially across computing and data
						sciences). My general goal is{" "}
						<i className="decoration-gray-300">
							to enable society to gain the benefits of emerging technologies
							without sacrificing security & privacy
						</i>
						.
					</p>
					<hr className="dark:border-gray-700" />
					<p className="mt-3.5">
						In my previous experience, I worked on developing and analyzing
						secure systems and protocols that address issues related to:
					</p>
					<ul className="my-2 list-disc pl-5">
						<li className="pl-3 font-medium">Trustworthy Machine Learning</li>
						<li className="pl-3">Blockchain security and scalability</li>
					</ul>
					<p className="mb-3.5">
						More recently, I have been focusing on the research area of AI
						safety & alignment.
					</p>
					<hr className="dark:border-gray-700" />
					<p className="mt-3.5">My general objectives are to:</p>
					<ul className="mt-2 list-disc pl-5">
						<li className="pl-3">
							Design and develop systems and protocols that are provably secure,
							inexpensive and easy-to-use;
						</li>
						<li className="pl-3">
							Support the deployment of security and/or cryptographic solutions
							in the real world to improve the safety, privacy and robustness of
							computing systems;
						</li>
						<li className="pl-3">
							Find new and innovative ways to apply cryptographic tools in
							society.
						</li>
					</ul>
					<p className="mt-5">
						In the process of achieving these objectives, I hope to also unlock
						new application scenarios through a combination of systems design
						and cryptography.
					</p>
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="newspaper" />
						</span>
						<span className="hidden uppercase lg:block">
							Selected Publications
						</span>
						<span className="block uppercase lg:hidden">Publications</span>
					</label>
					<Link
						href="https://scholar.google.com/citations?user=6yFlE_sAAAAJ"
						target="_blank"
						className="flex items-center gap-x-1 text-gray-500 underline-offset-4 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500">
						Citations
						<span className="h-5 w-5 underline">
							<Icon name="externalLink" />
						</span>
					</Link>
				</div>
				<div className="mt-5 flex flex-col gap-y-4">
					<PaperCard
						title="Secure Transformer Inference Made Non-interactive"
						authors="Jiawen Zhang, Xinpeng Yang, Lipeng He, Kejia Chen, Wen-jie Lu, Yinghao Wang, Xiaoyang Hou, Jian Liu, Kui Ren and Xiaohu Yang"
						venue={{
							name: "NDSS 2025",
							href: "https://www.ndss-symposium.org/ndss2025/",
							color: "!border-l-red-500 border-l-4",
						}}
						accepted={true}
						links={[
							{
								label: "Paper",
								href: "https://eprint.iacr.org/2024/136",
								default: true,
							},
							{
								label: "Code",
								href: "https://github.com/zju-abclab/NEXUS",
							},
						]}
					/>
					<PaperCard
						title="A Survey of Multimodal Federated Learning: Background, Applications, and Perspectives"
						authors="Hao Pan, Xiaoli Zhao, Lipeng He, Yicong Shi and Xiaogang Lin"
						venue={{
							name: "Multimedia Systems",
							href: "https://link.springer.com/journal/530",
							color: "!border-l-green-600 border-l-4",
						}}
						accepted={true}
						links={[
							{
								label: "Paper",
								href: "https://link.springer.com/article/10.1007/s00530-024-01422-9",
								default: true,
							},
							{
								label: "Code",
								href: "https://github.com/haopr/MMFL",
							},
						]}
					/>
					<PaperCard
						title="A Comparative Examination of Network and Contract-Based Blockchain Storage Solutions for Decentralized Applications"
						authors="Lipeng He"
						venue={{
							name: "DECA 2023",
							href: "https://www.atlantis-press.com/proceedings/deca-23",
							color: "!border-l-gray-500 border-l-4",
						}}
						accepted={true}
						links={[
							{
								label: "Paper",
								href: "https://www.atlantis-press.com/proceedings/deca-23/125994999",
								default: true,
							},
						]}
					/>
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="article" />
						</span>
						<span className="block uppercase">Preprints</span>
					</label>
					<span className="flex items-center gap-x-1 text-right text-gray-500 underline-offset-4 dark:text-gray-400">
						* indicates equal contribution
					</span>
				</div>
				<div className="mt-5 flex flex-col gap-y-4">
					<PaperCard
						title="Activation Approximations Can Incur Safety Vulnerabilities Even in Aligned LLMs: Comprehensive Analysis and Defense"
						authors="Jiawen Zhang*, Kejia Chen*, Lipeng He*, Jian Lou, Dan Li, Zunlei Feng, Mingli Song, Jian Liu, Kui Ren, and Xiaohu Yang"
						accepted={false}
						links={[
							{
								label: "Paper",
								href: "https://arxiv.org/abs/2502.00840",
								default: true,
							},
						]}
					/>
					<PaperCard
						title="On the Atomicity and Efficiency of Blockchain Payment Channels"
						authors="Di Wu, Shoupeng Ren, Yuman Bai, Lipeng He, Jian Liu, Wu Wen, Kui Ren, and Chun Chen"
						accepted={false}
						links={[
							{
								label: "Paper",
								href: "https://eprint.iacr.org/2025/180",
								default: true,
							},
						]}
					/>
					<PaperCard
						title="FedVLP: Visual-aware Latent Prompt Generation for Multimodal Federated Learning"
						authors="Hao Pan, Xiaoli Zhao, Yuchen Jiang, Lipeng He, Bingquan Wang, and Yincan Shu"
						accepted={false}
						links={[]}
					/>
					<PaperCard
						title="LookAhead: Preventing DeFi Attacks via Unveiling Adversarial Contracts"
						authors="Shoupeng Ren, Lipeng He, Tianyu Tu, Di Wu, Jian Liu, Kui Ren, and Chun Chen"
						accepted={false}
						links={[
							{
								label: "Paper",
								href: "https://arxiv.org/abs/2401.07261",
								default: true,
							},
						]}
					/>
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="suitcase" />
						</span>
						<span className="uppercase">Employment</span>
					</label>
					<Link
						href="https://www.linkedin.com/in/~lhe/"
						target="_blank"
						className="flex items-center gap-x-1 text-gray-500 underline-offset-4 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500">
						LinkedIn
						<span className="h-5 w-5 underline">
							<Icon name="externalLink" />
						</span>
					</Link>
				</div>
				<div className="mt-5 flex flex-col gap-y-4">
					<div
						onScroll={(e) => {
							const target = e.target as HTMLDivElement

							let maskClass = ""
							if (
								target.scrollLeft > 0 &&
								target.scrollLeft < target.scrollWidth - target.clientWidth
							) {
								maskClass = "mask-x-full"
							} else if (target.scrollLeft === 0) {
								maskClass = "mask-x-r"
							} else {
								maskClass = "mask-x-l"
							}

							setMaskClass(maskClass)
						}}
						className={`flex gap-x-4 overflow-x-auto whitespace-nowrap ${maskClass}`}>
						<EmploymentCard
							orgLogoSrc="https://static.ouorz.com/crysp_logo.png"
							organization="University of Waterloo"
							organizationFullName="Cryptography, Security, and Privacy (CrySP) Lab"
							jobTitle="Undergraduate Research Assistant (URA)"
							jobType="Research, Part-time"
							dateString="Jan 2025 - Present"
						/>
						<EmploymentCard
							orgLogoSrc="https://static.ouorz.com/uwaterloo_logo.webp"
							organization="University of Waterloo"
							organizationFullName="CS 135 Designing Functional Programs"
							jobTitle="Instructional Support Assistant (ISA)"
							jobType="Teaching, Co-op"
							dateString="Aug 2024 - Dec 2024"
						/>
					</div>
					<EmploymentCard
						orgLogoSrc="https://static.ouorz.com/zju_logo.png"
						organization="Zhejiang University"
						organizationFullName="ABC Lab, Institute of Cyberspace Research"
						jobTitle="Research Assistant"
						jobType="Research, Co-op"
						dateString="May - Aug 2024"
					/>
					<EmploymentCard
						orgLogoSrc="https://static.ouorz.com/biorender_logo.png"
						organization="BioRender"
						organizationFullName="Science Suite Inc."
						organizationLocation="Toronto, ON"
						jobTitle="Full Stack Software Engineer"
						jobType="SWE, Co-op"
						dateString="Jan - Apr 2023"
					/>
					<EmploymentCard
						orgLogoSrc="https://static.ouorz.com/jewlr-logo.svg"
						organization="Safyre Labs"
						organizationFullName="Safyre Labs Inc."
						jobTitle="Full Stack Software Engineer"
						jobType="SWE, Co-op"
						dateString="May -  Aug 2022"
						organizationLocation="North York, ON"
					/>
					<EmploymentCard
						orgLogoSrc="https://static.ouorz.com/bitbuy_logo.png"
						organization="Bitbuy"
						organizationFullName="Bitbuy Technologies Inc."
						jobTitle="Front End Software Engineer"
						jobType="SWE, Co-op"
						dateString="Sep -  Dec 2021"
						organizationLocation="Toronto, ON"
					/>
				</div>
			</section>
			<section className="mb-24 mt-14">
				<div className="flex justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="edit" />
						</span>
						<span className="uppercase">Blog Posts</span>
					</label>
					{/* <button
						data-cy="showIndexPosts"
						onClick={() => setShowPosts(!showPosts)}
						aria-label="Toggle between posts and subscription box"
						className="effect-pressing inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm hover:shadow-inner dark:border-gray-600 dark:bg-transparent dark:text-gray-500 dark:hover:bg-gray-800">
						<span
							className={`flex h-5 w-5 duration-200 ${showPosts ? "rotate-180" : "rotate-0"}`}>
							<Icon name="arrowUp" />
						</span>
					</button> */}
				</div>
				{/* {showPosts ? (
					<div className="mt-5 animate-appear">
						<List type="index" />
					</div>
				) : ( */}
				<div className="mt-5">
					<SubscriptionBox type="sm" />
				</div>
				{/* )} */}
			</section>
		</>
	)
}

Home.layout = pageLayout

export default Home
