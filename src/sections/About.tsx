import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-content scroll-mt-20 px-5 py-16 sm:px-8"
    >
      <SectionHeading id="about-heading" title={t('about.title')} />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 text-lg leading-relaxed text-muted lg:col-span-2">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border-l-4 border-accent bg-surface p-5">
            <p className="leading-relaxed text-fg">{t('about.architecture')}</p>
          </div>
          <p className="text-muted">{t('about.availability')}</p>
        </aside>
      </div>
    </section>
  );
}
