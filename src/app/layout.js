import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = localFont({
  src: "./fonts/outfit-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
});

const ovo = localFont({
  src: "./fonts/ovo-latin.woff2",
  weight: "400",
  variable: "--font-ovo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://web-portofolio-hendra.vercel.app"),
  title: "Hendra Latieful Maajid — Full Stack Developer",
  description:
    "Portofolio Hendra Latieful Maajid, Full Stack Developer dari Banyumas. Pengalaman di fintech, Laravel, Next.js, SaaS, serta integrasi AI dan RAG.",
  openGraph: {
    title: "Hendra Latieful Maajid — Full Stack Developer",
    description:
      "Membangun aplikasi web, solusi bisnis, dan pengalaman belajar berbasis AI.",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hendra Latieful Maajid — Full Stack Developer",
  },
};

const initializePreferences = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;var l=localStorage.getItem('language');if(l==='id'||l==='en')document.documentElement.lang=l;}catch(e){if(matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          id="portfolio-preferences"
          dangerouslySetInnerHTML={{ __html: initializePreferences }}
        />
      </head>
      <body className={`${outfit.variable} ${ovo.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
