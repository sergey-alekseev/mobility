import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return  (
    <header className={clsx('hero hero--light', styles.heroBanner)}>
      <div className="container margin-vert--lg">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className={clsx(
            'button button--outline button--primary button--lg',
            styles.getStarted,
          )}
          to={useBaseUrl('docs/getting-started')}>
          Get Started
        </Link>
        <Link
          className={clsx(
            'button button--outline button--primary button--lg',
            styles.getStarted,
          )}
          to={useBaseUrl('docs/upgrading-to-version-1')}>
          Upgrading to 1.0
        </Link>
      </div>
    </header>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Mobility · Pluggable Ruby Translation Framework`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <section className="mainContainer">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
