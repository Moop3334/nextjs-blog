import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'STS Robotics'
export const siteTitle = 'Robot Fight Club'

export default function Layout({ children, home }) {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="STS Blog Website"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <Link href="https://twitter.com/STSRobotics">
          <a className={styles.footerItem1}>
            <Image
              src="/images/twitter.jpg"
              height={20}
              width={20}
              alt={name}
            />
            <h1 className={utilStyles.headingSm}>
              Twitter
            </h1>
          </a>
        </Link>
        <Link href="https://twitter.com/STSRobotics">
          <a className={styles.footerItem1}>
            <Image
              src="/images/instagram.jpg"
              height={20}
              width={20}
              alt={name}
            />
            <h1 className={utilStyles.headingSm}>
              Instagram
            </h1>
          </a>
        </Link>
      </div>
    </div>
  )
}
