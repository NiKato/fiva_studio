import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({
  title,
  description,
  pathname,
  children,
  featuredImage,
  content,
  schema,
}: any) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: featuredImage || "https://fivastudio.b-cdn.net/og.png",
    twitterUsername,
    content: content || "website",
    // schema: schema || null,
  }

  return (
    <>
      <title>{seo.title}</title>

      {/* Basic Meta */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph Meta */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.content} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />

      {children}
    </>
  )
}
