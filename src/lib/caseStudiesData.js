// Case studies data — managed via /admin/case-studies
// Edits are written to src/data/caseStudies.json and reflected after the next build.

let data = [];
try {
  data = require('../data/caseStudies.json');
} catch {
  data = [];
}

export const caseStudiesData = data;
