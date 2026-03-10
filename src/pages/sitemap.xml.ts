import { getCollection } from "astro:content";

export async function GET() {
  const siteUrl = import.meta.env.SITE;
  const posts = (await getCollection("posts")).filter((post) => !post.data.draft);

  const postUrls = posts
    .map(
      (post) => `  <url><loc>${siteUrl}/posts/${post.id}</loc><lastmod>${post.data.date.toISOString()}</lastmod></url>`
    )
    .join("\n");

  const result = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}</loc></url>
  <url><loc>${siteUrl}/posts</loc></url>
${postUrls}
</urlset>`.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
