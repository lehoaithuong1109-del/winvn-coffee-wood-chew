import SEO from '../components/layout/SEO';
import Hero from '../components/sections/Hero';
import ChallengeSection from '../components/sections/ChallengeSection';
import SolutionSection from '../components/sections/SolutionSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import FactoryStrength from '../components/sections/FactoryStrength';
import CertificatesSection from '../components/sections/CertificatesSection';
import ProcessSection from '../components/sections/ProcessSection';
import AmazonBanner from '../components/sections/AmazonBanner';
import FAQSection from '../components/sections/FAQSection';
import CatalogueSection from '../components/sections/CatalogueSection';
import { faqs } from '../data/mockData';
import { buildFaqSchema } from '../data/schema';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <SEO
        title="WINVN - Premium Coffee Wood Chew | B2B Natural Dog Chew Manufacturer Vietnam"
        description="WINVN manufactures natural coffee wood dog chews in Vietnam — OEM/ODM, private label, and wholesale for pet brands and Amazon sellers. Exported to 40+ countries."
        path="/"
        schema={buildFaqSchema(faqs)}
      />
      <Hero />
      <ChallengeSection />
      <SolutionSection />
      <BenefitsSection />
      <FactoryStrength />
      <CertificatesSection />
      <ProcessSection />
      <AmazonBanner />
      <FAQSection />
      <CatalogueSection />
    </div>
  );
}
