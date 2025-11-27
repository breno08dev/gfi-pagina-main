import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  const siteTitle = "GFI Soluções Metálicas";
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Título da Aba */}
      <title>{fullTitle}</title>
      
      {/* Meta Tags Principais */}
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Canonical URL (bom para evitar conteúdo duplicado) */}
      {canonical && <link rel="canonical" href={`https://www.gfisolucoes.com.br${canonical}`} />}
    </Helmet>
  );
};

export default SEO;