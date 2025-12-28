// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "Qu’est-ce que cette plateforme propose ?",
//     answer:
//       "Nous proposons une solution moderne pour gérer, automatiser et optimiser vos projets numériques avec une interface simple et performante.",
//   },
//   {
//     question: "Puis-je utiliser le service gratuitement ?",
//     answer:
//       "Oui, une version gratuite est disponible avec les fonctionnalités essentielles. Des plans premium existent pour des besoins avancés.",
//   },
//   {
//     question: "Est-ce compatible mobile et desktop ?",
//     answer:
//       "Absolument. L’interface est entièrement responsive et optimisée pour tous les écrans.",
//   },
//   {
//     question: "Mes données sont-elles sécurisées ?",
//     answer:
//       "Oui. Nous utilisons des standards de sécurité modernes pour garantir la confidentialité et l’intégrité de vos données.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-20">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
//         Questions fréquentes
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-neutral-200 rounded-2xl overflow-hidden bg-white"
//           >
//             <button
//               onClick={() => toggle(index)}
//               className="w-full flex items-center justify-between px-6 py-5 text-left transition hover:bg-neutral-50"
//             >
//               <span className="text-base md:text-lg font-medium">
//                 {faq.question}
//               </span>

//               <ChevronDown
//                 className={`w-5 h-5 transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`grid transition-all duration-300 ease-in-out ${
//                 openIndex === index
//                   ? "grid-rows-[1fr] opacity-100"
//                   : "grid-rows-[0fr] opacity-0"
//               }`}
//             >
//               <div className="overflow-hidden px-6">
//                 <p className="pb-6 text-neutral-600 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels types de services de conseil financier proposez-vous ?",
    answer: `
Nous accompagnons les entreprises, institutions et porteurs de projets
dans l’ensemble de leurs problématiques financières stratégiques et opérationnelles.

Nos services couvrent notamment :
• le conseil en stratégie financière et en structuration de projets,
• l’analyse de performance financière et la mise en place d’indicateurs clés (KPI),
• l’optimisation des coûts et de la rentabilité,
• la gestion de trésorerie et des flux financiers,
• l’accompagnement à la levée de fonds et à la recherche de financements,
• le conseil en gouvernance financière et conformité réglementaire.

Notre approche repose sur une analyse approfondie de votre contexte,
des données financières fiables et des recommandations pragmatiques,
orientées résultats et durables.
    `,
  },
  {
    question: "À quels types d’entreprises s’adresse votre cabinet de consulting ?",
    answer: `
Nous intervenons auprès d’un large éventail d’organisations, quelle que soit
leur taille ou leur secteur d’activité.

Nous accompagnons aussi bien :
• les startups en phase de création ou de croissance,
• les PME et entreprises familiales souhaitant structurer leur gestion financière,
• les grandes entreprises et groupes internationaux,
• les institutions publiques et parapubliques,
• les ONG et projets à impact économique ou social.

Chaque mission est adaptée au niveau de maturité financière de l’organisation,
avec des solutions sur mesure et évolutives.
    `,
  },
  {
    question: "Comment se déroule une mission de conseil financier avec votre équipe ?",
    answer: `
Une mission débute toujours par une phase de diagnostic approfondi.
Nous analysons votre situation financière, vos processus internes,
vos objectifs stratégiques et vos contraintes opérationnelles.

Ensuite, nous structurons la mission en plusieurs étapes :
• cadrage des objectifs et des livrables,
• analyse financière détaillée et modélisation,
• identification des risques et opportunités,
• formulation de recommandations claires et priorisées,
• accompagnement dans la mise en œuvre des solutions proposées.

Tout au long de la mission, nous travaillons en étroite collaboration
avec vos équipes afin d’assurer un transfert de compétences
et une appropriation durable des résultats.
    `,
  },
  {
    question: "Comment garantissez-vous la confidentialité et la sécurité des données ?",
    answer: `
La confidentialité des informations financières est au cœur de notre engagement.

Nous appliquons des protocoles stricts de gestion des données, incluant :
• la signature d’accords de confidentialité (NDA),
• l’accès restreint aux informations sensibles,
• l’utilisation d’outils sécurisés pour le stockage et l’échange de données,
• le respect des normes et réglementations en vigueur en matière de protection des données.

Toutes les données collectées sont utilisées exclusivement dans le cadre
de la mission confiée et ne sont jamais partagées avec des tiers sans autorisation.
    `,
  },
  {
    question: "Quels sont vos facteurs de différenciation par rapport à d’autres cabinets ?",
    answer: `
Notre cabinet se distingue par une combinaison unique d’expertise technique,
de vision stratégique et de proximité avec nos clients.

Nos principaux atouts :
• une équipe pluridisciplinaire avec une forte expérience terrain,
• des méthodologies éprouvées mais flexibles,
• une approche orientée décision et création de valeur,
• une forte capacité d’adaptation aux contextes locaux et internationaux,
• un accompagnement qui va au-delà du simple diagnostic.

Nous ne livrons pas uniquement des rapports,
mais des solutions concrètes, actionnables et mesurables.
    `,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        Foire aux questions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-2xl bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-6 py-6 text-left hover:bg-neutral-50 transition"
            >
              <span className="text-base md:text-lg font-medium">
                {faq.question}
              </span>

              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6">
                <p className="pb-8 text-neutral-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
