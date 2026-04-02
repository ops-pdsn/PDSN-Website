import { useEffect, useState } from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';

const CDN_BASE = 'https://raw.githubusercontent.com/ops-pdsn/cdn-assets/main/data';

/* ─────────────────────────────────────────
   Dynamic case study page for CMS-managed
   case studies (stored in caseStudies.json).

   Individual static pages (nia.js, agrasen.js,
   etc.) take precedence for their own slugs.
───────────────────────────────────────── */
export default function DynamicCaseStudy({ study: initialStudy }) {
  const [study, setStudy] = useState(initialStudy);

  // Re-fetch from CDN on mount so edits appear without rebuild
  useEffect(() => {
    if (!initialStudy?.slug) return;
    fetch(`${CDN_BASE}/caseStudies.json?t=${Date.now()}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(all => {
        const live = all.find(s => s.slug === initialStudy.slug);
        if (live) setStudy(live);
      })
      .catch(() => {});
  }, [initialStudy?.slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center text-white/40 text-sm">
        Case study not found.
      </div>
    );
  }

  const category = study.category || 'DOOH';

  return (
    <CaseStudyLayout
      metaTitle={`${study.title} | Case Study | PDSN`}
      metaDesc={study.excerpt || study.summary || ''}
      metaUrl={`https://pdsn.in/case-studies/${study.slug}`}
      title={study.title}
      category={category}
      youtubeId={study.videoId || ''}
      solutionText={study.excerpt || study.summary || ''}
      resultText={study.result || ''}
    >
      {study.content ? (
        <div
          className="prose prose-invert prose-sm max-w-none [&>p]:mb-4 [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-1"
          dangerouslySetInnerHTML={{ __html: study.content }}
        />
      ) : (
        <p className="text-white/60">{study.summary}</p>
      )}
    </CaseStudyLayout>
  );
}

export async function getStaticPaths() {
  let slugs = [];
  try {
    const data = require('../../data/caseStudies.json');
    slugs = data.map(s => s.slug).filter(Boolean);
  } catch {}
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let study = null;
  try {
    const data = require('../../data/caseStudies.json');
    study = data.find(s => s.slug === params.slug) || null;
  } catch {}
  if (!study) return { notFound: true };
  return { props: { study } };
}
