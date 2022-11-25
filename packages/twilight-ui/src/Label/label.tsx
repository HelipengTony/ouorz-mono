import React from 'react'
import Icon from '../Icon'
import type { LabelTypes, IconNames } from '../utils/propTypes'

interface Props {
	/**
	 * Specify the type of the label
	 */
	type: LabelTypes
	/**
	 * Specify the name of the icon to be used
	 */
	icon?: IconNames
	/**
	 * The content inside the button
	 */
	children?: React.ReactNode
	/**
	 * Preview style
	 */
	preview?: boolean
}

type NativeAttrs = Omit<React.LabelHTMLAttributes<any>, keyof Props>
export type LabelProps = Props & NativeAttrs

const Label: React.FC<LabelProps> = ({
	type = 'primary',
	icon = '',
	children = 'Label',
	preview = false,
}) => {
	switch (type) {
		case 'sticky':
			return (
				<label className="justify-center items-center flex w-auto h-auto lg:py-1 lg:px-3 py-0 px-2 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-center rounded-md text-4 lg:text-label tracking-wide text-yellow-500 align-middle">
					<span className="lg:w-7 lg:h-7 h-4 w-4">
						<Icon name="sticky" />
					</span>
				</label>
			)
		case 'primary':
			return (
				<label className="cursor-pointer justify-center font-medium items-center flex w-auto lg:px-4 lg:py-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-center rounded-md text-4 lg:text-label tracking-wide text-blue-500 dark:text-blue-300 align-middle effect-pressing">
					{icon && (
						<span className="lg:w-7 lg:h-7 h-4 w-4 lg:mr-2 mr-1">
							<Icon name={icon} />
						</span>
					)}
					{children}
				</label>
			)
		case 'secondary':
			return (
				<label className="cursor-pointer focus:animate-pulse justify-center font-medium items-center flex w-auto lg:px-4 px-2 py-1 lg:py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-center rounded-md text-4 lg:text-label tracking-wide text-gray-500 dark:text-gray-300 align-middle effect-pressing">
					{icon && (
						<span className="lg:w-7 lg:h-7 h-4 w-4 lg:mr-2 mr-1">
							<Icon name={icon} />
						</span>
					)}
					{children}
				</label>
			)
		case 'green':
			return (
				<label
					className={`group cursor-pointer justify-center font-medium items-center h-full flex w-min ${
						preview ? 'px-3 py-0.5' : 'px-4 py-1.5'
					} bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 text-center rounded-md text-xl tracking-wide text-green-500 dark:text-green-400 align-middle effect-pressing`}
				>
					{children}
					{icon && (
						<span className="w-5 h-5 opacity-0 transition-all ease-in-out -ml-5 group-hover:ml-1 group-hover:-mr-1 group-hover:opacity-100">
							<Icon name={icon} />
						</span>
					)}
				</label>
			)
		case 'gray':
			return (
				<label className="cursor-pointer justify-center font-medium items-center h-full flex w-min px-2 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-center rounded-md text-xl tracking-wide text-gray-500 dark:text-gray-300 align-middle effect-pressing">
					{icon && (
						<span className="w-7 h-7">
							<Icon name={icon} />
						</span>
					)}
				</label>
			)
	}
}

Label.displayName = 'Label'
export default Label
