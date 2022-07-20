import React from "react";
import Image from "next/image";
import { siteMetadata } from "../data/SiteMetadata";
export default function ArticleList({ articles }) {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}

const ArticleCard = ({ article }) => {
  return (
    <div>
      <button>
        <div className="group">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src={article.coverImage}
            placeholder="blur"
            blurDataURL={article.coverImage}
            width={684}
            height={800}
            layout="intrinsic"
            alt={"article cover"}
          />
          <div className="text-left w-full">
            <h3 className="mt-2 text-2xl dark:text-white">{article.title}</h3>

            <span className="text-base font-semibold flex items-center dark:text-white">
              {new Date(article.publishedDate).toLocaleDateString(
                siteMetadata.locale,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
