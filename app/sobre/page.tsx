import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Sobre a Talentsy Nexus",
  description: "Conheça a Talentsy Nexus, empresa de tecnologia para negócios industriais e engenharia fundada em 2025.",
  openGraph: {
    title: "Sobre a Talentsy Nexus",
    description: "Tecnologia para transformar negócios industriais e de engenharia.",
    locale: "pt_BR",
    type: "website",
  },
};

const services = [
  "Diagnóstico e identificação de melhorias",
  "Planejamento estratégico de tecnologia",
  "Transformação digital",
  "Automação de processos",
];

export default function AboutPage() {
  return (
    <main className="shell">
      <header className="page-intro">
        <span className="eyebrow">Tecnologia com propósito</span>
        <h1>Sobre a Talentsy Nexus</h1>
        <p>Uma empresa de tecnologia que ajuda negócios industriais e empresas de engenharia a conectar desafios reais às oportunidades de transformação.</p>
      </header>
      <div className="about-grid">
        <section className="about-panel">
          <span className="eyebrow">Nossa visão</span>
          <h2>Transformar complexidade em movimento.</h2>
          <p>Fundada em 2025, a Talentsy Nexus nasceu para aproximar estratégia, tecnologia e operação. Acreditamos que a inovação faz diferença quando resolve problemas concretos e cria espaço para as pessoas fazerem mais.</p>
          <p>Também acreditamos no poder das histórias para tornar ideias acessíveis. É por isso que criamos este espaço de webdramas: entretenimento que conecta tecnologia e experiência humana.</p>
        </section>
        <section className="about-panel">
          <span className="eyebrow">O que fazemos</span>
          <h2>Da estratégia à prática.</h2>
          <ul className="service-list">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </section>
        <section className="about-panel">
          <span className="eyebrow">Fundador</span>
          <h2>Matheus de Souza Silva</h2>
          <p>Fundador e CEO da Talentsy Nexus. Lidera a visão da empresa para o uso estratégico da tecnologia em negócios industriais e de engenharia.</p>
          <p className="!mb-0 !text-sm">Fundada em 2025 · [PREENCHER: cidade/país da sede]</p>
        </section>
        <section className="about-panel" id="contato">
          <span className="eyebrow">Vamos conversar</span>
          <h2>Entre em contato</h2>
          <p>Conte um pouco sobre o seu desafio. Nossa equipe ficará feliz em conhecer sua ideia.</p>
          <ContactForm />
          <p className="!mb-0 !text-xs">E-mail: [PREENCHER: e-mail de contato]</p>
        </section>
      </div>
    </main>
  );
}
