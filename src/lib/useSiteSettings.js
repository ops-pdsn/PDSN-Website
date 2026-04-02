import { useState, useEffect } from 'react';
import settingsJson from '@/data/siteSettings.json';

// Raw GitHub URL — always fresh on live site (no CDN cache)
const GITHUB_URL = 'https://raw.githubusercontent.com/ops-pdsn/cdn-assets/main/data/siteSettings.json';

export function useSiteSettings() {
  const [settings, setSettings] = useState(settingsJson);

  useEffect(() => {
    // 1. Try local API first — works in dev mode, always returns latest saved data immediately
    // 2. Fall back to raw GitHub — works on live static site after Publish Live
    fetch(`/api/site-settings`)
      .then(r => { if (!r.ok) throw new Error('no-local-api'); return r.json(); })
      .then(data => {
        if (data && !data.error) setSettings(prev => ({ ...prev, ...data }));
      })
      .catch(() => {
        // Local API not available (production static site) — use GitHub
        fetch(`${GITHUB_URL}?t=${Date.now()}`)
          .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then(live => {
            if (live && typeof live === 'object' && !live.error) {
              setSettings(prev => ({ ...prev, ...live }));
            }
          })
          .catch(() => {});
      });
  }, []);

  return settings;
}
