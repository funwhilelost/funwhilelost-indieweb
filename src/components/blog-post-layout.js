import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import Helmet from 'react-helmet'

const BlogPostLayout = ({ children, pageContext }) => {
  const { title, author, date, summary } = pageContext.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
          <time
            className="dt-published"
            itemprop="datepublished"
            datetime={date}
          >
            {new Date(date).toISOString()}
          </time>
        </aside>
      </article>
    </Layout>
  )
}

export default BlogPostLayout
