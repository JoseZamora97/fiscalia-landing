import type { Lang } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";
import { privacyEn, termsEn } from "./legal.en";
import { privacyEs, termsEs } from "./legal.es";
import { useCasesEn } from "./use-cases.en";
import { useCasesEs } from "./use-cases.es";
import type { Dict, LegalDoc, UseCase } from "./types";

const DICTS: Record<Lang, Dict> = { en, es };
const USE_CASES: Record<Lang, UseCase[]> = { en: useCasesEn, es: useCasesEs };
const PRIVACY: Record<Lang, LegalDoc> = { en: privacyEn, es: privacyEs };
const TERMS: Record<Lang, LegalDoc> = { en: termsEn, es: termsEs };

export function dict(lang: Lang): Dict {
  return DICTS[lang];
}

export function useCases(lang: Lang): UseCase[] {
  return USE_CASES[lang];
}

export function useCase(lang: Lang, slug: string): UseCase | undefined {
  return USE_CASES[lang].find((c) => c.slug === slug);
}

export const USE_CASE_SLUGS = useCasesEn.map((c) => c.slug);

export function privacy(lang: Lang): LegalDoc {
  return PRIVACY[lang];
}

export function terms(lang: Lang): LegalDoc {
  return TERMS[lang];
}

export type { Dict, LegalDoc, UseCase };
