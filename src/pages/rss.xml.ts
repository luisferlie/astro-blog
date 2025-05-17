import rss from '@astrojs/rss';
import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ request, params, site }) => {
    const blogPosts = await getCollection('blog');
    return rss({
        stylesheet: '/styles/rss.xsl',
        // `<title>` campo en el xml generado
        title: 'fernando Blog ',
        // `<description>` campo en el xml generado
        description: 'Guía de un humilde astronauta a las estrellas',
        // Usa el "site" desde el contexto del endpoint
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: site || '',
        // Array de `<item>`s en el xml generado
        // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
        items: blogPosts.map(({ data, slug }) => ({
            title: data.title,
            description: data.description,
            link: `/post/${slug}`,
            pubDate: data.date,
            customData: `<language>es</language>`,
        }))
        // (opcional) inyecta xml personalizado

    });
};