import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Server, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdate = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header da Página */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Política de Privacidade
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Transparência e compromisso com a proteção dos seus dados. Saiba como a GFI coleta, utiliza e protege suas informações.
          </p>
          <p className="text-sm mt-6 text-primary-foreground/60">
            Última atualização: 15 de Dezembro de 2025
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Card className="shadow-card border-none">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-slate max-w-none text-foreground">
              
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-secondary" />
                  1. Introdução
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A <strong>GFI Soluções Metálicas e Construções</strong> (CNPJ: 59.995.162/0001-50), localizada em Sertãozinho/SP, está comprometida com a privacidade e a proteção dos dados pessoais de seus clientes, parceiros e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </div>

              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-secondary" />
                  2. Dados que Coletamos
                </h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos apenas os dados estritamente necessários para viabilizar nosso atendimento comercial e técnico:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Dados de Contato:</strong> Nome, telefone (WhatsApp) e e-mail, fornecidos voluntariamente por você ao entrar em contato conosco para solicitar orçamentos.</li>
                  <li><strong>Dados do Projeto:</strong> Informações sobre sua obra, endereço e necessidades específicas compartilhadas durante as negociações.</li>
                  <li><strong>Dados de Navegação:</strong> Informações técnicas coletadas automaticamente através de cookies (como endereço IP, tipo de navegador e páginas visitadas) para melhorar o desempenho do nosso site.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-secondary" />
                  3. Finalidade do Uso dos Dados
                </h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Elaborar propostas técnicas e orçamentos personalizados;</li>
                  <li>Entrar em contato via WhatsApp ou E-mail para agendar visitas técnicas;</li>
                  <li>Formalizar contratos de prestação de serviços;</li>
                  <li>Cumprir obrigações legais e fiscais (emissão de notas fiscais).</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-secondary" />
                  4. Segurança e Compartilhamento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adotamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados. <strong>Não vendemos nem alugamos seus dados para terceiros.</strong> O compartilhamento ocorre apenas com:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>Fornecedores estritamente necessários para a execução da obra (ex: logística), sempre sob sigilo;</li>
                  <li>Órgãos públicos, quando exigido por lei ou para cumprimento de obrigações fiscais.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-secondary" />
                  5. Cookies e Tecnologias
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para entender como os visitantes interagem com nossas páginas. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador ou através do nosso banner de consentimento.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-secondary" />
                  6. Seus Direitos (LGPD)
                </h2>
                <p className="text-muted-foreground mb-4">
                  Você tem o direito de solicitar a qualquer momento:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>A confirmação da existência de tratamento de seus dados;</li>
                  <li>O acesso aos dados que possuímos sobre você;</li>
                  <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>A eliminação dos dados pessoais (exceto quando a manutenção for necessária por lei).</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Dúvidas? Entre em contato com nosso Encarregado de Dados
                </h3>
                <p className="text-muted-foreground">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail:
                  <br />
                  <a href="mailto:gabriel@gfisolucoes.com.br" className="text-secondary font-bold hover:underline mt-2 inline-block">
                    gabriel@gfisolucoes.com.br
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Endereço: Antônio José Bobato, 140 - Sertãozinho/SP
                </p>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;