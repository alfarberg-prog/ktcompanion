const FACTION_URLS = {
  'blades of khaine':        'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'void-dancers':            'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'void dancers':            'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'harlequins':              'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'kommandos':               'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'pathfinders':             'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'novitiates':              'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'corsair voidscarred':     'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'voidscarred':             'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'hearthkyn salvagers':     'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'hearthkyn':               'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'hand of the archon':      'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'death korps':             'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'death korps of krieg':    'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'imperial navy breachers': 'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'navy breachers':          'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'exaction squad':          'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'farstalker kinband':      'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'farstalkers':             'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'hierotek circle':         'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'fellgor ravagers':        'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'fellgor':                 'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'tempestus aquilons':      'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'aquilons':                'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'intercession squad':      'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'intercession':            'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'vespid stingwings':       'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',
  'vespid':                  'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',
  'veteran guardsmen':       'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'guardsmen':               'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'hunter clade':            'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'skitarii':                'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'wyrmblade':               'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'genestealer cults':       'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'legionary':               'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'chaos space marines':     'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'warpcoven':               'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'thousand sons':           'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'hernkyn pioneers':        'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'pioneers':                'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'phobos strike team':      'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'phobos':                  'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'kasrkin':                 'https://wahapedia.ru/kill-team3/kill-teams/kasrkin/',
  'talons of the emperor':   'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'talons':                  'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'grey knights':            'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'inquisitorial agents':    'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'inquisition':             'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'blood angels':            'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'compurgation':            'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'sisters of battle':       'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'ork':                     'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'orks':                    'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
};

const CORE_RULES_URL = 'https://wahapedia.ru/kill-team3/the-rules/core-rules/';

function detectFactionUrl(question) {
  const q = question.toLowerCase();
  for (const [key, url] of Object.entries(FACTION_URLS)) {
    if (q.includes(key)) return url;
  }
  return null;
}

function stripHtml(html) {
  // Remove scripts, styles, nav, footer
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  html = html.replace(/<header[\s\S]*?<\/header>/gi, '');
  // Replace tags with spaces/newlines
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/p>/gi, '\n');
  html = html.replace(/<\/div>/gi, '\n');
  html = html.replace(/<\/h[1-6]>/gi, '\n');
  html = html.replace(/<[^>]+>/g, ' ');
  // Clean up whitespace
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&lt;/g, '<');
  html = html.replace(/&gt;/g, '>');
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/[ \t]+/g, ' ');
  html = html.replace(/\n{3,}/g, '\n\n');
  return html.trim();
}

async function fetchRulesContext(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; KTCompanion/1.0)' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const text = stripHtml(html);
    // Limit to ~6000 chars to stay within token budget
    return text.slice(0, 6000);
  } catch {
    return null;
  }
}

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured. Add ANTHROPIC_API_KEY to Netlify environment variables.' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  const { question } = body;
  if (!question) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing question' }) };
  }

  // Fetch relevant rules from Wahapedia
  const factionUrl = detectFactionUrl(question);
  const rulesUrl = factionUrl || CORE_RULES_URL;
  const rulesContext = await fetchRulesContext(rulesUrl);

  // Build system prompt with real rules context
  const contextNote = factionUrl
    ? `The following is the actual rules text fetched from Wahapedia for the relevant faction:\n\n${rulesContext}`
    : `The following is the actual core rules text fetched from Wahapedia:\n\n${rulesContext}`;

  const system = `You are a Kill Team 3rd Edition rules expert. You have been given actual rules text fetched directly from Wahapedia to answer this question accurately.

${rulesContext ? contextNote : 'Note: rules context could not be fetched — answer from your training knowledge and flag any uncertainty.'}

Instructions:
- Answer based on the rules text provided above, not from memory
- Quote exact rule text when it matters
- If the answer is not in the provided text, say so clearly rather than guessing
- Keep answers concise: 3-6 sentences unless the rule requires more detail
- Write in plain prose, no markdown formatting`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: system,
        messages: [
          { role: 'user', content: 'Kill Team 3rd Edition rules question: ' + question }
        ],
      }),
    });

    const rawText = await response.text();
    if (!rawText || rawText.trim() === '') {
      return { statusCode: 502, body: JSON.stringify({ error: 'Empty response from Anthropic' }) };
    }

    let data;
    try {
      data = JSON.parse(rawText);
    } catch(e) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Bad API response: ' + rawText.slice(0, 200) }) };
    }

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error ? data.error.message : 'API error ' + response.status }) };
    }

    var answer = '';
    for (var i = 0; i < (data.content || []).length; i++) {
      if (data.content[i].type === 'text') answer += data.content[i].text;
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: answer.trim() || 'No answer returned.' }),
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Function error: ' + err.message }) };
  }
};
