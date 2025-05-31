import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Backend Engineer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Skilled in building scalable, maintainable backend systems using <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Prisma</strong>, and <strong>PostgreSQL</strong>. Passionate about Domain-Driven Design, REST & GraphQL APIs, and microservices.
      </>
    ),
  },
  {
    title: 'Technical Writer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Experienced in crafting clear, concise, and engaging technical documentation and tutorials that help developers understand complex backend concepts with ease.
      </>
    ),
  },
  {
    title: 'Freelance Consultant',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Available for freelance opportunities on{' '}
        <a
          href="https://www.upwork.com/freelancers/~011e3cb80351dfc57e"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upwork
        </a>
        . Let’s work together on building exceptional backend systems and technical docs.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
