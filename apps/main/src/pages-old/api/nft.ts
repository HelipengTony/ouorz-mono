import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'

type EthNFT = {
	contract: {
		address: string
	}
	id: {
		tokenMetadata: {
			tokenType: string
		}
	}
	balance: string
	title: string
	description: string
	media: { raw: string }[]
	tokenUri: {
		raw: string
	}
}
type SolNFT = {
	name: string
	description: string
	imageUrl: string
	tokenAddress: string
}
export type ResDataType = {
	eth: EthNFT[]
	sol: SolNFT[]
}

const handler = async (
	_req: NextApiRequest,
	res: NextApiResponse<ResDataType>
) => {
	// Fetch ETH NFTs
	const ethData = await fetch(
		`${process.env.ALCHEMY_API_PATH}/getNFTs?owner=0x2650f08Da54F7019f9a3306bad0dfc8474644eAD`,
		{
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		}
	)
		.then((res) => {
			if (res.status !== 200) return []
			return res.json()
		})
		.catch((err) => {
			console.error(err)
			return []
		})

	// Only return NFTs with media content
	ethData['ownedNfts'] = ethData['ownedNfts']
		? ethData['ownedNfts'].filter((nft: EthNFT) => nft.media[0].raw !== '')
		: []

	// Fetch SOL NFTs
	const solData = await fetch(process.env.QUICK_NODE_API_PATH, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			id: 67,
			jsonrpc: '2.0',
			method: 'qn_fetchNFTs',
			params: {
				wallet: 'G9T9yXeWLyspA9xLSLwZYvAPbSNV9E2NU7jWLpQDW6Re',
				omitFields: ['provenance', 'traits'],
				page: 1,
				perPage: 40,
			},
		}),
	})
		.then((res) => {
			if (res.status !== 200) return []
			return res.json()
		})
		.catch((err) => {
			console.error(err)
			return []
		})

	if (!solData['result']) {
		solData['result'] = {
			assets: [],
		}
	}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=1200, stale-while-revalidate=600'
	)
	return res.status(200).json({
		eth: ethData['ownedNfts'],
		sol: solData['result']['assets'],
	})
}

export default withSentry(handler)
