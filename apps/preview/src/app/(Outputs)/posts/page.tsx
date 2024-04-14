import { getPosts } from "@/database/getContent"
import { getPostRoute } from "@/utils/route"
import Link from "next/link"

const Posts = () => {
	const posts = getPosts()
	return posts.map((post) => {
		const date = new Date(post.data.meta.date)
		return (
			<Link href={getPostRoute(post.slug)} key={post.path}>
				<div>
					<h2>{post.data.meta.title}</h2>
					<p>{date.toString()}</p>
					<p>{post.data.meta.description}</p>
				</div>
			</Link>
		)
	})
}

export default Posts
