import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, world! I am a middle schooler from Korea who want to become a
          programmer. You can contact on{" "}
          <Link href="https://discord.com/users/782167918452146176">
            Discord
          </Link>
          . And this is my{" "}
          <Link href="https://github.com/Pincette1223">GitHub</Link> link!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

// 어쩌다 보니 포트폴리오가 됐는데;;
