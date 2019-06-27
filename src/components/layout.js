import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main role="main">
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> for the <a href="https://indieweb.org">IndieWeb</a>

            <p>
              Follow <a class="h-card" rel="me" href="https://www.funwhilelost.com/">funwhilelost</a> on
              {" "}
              <a href='https://twitter.com/funwhilelost' rel='me'>Twitter (@funwhilelost)</a>,
              {" "}
              <a href='https://instagram.com/funwhilelost' rel='me'>Instagram (@funwhilelost)</a>,
              {" "}
              <a href='https://social.coop/@funwhilelost' rel='me'>Mastodon (@funwhilelost@social.coop)</a>,
              {" "}
              <a href='https://github.com/funwhilelost' rel='me'>GitHub</a>, or send him an
              {" "}
              <a class="u-email" href='mailto:andy@funwhilelost.com' rel='me'>email</a>
            </p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
