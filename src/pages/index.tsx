import { DeprecatedWarning } from '@components/DeprecatedWarning'
import { Faq } from '@components/Faq'
import { Help } from '@components/Help'
import Layout from '@components/Layout'
import { PagePadding } from '@components/Layout/PagePadding'
import { V4 } from '@components/V4'
import { WhatsV4 } from '@components/WhatsV4'
import { LoadingScreen } from '@pooltogether/react-components'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Suspense } from 'react'
import nextI18NextConfig from '../../next-i18next.config.js'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig))
    }
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PoolTogether V3</title>
        <meta
          name='description'
          content='A list of apps supporting the V3 PoolTogether protocol.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<LoadingScreen />}>
        <Layout>
          <PagePadding className='flex flex-col'>
            <V4 />
            <DeprecatedWarning className='mt-8' />
            <WhatsV4 className='mt-8' />
            <Help className='mt-8' />
            <Faq className='mt-20' />
          </PagePadding>
        </Layout>
      </Suspense>
    </>
  )
}

export default Home
