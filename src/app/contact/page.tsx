import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold">Discutons</h1>
        <p className="mt-3 text-sm text-muted">
          Ouvert aux opportunités et nouveaux défis. Réponse rapide par email ou LinkedIn.
        </p>
      </section>

      <Section title="Formulaire" description="Réponse rapide, format simple.">
        <Card>
          <ContactForm />
        </Card>
      </Section>

      <Section title="Infos rapides" description="Pour situer ma recherche.">
        <div className="section-grid">
          <Card title="Disponibilité">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Alternance en cours jusqu&apos;à l&apos;été 2027</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>CDI possible à partir de l&apos;été 2027</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Freelance selon les opportunités</span>
              </li>
            </ul>
          </Card>
          <Card title="Localisation">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>Basé à Lille</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>Mobile (voiture)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>Déplacements possibles</span>
              </li>
            </ul>
          </Card>
          <Card title="CV & profils">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>CV disponible sur demande</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>LinkedIn et GitHub à jour</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Liens" description="Où me trouver.">
        <div className="flex flex-wrap gap-3">
          {siteContent.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-muted transition hover:border-accent/60 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
