import Image from 'next/image';
// import Layout from 'next/layout';
import Link from 'next/link';
import { getItemsInsecure } from '../database/items';
import GlassCoffeeTable from '../public/images/Glass-Coffee-Table.webp';
// import Video from 'react-native-video';
// import item1Video from '../public/images/item1-video.mp4';
import sideboard from '../public/images/Sideboard.webp';
import CookieBanner from './CookieBanner';
import GenerateButton from './GenerateButton';
import RootLayout from './layout';
import LocalStorage from './LocalStorage';
import styles from './page.module.scss';

export default async function Home() {
  const items = await getItemsInsecure();
  return (
    <RootLayout
      hasBackground={true}
      backgroundContent={
        <>
          <span className="Logo">LOGO</span>
          <video
            loop
            muted
            autoPlay
            src="/images/item2-video.mp4"
            preload="auto"
            type="video/mp4"
            className="backgroundVideo"
          />
        </>
      }
    >
      <div className={styles.test}>
        <div className={styles.descriptionWrapper}>
          <section className={styles.textSection}>
            <h1>A headline with a short claim.</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est <br />
              <br />
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <Link href="./about">
              {' '}
              <button>Our Mission </button>{' '}
            </Link>
          </section>
          <section className={styles.imageSection}>
            <Image
              src={GlassCoffeeTable}
              alt="item1"
              className={styles.imageItem2}
            />

            <video
              loop
              muted
              autoPlay
              src="/images/item1-video.mp4"
              preload="auto"
              type="video/mp4"
              className={styles.imageItem3}
            />
            <Image src={sideboard} alt="item1" className={styles.imageItem1} />
          </section>
          <section className={styles.ticker}> Our Designers</section>
          <section className={styles.textSection2}>
            <div className={styles.animationWrapper}>
              <ul>
                <li>
                  <h3>Kelly Wearstler</h3>
                </li>
                <li>
                  <h3>Nate Berkus</h3>
                </li>
                <li>
                  <h3>Joanna Gaines</h3>
                </li>
                <li>
                  <h3>Jean-Louis Deniot</h3>
                </li>
                <li>
                  <h3>Victoria Hagan</h3>
                </li>
                <li>
                  <h3>Jonathan Adler</h3>{' '}
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.textSection3}>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est <br />
              <br />
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <button>
              {' '}
              <Link href={'./items '}>Shop Products </Link>
            </button>
          </section>
          <section className={styles.ticker}> A ticker with info</section>
          <section className={styles.divider}>
            <video
              loop
              muted
              autoPlay
              src="/images/item3-video.mp4"
              preload="auto"
              type="video/mp4"
              className={styles.imageDivider}
            />
          </section>
        </div>
      </div>
    </RootLayout>
  );
}
