import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { ServiceHero } from "@/components/sections/service/ServiceHero";
import { WhoNeedsThis } from "@/components/sections/service/WhoNeedsThis";
import { WhatsIncluded } from "@/components/sections/service/WhatsIncluded";
import { DocumentsRequired } from "@/components/sections/service/DocumentsRequired";
import { ServiceProcess } from "@/components/sections/service/ServiceProcess";
import { ServicePricing } from "@/components/sections/service/ServicePricing";
import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";
import { RelatedServices } from "@/components/sections/service/RelatedServices";
import { ServiceCTA } from "@/components/sections/service/ServiceCTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <ServiceHero service={service} />
      <WhoNeedsThis items={service.whoNeedsThis} />
      <WhatsIncluded items={service.whatsIncluded} />
      <DocumentsRequired items={service.documentsRequired} />
      <ServiceProcess steps={service.process} />
      <ServicePricing pricing={service.pricing} timeline={service.timeline} />
      <ServiceFAQ faq={service.faq} />
      <RelatedServices relatedSlugs={service.relatedSlugs} />
      <ServiceCTA service={service} />
    </main>
  );
}
