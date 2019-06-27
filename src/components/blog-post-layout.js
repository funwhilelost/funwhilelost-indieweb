import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import SEO from './seo'

const BlogPostLayout = ({ children, pageContext }) => {
  const { title, author, date, summary } = pageContext.frontmatter
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <article className="h-card">
        <header>
          <h1 className="p-name">{title}</h1>
        </header>
        {summary && (
          <aside>
            <p className="p-summary e-content">{summary}</p>
          </aside>
        )}
        <MDXProvider>{children}</MDXProvider>
        <aside>
          <span>Author: <span className="vcard author"><span className="fn">{author}</span></span></span>
          <div
            className="dt-published"
            itemProp="datepublished"
          >
            {date}
          </div>
        </aside>
      </article>
    </Layout>
  )
}

export default BlogPostLayout
