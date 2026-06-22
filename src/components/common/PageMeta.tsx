import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
  image?: string
  url?: string
}

const updateMetaTag = (
  attribute: 'name' | 'property',
  key: string,
  content: string,
) => {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const PageMeta = ({ title, description, image, url }: PageMetaProps) => {
  useEffect(() => {
    document.title = title

    updateMetaTag('name', 'description', description)

    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:type', 'website')

    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:card', 'summary_large_image')

    if (image) {
      updateMetaTag('property', 'og:image', image)
      updateMetaTag('name', 'twitter:image', image)
    }

    if (url) {
      updateMetaTag('property', 'og:url', url)
    }
  }, [title, description, image, url])

  return null
}

export default PageMeta