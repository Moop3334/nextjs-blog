import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function About({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>About Us:</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          We are STS Robot Fight Club, a FIRST Robotics team based out of Strathcona-Tweedsmir School. Our team was established during the 2020-2021 school year, and while we originally only had one team, we expanded our ranks this year to include a Grade 10 and Grade 11 Team. We will probably expand our numbers next year as well to include a Grade 12 team as well.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Our Team:</h2>
      </section>
    </Layout>
  )
}
