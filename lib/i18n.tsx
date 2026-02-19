"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "fr" | "en"

type Translations = {
  [key: string]: string | Translations
}

const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      ranges: "Nos Gammes",
      ceremonial: "Ceremonial",
      grandCru: "Grands Crus",
      daily: "Daily",
      discover: "Decouvrir",
      discoveryPack: "Pack Decouverte",
      duoCeremonial: "Pack Duo Ceremonial",
      duoGrandCru: "Pack Duo Grand Cru",
      bestsellers: "Best-Sellers",
      about: "Qui sommes-nous",
      accessories: "Accessoires",
      blog: "Blog",
      guides: "Guides",
      education: "Education",
      contact: "Contact",
      shop: "Boutique",
    },
    hero: {
      title: "L'Art du Matcha d'Exception",
      subtitle: "Directement des terroirs prestigieux de Yame et Uji, decouvrez un matcha d'une purete incomparable.",
      cta: "Decouvrir nos gammes",
      secondary: "Notre histoire",
    },
    ranges: {
      title: "Nos Gammes",
      subtitle: "Une selection rigoureuse des meilleurs terroirs japonais",
      ceremonial: {
        title: "Ceremonial",
        description: "L'excellence du matcha japonais, selectionne pour la ceremonie du the traditionnelle.",
        products: "Yame Velvet & Uji Harmony",
      },
      grandCru: {
        title: "Grands Crus",
        description: "Les plus belles recoltes, des terroirs d'exception pour les connaisseurs.",
        products: "Yame Heritage & Uji Single Garden",
      },
      daily: {
        title: "Daily",
        description: "Un matcha de qualite pour votre rituel quotidien, ideal en matcha latte.",
        products: "Matcha Latte",
      },
    },
    products: {
      origin: "Origine",
      composition: "Composition",
      tastingNotes: "Notes de degustation",
      preparation: "Preparation",
      price: "Prix",
      addToCart: "Ajouter au panier",
      reviews: "Avis clients",
      format: "Format",
      ingredients: "Ingredients",
      discover: "Decouvrir",
    },
    packs: {
      title: "Nos Packs",
      subtitle: "Des coffrets soigneusement composes pour chaque occasion",
      discovery: {
        title: "Pack Decouverte",
        description: "5 sticks individuels : 2 Ceremonial + 2 Grand Cru + 1 Daily Matcha Latte. L'ideal pour explorer notre univers.",
        contains: "Contient 5 sticks de 1g",
      },
      duoCeremonial: {
        title: "Pack Duo Ceremonial",
        description: "2 sticks de nos matchas Ceremonial Yame Velvet et Uji Harmony.",
        contains: "Contient 2 sticks de 1g",
      },
      duoGrandCru: {
        title: "Pack Duo Grand Cru",
        description: "2 sticks de nos matchas Grand Cru Yame Heritage et Uji Single Garden.",
        contains: "Contient 2 sticks de 1g",
      },
    },
    bestsellers: {
      title: "Best-Sellers",
      subtitle: "Les favoris de notre communaute",
    },
    about: {
      title: "Qui sommes-nous",
      subtitle: "L'histoire de YORI Matcha",
      text1: "YORI est ne d'une passion profonde pour le matcha japonais authentique. Notre mission : rendre accessible les meilleurs matchas du Japon, directement depuis les terroirs de Yame et Uji.",
      text2: "Chaque matcha est selectionne avec soin aupres de producteurs familiaux qui perpetuent un savoir-faire ancestral. De la recolte a la mouture sur meule de pierre, nous garantissons une qualite d'exception.",
      text3: "Nous croyons que le matcha est bien plus qu'un simple the : c'est un art de vivre, une meditation en tasse, un moment de connexion avec soi-meme.",
      values: {
        title: "Nos Valeurs",
        quality: "Qualite",
        qualityDesc: "Selection rigoureuse des meilleurs terroirs",
        authenticity: "Authenticite",
        authenticityDesc: "Relation directe avec les producteurs japonais",
        education: "Education",
        educationDesc: "Partage de la culture et des bienfaits du matcha",
      },
    },
    terroir: {
      title: "Nos Terroirs",
      subtitle: "Les origines de l'excellence",
      yame: {
        title: "Yame, Fukuoka",
        description: "Nichee dans les montagnes de la prefecture de Fukuoka, la region de Yame est celebre pour ses brumes matinales qui protegent naturellement les feuilles de the. Le terroir volcanique confere au matcha des notes douces et umami prononcees.",
      },
      uji: {
        title: "Uji, Kyoto",
        description: "Berceau historique du the japonais, Uji est reconnue depuis le XIIe siecle pour la qualite exceptionnelle de son the vert. Les conditions climatiques uniques de cette vallee creent un matcha aux aromes complexes et raffines.",
      },
    },
    grades: {
      title: "Les Grades de Matcha",
      subtitle: "Comprendre les differents niveaux de qualite",
      ceremonial: {
        title: "Grade Ceremonial",
        description: "Le plus haut grade de matcha, reserve a la ceremonie du the. Moulu sur meule de pierre, il offre une couleur vert jade intense, un gout umami profond et une texture soyeuse sans amertume.",
      },
      grandCru: {
        title: "Grand Cru",
        description: "Des matchas d'exception issus de parcelles uniques (single garden). Chaque grand cru possede sa propre identite aromatique, reflet de son terroir specifique.",
      },
      daily: {
        title: "Daily / Latte Grade",
        description: "Un matcha de qualite superieure, ideal pour la preparation de matcha latte et de recettes. Son profil gustatif plus robuste se marie parfaitement avec le lait.",
      },
    },
    education: {
      title: "Education",
      subtitle: "Maitrisez l'art du matcha",
      howTo: {
        title: "Comment preparer votre matcha",
        step1: "Tamisez 1 a 2g de matcha dans votre bol (chawan)",
        step2: "Ajoutez 70ml d'eau a 70-80 C",
        step3: "Fouettez energiquement en W avec le chasen",
        step4: "Degustez des que la mousse est onctueuse",
      },
      benefits: {
        title: "Matcha vs Cafe",
        subtitle: "Pourquoi choisir le matcha ?",
        energy: "Energie durable sans crash",
        energyDesc: "La L-theanine du matcha libere la cafeine progressivement, offrant 4 a 6h d'energie stable, contrairement au pic et crash du cafe.",
        antioxidants: "137x plus d'antioxydants",
        antioxidantsDesc: "Le matcha contient 137 fois plus de catechines EGCG que le the vert classique, un puissant antioxydant naturel.",
        calm: "Concentration calme",
        calmDesc: "L'association unique de cafeine et L-theanine favorise un etat de concentration detendue, sans nervossite.",
        detox: "Detox naturelle",
        detoxDesc: "Riche en chlorophylle, le matcha aide a purifier naturellement l'organisme.",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Explorez l'univers du matcha",
      readMore: "Lire la suite",
      articles: {
        production: {
          title: "De la feuille a la tasse : la production du matcha",
          excerpt: "Decouvrez les etapes fascinantes de la production du matcha, du champ ombrage a la mouture traditionnelle sur meule de pierre.",
        },
        transformation: {
          title: "La transformation du tencha en matcha",
          excerpt: "Plongez au coeur du processus de transformation qui donne au matcha sa texture unique et ses proprietes exceptionnelles.",
        },
        ceremony: {
          title: "La ceremonie du the : un art millenaire",
          excerpt: "Explorez les rituels et la philosophie derriere la ceremonie du the japonaise, un art qui transcende la simple degustation.",
        },
      },
    },
    accessories: {
      title: "Accessoires",
      subtitle: "Les essentiels pour une preparation parfaite",
      chasen: {
        title: "Chasen - Fouet en bambou",
        description: "Fouet traditionnel en bambou a 80 brins, essentiel pour obtenir une mousse onctueuse.",
      },
      chawan: {
        title: "Chawan - Bol a matcha",
        description: "Bol artisanal en ceramique, concu pour la preparation traditionnelle du matcha.",
      },
      chashaku: {
        title: "Chashaku - Cuillere en bambou",
        description: "Cuillere doseur en bambou sculpte a la main, pour mesurer la quantite ideale de matcha.",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Une question ? Nous sommes la pour vous.",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
        placeholder: {
          name: "Votre nom",
          email: "votre@email.com",
          subject: "Sujet de votre message",
          message: "Ecrivez votre message ici...",
        },
      },
      faq: {
        title: "Questions frequentes",
        q1: "Comment conserver mon matcha ?",
        a1: "Conservez votre matcha au refrigerateur dans son emballage d'origine, a l'abri de la lumiere et de l'humidite. Consommez-le dans les 4 semaines apres ouverture.",
        q2: "Quelle est la difference entre matcha ceremonial et daily ?",
        a2: "Le matcha ceremonial est moulu plus finement a partir des plus jeunes feuilles, offrant un gout plus doux et umami. Le daily est plus robuste, ideal pour les lattes.",
        q3: "Livrez-vous a l'international ?",
        a3: "Oui, nous livrons dans toute l'Europe. La livraison est gratuite a partir de 50 euros d'achat en France metropolitaine.",
        q4: "Comment preparer un matcha latte ?",
        a4: "Dissolvez 2g de matcha Daily dans 30ml d'eau chaude (70 C), fouettez, puis ajoutez 200ml de lait chaud ou froid mousse.",
      },
    },
    footer: {
      newsletter: {
        title: "Restez connecte",
        subtitle: "Recevez nos actualites et offres exclusives",
        placeholder: "Votre email",
        subscribe: "S'inscrire",
      },
      quickLinks: "Liens rapides",
      legal: "Mentions legales",
      terms: "Conditions generales de vente",
      privacy: "Politique de confidentialite",
      followUs: "Suivez-nous",
      rights: "Tous droits reserves.",
      madeWith: "Fait avec passion pour le matcha",
    },
  },
  en: {
    nav: {
      home: "Home",
      ranges: "Our Ranges",
      ceremonial: "Ceremonial",
      grandCru: "Grand Cru",
      daily: "Daily",
      discover: "Discover",
      discoveryPack: "Discovery Pack",
      duoCeremonial: "Duo Ceremonial Pack",
      duoGrandCru: "Duo Grand Cru Pack",
      bestsellers: "Best-Sellers",
      about: "About Us",
      accessories: "Accessories",
      blog: "Blog",
      guides: "Guides",
      education: "Education",
      contact: "Contact",
      shop: "Shop",
    },
    hero: {
      title: "The Art of Exceptional Matcha",
      subtitle: "Directly from the prestigious terroirs of Yame and Uji, discover matcha of incomparable purity.",
      cta: "Discover our ranges",
      secondary: "Our story",
    },
    ranges: {
      title: "Our Ranges",
      subtitle: "A rigorous selection from the finest Japanese terroirs",
      ceremonial: {
        title: "Ceremonial",
        description: "The excellence of Japanese matcha, selected for the traditional tea ceremony.",
        products: "Yame Velvet & Uji Harmony",
      },
      grandCru: {
        title: "Grand Cru",
        description: "The finest harvests from exceptional terroirs for true connoisseurs.",
        products: "Yame Heritage & Uji Single Garden",
      },
      daily: {
        title: "Daily",
        description: "Quality matcha for your daily ritual, perfect for matcha latte.",
        products: "Matcha Latte",
      },
    },
    products: {
      origin: "Origin",
      composition: "Composition",
      tastingNotes: "Tasting Notes",
      preparation: "Preparation",
      price: "Price",
      addToCart: "Add to Cart",
      reviews: "Customer Reviews",
      format: "Format",
      ingredients: "Ingredients",
      discover: "Discover",
    },
    packs: {
      title: "Our Packs",
      subtitle: "Carefully curated gift sets for every occasion",
      discovery: {
        title: "Discovery Pack",
        description: "5 individual sticks: 2 Ceremonial + 2 Grand Cru + 1 Daily Matcha Latte. The ideal way to explore our universe.",
        contains: "Contains 5 x 1g sticks",
      },
      duoCeremonial: {
        title: "Duo Ceremonial Pack",
        description: "2 sticks of our Ceremonial matcha: Yame Velvet and Uji Harmony.",
        contains: "Contains 2 x 1g sticks",
      },
      duoGrandCru: {
        title: "Duo Grand Cru Pack",
        description: "2 sticks of our Grand Cru matcha: Yame Heritage and Uji Single Garden.",
        contains: "Contains 2 x 1g sticks",
      },
    },
    bestsellers: {
      title: "Best-Sellers",
      subtitle: "Our community's favorites",
    },
    about: {
      title: "About Us",
      subtitle: "The YORI Matcha Story",
      text1: "YORI was born from a deep passion for authentic Japanese matcha. Our mission: to make the finest Japanese matcha accessible, sourced directly from the terroirs of Yame and Uji.",
      text2: "Each matcha is carefully selected from family producers who perpetuate ancestral know-how. From harvest to stone-milling, we guarantee exceptional quality.",
      text3: "We believe matcha is more than just tea: it's an art of living, a meditation in a cup, a moment of connection with oneself.",
      values: {
        title: "Our Values",
        quality: "Quality",
        qualityDesc: "Rigorous selection from the finest terroirs",
        authenticity: "Authenticity",
        authenticityDesc: "Direct relationships with Japanese producers",
        education: "Education",
        educationDesc: "Sharing the culture and benefits of matcha",
      },
    },
    terroir: {
      title: "Our Terroirs",
      subtitle: "The origins of excellence",
      yame: {
        title: "Yame, Fukuoka",
        description: "Nestled in the mountains of Fukuoka Prefecture, the Yame region is famous for its morning mists that naturally protect tea leaves. The volcanic terroir gives matcha pronounced sweet and umami notes.",
      },
      uji: {
        title: "Uji, Kyoto",
        description: "The historical birthplace of Japanese tea, Uji has been renowned since the 12th century for the exceptional quality of its green tea. The unique climatic conditions of this valley create matcha with complex and refined aromas.",
      },
    },
    grades: {
      title: "Matcha Grades",
      subtitle: "Understanding the different quality levels",
      ceremonial: {
        title: "Ceremonial Grade",
        description: "The highest grade of matcha, reserved for the tea ceremony. Stone-milled, it offers an intense jade green color, deep umami taste, and silky texture without bitterness.",
      },
      grandCru: {
        title: "Grand Cru",
        description: "Exceptional matcha from unique single garden plots. Each grand cru possesses its own aromatic identity, reflecting its specific terroir.",
      },
      daily: {
        title: "Daily / Latte Grade",
        description: "A superior quality matcha, ideal for matcha latte preparation and recipes. Its more robust flavor profile pairs perfectly with milk.",
      },
    },
    education: {
      title: "Education",
      subtitle: "Master the art of matcha",
      howTo: {
        title: "How to prepare your matcha",
        step1: "Sift 1-2g of matcha into your bowl (chawan)",
        step2: "Add 70ml of water at 70-80 C",
        step3: "Whisk vigorously in a W motion with the chasen",
        step4: "Enjoy once the foam is creamy",
      },
      benefits: {
        title: "Matcha vs Coffee",
        subtitle: "Why choose matcha?",
        energy: "Sustained energy without crash",
        energyDesc: "Matcha's L-theanine releases caffeine gradually, providing 4-6 hours of stable energy, unlike coffee's spike and crash.",
        antioxidants: "137x more antioxidants",
        antioxidantsDesc: "Matcha contains 137 times more EGCG catechins than regular green tea, a powerful natural antioxidant.",
        calm: "Calm focus",
        calmDesc: "The unique combination of caffeine and L-theanine promotes a state of relaxed concentration without jitters.",
        detox: "Natural detox",
        detoxDesc: "Rich in chlorophyll, matcha helps naturally purify the body.",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Explore the world of matcha",
      readMore: "Read more",
      articles: {
        production: {
          title: "From leaf to cup: matcha production",
          excerpt: "Discover the fascinating steps of matcha production, from shaded fields to traditional stone milling.",
        },
        transformation: {
          title: "The transformation of tencha into matcha",
          excerpt: "Dive into the transformation process that gives matcha its unique texture and exceptional properties.",
        },
        ceremony: {
          title: "The tea ceremony: a millennial art",
          excerpt: "Explore the rituals and philosophy behind the Japanese tea ceremony, an art that transcends simple tasting.",
        },
      },
    },
    accessories: {
      title: "Accessories",
      subtitle: "The essentials for a perfect preparation",
      chasen: {
        title: "Chasen - Bamboo Whisk",
        description: "Traditional 80-prong bamboo whisk, essential for achieving a creamy foam.",
      },
      chawan: {
        title: "Chawan - Matcha Bowl",
        description: "Artisan ceramic bowl, designed for traditional matcha preparation.",
      },
      chashaku: {
        title: "Chashaku - Bamboo Scoop",
        description: "Hand-carved bamboo measuring scoop, for the ideal amount of matcha.",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a question? We're here for you.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        placeholder: {
          name: "Your name",
          email: "your@email.com",
          subject: "Subject of your message",
          message: "Write your message here...",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How should I store my matcha?",
        a1: "Store your matcha in the refrigerator in its original packaging, away from light and humidity. Consume within 4 weeks after opening.",
        q2: "What's the difference between ceremonial and daily matcha?",
        a2: "Ceremonial matcha is more finely ground from the youngest leaves, offering a smoother, more umami taste. Daily is more robust, ideal for lattes.",
        q3: "Do you ship internationally?",
        a3: "Yes, we ship throughout Europe. Shipping is free for orders over 50 euros in metropolitan France.",
        q4: "How do I make a matcha latte?",
        a4: "Dissolve 2g of Daily matcha in 30ml of hot water (70 C), whisk, then add 200ml of hot or cold frothed milk.",
      },
    },
    footer: {
      newsletter: {
        title: "Stay connected",
        subtitle: "Receive our news and exclusive offers",
        placeholder: "Your email",
        subscribe: "Subscribe",
      },
      quickLinks: "Quick Links",
      legal: "Legal Notice",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      madeWith: "Made with passion for matcha",
    },
  },
}

function getNestedTranslation(obj: Translations, path: string): string {
  const keys = path.split(".")
  let current: string | Translations = obj
  for (const key of keys) {
    if (typeof current === "string") return path
    current = current[key]
    if (current === undefined) return path
  }
  return typeof current === "string" ? current : path
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: "fr",
  setLocale: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr")

  const t = useCallback(
    (key: string) => getNestedTranslation(translations[locale], key),
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
