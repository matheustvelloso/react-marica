import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <h1>site</h1>
    </>
  )
}

export default memo(Home)
