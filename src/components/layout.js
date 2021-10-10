/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import useLocoScroll from "../hooks/useLocoScroll";

import '../styles/materialdesignicons.min.css'
import '../styles/global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const ref = useRef(null)
  const [preloader, setPreload] = useState(true)

  useLocoScroll(!preloader)

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return
      }
    }
  }, [preloader])

  const [timer, setTimer] = React.useState(3)

  const id = React.useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreload(false)
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
    return () => clear()
  }, [])

  React.useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  if (typeof window === "undefined" || !window.document) {
    return null
  }

  

  return (
    <>
    {preloader ? (
        <div className="loader-wrapper absolute">
            <h1>Flirty flowers</h1>
            <h2>Rio de Janeiro</h2>
        </div>
      ) : (
    <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
      {/* <div className="preloader title-loading">
          <div className="center-loading">
          <div className="h-font slideup-h">C</div><div className="h-font slideup-h">E</div><div className="h-font slideup-h">G</div>
          </div>
        </div> */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
