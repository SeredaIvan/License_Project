import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'REST API на Next.js',
        Svg: require('@site/static/img/restapi.svg').default,
        description: (
            <>
                Простий та масштабований REST API, реалізований через маршрути Next.js <code>/api</code> — без сторонніх серверів або фреймворків.
            </>
        ),
    },
    {
        title: 'Prisma + PostgreSQL',
        Svg: require('@site/static/img/prisma.svg').default,
        description: (
            <>
                ORM Prisma забезпечує типобезпечну взаємодію з базою даних та просту міграцію. Ефективно працює з PostgreSQL та іншими SQL СУБД.
            </>
        ),
    },
    {
        title: 'Сучасний стек на Next.js 14',
        Svg: require('@site/static/img/next.svg').default,
        description: (
            <>
                Використовується App Router, Server Actions, React 18, API routes — усе оптимізовано для продуктивності та масштабування.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
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
