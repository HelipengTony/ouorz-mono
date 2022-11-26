'use client'

import { Label } from '@twilight-toolkit/ui'
import CardFooter from '~/components/Card/Footer'
import trimStr from '~/utilities/trimString'
import Link from 'next/link'
import { useDispatch } from '~/hooks'
import { setReaderRequest } from '~/store/reader/actions'

interface Props {
	item: WPPost
	sticky: boolean
}

export const CardTool = ({
	item,
	preview,
}: {
	item: WPPost
	preview: boolean
}) => {
	const dispatch = useDispatch()
	return (
		<div className="w-full whitespace-nowrap lg:grid lg:grid-cols-8 lg:gap-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 dark:bg-gray-600 overflow-hidden">
			<div
				className={`col-start-1 col-end-2 rounded-tl-md rounded-bl-md ${
					item.post_metas.fineTool.itemImgBorder
						? 'border-r border-gray-200 dark:border-gray-600'
						: ''
				}`}
				style={{
					backgroundImage: 'url(' + item.post_img.url + ')',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			/>
			<div className="col-start-2 col-end-9 grid grid-cols-2 items-center pl-3 lg:pl-0 py-2 pr-3">
				<div className="justify-center items-center">
					<h2 className="text-xl font-medium text-gray-600 dark:text-gray-200">
						{item.post_metas.fineTool.itemName}
					</h2>
					<p className="text-gray-500 dark:text-gray-400 text-ellipsis text-5">
						{item.post_metas.fineTool.itemDes}
					</p>
				</div>
				<div className="hidden lg:flex justify-end space-x-2">
					{preview && (
						<div
							data-oa="click-previewPost"
							onClick={() => {
								dispatch(setReaderRequest(item))
							}}
						>
							<Label type="gray" icon="preview" />
						</div>
					)}
					<a
						href={item.post_metas.fineTool.itemLink}
						target="_blank"
						rel="noreferrer"
					>
						<Label type="green" icon="right" preview={preview}>
							{item.post_metas.fineTool.itemLinkName}
						</Label>
					</a>
				</div>
			</div>
		</div>
	)
}

export default function CardWithImageTool({ item, sticky }: Props) {
	return (
		<div
			className={`w-full shadow-sm bg-white dark:bg-gray-800 dark:border-gray-800 rounded-md border ${
				sticky ? 'border-t-4 border-t-yellow-200 mb-6' : 'mb-6'
			}`}
		>
			<div className="p-5 lg:p-10">
				<CardTool item={item} preview={true} />
				<div className="mt-6">
					<Link href={`/post/${item.id}`}>
						<h1
							className="font-medium text-2 lg:text-listTitle text-gray-700 dark:text-white tracking-wider mb-5"
							dangerouslySetInnerHTML={{ __html: item.post_title }}
						/>
					</Link>
					<p
						className="text-gray-500 dark:text-gray-400 text-4 lg:text-3 tracking-wide leading-2 lg:leading-8 overflow-hidden text-ellipsis"
						dangerouslySetInnerHTML={{
							__html: trimStr(item.post_excerpt.four, 150),
						}}
					/>
				</div>
			</div>
			<CardFooter item={item} />
		</div>
	)
}
