/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"


export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            isActive
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 370, height: 370)
              }
            }
          }
        }
      }
    }
  }
`


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/blog/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog — Page " + currentPage + " of " + numPages}
          description={
            "Stackrole base blog page " + currentPage + " of " + numPages
          }
        />
        <section class="page-title" style={{ backgroundImage: `url("assets/images/background/page-title-2.jpg")`}}>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-column" id="cstmmobiletitle">
                        <div class="content-box clearfix">
                            <div class="title pull-left">
                                <h1>Our Projects</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="project-section">
            <div class="auto-container">
		        <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div id="content_block_01">
                            <div class="content-box">
                                <div class="sec-title left">
                                    <p>Our Projects</p>
                                    <h2>Past Projects.</h2>
                                    <span class="separator"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="projects-container">
                    {posts}
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex
