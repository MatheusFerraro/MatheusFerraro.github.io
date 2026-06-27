import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-content scroll-mt-20 px-5 py-16 sm:px-8"
    >
      <SectionHeading
        id="skills-heading"
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t(`skills.groups.${group.id}`)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
