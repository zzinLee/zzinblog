import { getCollection } from "astro:content";

export async function GET() {
  const siteUrl = import.meta.env.SITE_URL;
  const result = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}</loc></url>
  <url><loc>${siteUrl}/posts</loc></url>
  </urlset>
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
