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
      <div className={styles.navbar}>
        <Link href="/">
          <b className={styles.gridItem1}>
            <Image
              src="/images/profile.jpg"
              height={24}
              width={24}
              alt={name}
            />
            <h1 className={utilStyles.navImg}>
              Home
            </h1>
          </b>
        </Link>
        <Link href="/about">
          <b className={styles.gridItem1}>
            <h1 className= {utilStyles.navTxt}>
              About Us:(WIP)
            </h1>
          </b>
        </Link>
      </div>
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
        <header>
          <div className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={124}
                  width={124}
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
          </div>
        </header>
        <main>{children}</main>
      </div>
      <div className={styles.footer}>
        <Link href="https://twitter.com/STSRobotics">
          <a className={styles.gridItem1}>
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
          <a className={styles.gridItem1}>
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
