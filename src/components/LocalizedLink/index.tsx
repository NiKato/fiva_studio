import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { getLocalizedUrl } from "../utils/getLocalizedUrls"

const LocalizedLink = ({ to, ...props }: any) => {
  const { i18n } = useTranslation()
  const language = i18n.language
  const localizedUrl = getLocalizedUrl(to, language)

  return <Link to={localizedUrl} {...props} />
}

export default LocalizedLink
