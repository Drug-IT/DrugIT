import { NextSeo, NextSeoProps } from "next-seo";
import siteConfig from "../../data/config";

export const SEO = ({ title, description, ...props }: NextSeoProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ ...siteConfig.seo.openGraph, title, description }}
    titleTemplate={siteConfig.seo.titleTemplate}
    twitter={siteConfig.seo.twitter}
    {...props}
  />
);
