import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:opacity-90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:opacity-90">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Olympus Lanka Hospital",
  description: "24/7 private hospital in Tissamaharama, Sri Lanka offering emergency care, OPD, specialist consultations, X-ray, laboratory and pharmacy.",
  url: "/",
  telephone: "+94777788080",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olympus, Hambantota Road, Debarawewa",
    addressLocality: "Tissamaharama",
    postalCode: "82600",
    addressCountry: "LK",
  },
  openingHours: "Mo-Su 00:00-23:59",
  medicalSpecialty: ["Emergency", "GeneralPractice", "Cardiology", "Pediatrics", "Surgery"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Olympus Lanka Hospital — 24/7 Hospital in Tissamaharama" },
      { name: "description", content: "Olympus Lanka Hospital, Tissamaharama — 24/7 emergency care, OPD, specialist consultations, X-ray, lab and pharmacy in Southern Sri Lanka." },
      { name: "keywords", content: "Hospital in Tissamaharama, 24 hour hospital Sri Lanka, Olympus Lanka Hospital, Emergency hospital Hambantota, Private hospital Southern Province Sri Lanka" },
      { name: "author", content: "Olympus Lanka Hospital" },
      { name: "theme-color", content: "#102d3d" },
      { property: "og:site_name", content: "Olympus Lanka Hospital" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Olympus Lanka Hospital — 24/7 Hospital in Tissamaharama" },
      { property: "og:description", content: "24/7 emergency & healthcare service in Tissamaharama, Sri Lanka." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster richColors position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
