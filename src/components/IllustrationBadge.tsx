import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React from 'react';
import { useLanguage } from '../i18n';

export const IllustrationBadge: React.FC = () => {
  const { t: translateOutput } = useRenderLanguage();
  const { t } = useLanguage();
  return localizeTree(<span className="inline-flex rounded-md border border-cyan-400/40 bg-slate-950 px-2 py-1 text-[11px] font-semibold text-cyan-200">{t('Ilustrasi AI')}</span>, translateOutput);
};
