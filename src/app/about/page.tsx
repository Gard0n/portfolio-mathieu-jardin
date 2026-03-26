import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "À propos",
  description: "Développeur Shopify et stratège e-commerce freelance basé à Lille. Découvrez mon parcours, mes compétences et mes objectifs."
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="space-y-16">
      <Section title="Identité" description="Un profil simple et clair.">
        <Card>
          <ul className="space-y-2 text-sm">
            {about.identity.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Expérience" description="Ce que j'ai fait sur le terrain.">
        <Timeline items={about.timeline} />
      </Section>

      <Section title="Formation" description="Diplômes et parcours académiques.">
        <Timeline items={about.education} />
      </Section>

      <Section
        title="Centres d'intérêt"
        description="Ce qui me nourrit en dehors du boulot."
      >
        <div className="flex flex-wrap gap-3">
          {about.interests.map((interest) => (
            <Badge key={interest}>{interest}</Badge>
          ))}
        </div>
      </Section>

      <Section title="Objectifs" description="Deux axes en parallèle.">
        <div className="section-grid">
          <Card title="Freelance">
            <ul className="space-y-2 text-sm">
              {about.goals.freelance.map((goal) => (
                <li key={goal} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Alternance & parcours">
            <ul className="space-y-2 text-sm">
              {about.goals.career.map((goal) => (
                <li key={goal} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Compétences" description="Ce que je sais faire et comment.">
        <div className="grid gap-4 md:grid-cols-2">
          {about.skills.map((skill) => (
            <Card key={skill.name} title={skill.name}>
              <p className="text-sm text-muted">{skill.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
