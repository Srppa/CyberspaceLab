/** @jsx jsx */
import { jsx } from "theme-ui"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql, Script } from "gatsby"

import Header from "./header"

import "../assets/css/animate.css"
import "../assets/css/bootstrap.css"
import "../assets/css/flaticon.css"
import "../assets/css/font-awesome-all.css"
import "../assets/css/jquery.fancybox.min.css"
import "../assets/css/responsive.css"
import "../assets/css/style.css"
import "../assets/css/switcher-style.css"
import Footer from "./footer"
import Search from "../components/search"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header />

      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><i class="fas fa-times"></i></div>
        
        <nav class="menu-box">
            <div class="nav-logo"><a href="index.html"><img src="assets/images/mobile-logo.png" alt="" title=""/></a></div>
            <div class="menu-outer"></div>
            <div class="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Location Goes Here</li>
                    <li><a href="tel:+8801682648101">(+1) 123 456 7890</a></li>
                    <li><a href="mailto:support@cyberlabspace.com">support@cyberlabspace.com</a></li>
                </ul>
            </div>
            
        </nav>
    </div>

      {children}
      <Footer />
      <Helmet>
        <script src="assets/js/jquery.js" />
        <script src="assets/js/popper.min.js"/>
        <script src="assets/js/bootstrap.min.js"/>
        <script src="assets/js/owl.js"/>
        <script src="assets/js/wow.js"/>
        <script src="assets/js/validation.js"/>
        <script src="assets/js/jquery.fancybox.js"/>
        <script src="assets/js/appear.js"/>
        <script src="assets/js/jquery.countTo.js"/>
        <script src="assets/js/scrollbar.js"/>
        <script src="assets/js/tilt.jquery.js"/>
        <script src="assets/js/jQuery.style.switcher.min.js"/>

        <script src="assets/js/script.js" />
      </Helmet>

    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
