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
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description,
    url: `${siteUrl}${pathname || ``}`,
    image: `src/images/favicon.png`,
    twitterUsername,
    featuredImage: featuredImage,
    content: content || "website",
    // schema: schema || null,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:locale" content="en_US" />
      <meta name="description" content={seo.description} />
      <meta name="image" content="src/images/favicon-32x32.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta name="og:image" content={seo.featuredImage} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:type" content={seo.content} />
      {children}
    </>
  )
}
