import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "../data/SiteMetadata";
import Nav from "./Nav";

enum PageType {
  WEBSITE = "website",
  ARTICLE = "article",
}

export function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    type: PageType.WEBSITE,
    date: null,
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
      </Head>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
