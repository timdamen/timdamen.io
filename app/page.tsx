import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { genPageMetadata } from './seo'

export const metadata = genPageMetadata({ title: 'Home | timdamen.io' })

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
