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
};

const CORE_RULES_URL = 'https://wahapedia.ru/kill-team3/the-rules/core-rules/';

const TOPIC_URLS = {
  'killzone':            'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'kill zone':           'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'mission':             'https://wahapedia.ru/kill-team3/the-rules/matched-play/',
  'matched play':        'https://wahapedia.ru/kill-team3/the-rules/matched-play/',
  'tac op':              'https://wahapedia.ru/kill-team3/the-rules/tac-ops/',
  'tac ops':             'https://wahapedia.ru/kill-team3/the-rules/tac-ops/',
  'universal equipment': 'https://wahapedia.ru/kill-team3/the-rules/universal-equipment/',
  'appendix':            'https://wahapedia.ru/kill-team3/the-rules/appendix/',
  'keyword':             'https://wahapedia.ru/kill-team3/the-rules/appendix/',
  'keywords':            'https://wahapedia.ru/kill-team3/the-rules/appendix/',
  'universal ploy':      'https://wahapedia.ru/kill-team3/the-rules/ploys/',
  'universal ploys':     'https://wahapedia.ru/kill-team3/the-rules/ploys/',
  'approved ops':        'https://wahapedia.ru/kill-team3/the-rules/approved-ops-2025/',
  'approved op':         'https://wahapedia.ru/kill-team3/the-rules/approved-ops-2025/',
  'approved ops 2025':   'https://wahapedia.ru/kill-team3/the-rules/approved-ops-2025/',
};

// Keywords to help find the right section in the page
const SECTION_KEYWORDS = {
  // Ploys
  'firefight ploy':     ['Firefight Ploy', 'FIREFIGHT PLOY'],
  'strategic ploy':     ['Strategic Ploy', 'STRATEGIC PLOY'],
  'tactical ploy':      ['Tactical Ploy', 'TACTICAL PLOY'],
  'ploy':               ['Firefight Ploy', 'Strategic Ploy', 'PLOY'],

  // Actions
  'normal move':        ['Normal Move', 'NORMAL MOVE'],
  'dash':               ['Dash', 'DASH'],
  'fall back':          ['Fall Back', 'FALL BACK'],
  'charge':             ['Charge', 'CHARGE'],
  'shoot':              ['Shoot', 'SHOOT'],
  'fight':              ['Fight', 'FIGHT'],
  'overwatch':          ['Overwatch', 'OVERWATCH'],
  'pick up':            ['Pick Up', 'PICK UP'],
  'action':             ['Action', 'ACTION'],

  // Orders
  'conceal':            ['Conceal', 'Conceal order', 'CONCEAL'],
  'engage':             ['Engage', 'Engage order', 'ENGAGE'],

  // Movement & Terrain
  'vantage':            ['Vantage', 'VANTAGE', 'vantage point'],
  'cover':              ['Cover', 'Light Cover', 'Heavy Cover', 'COVER'],
  'light cover':        ['Light Cover', 'LIGHT COVER'],
  'heavy cover':        ['Heavy Cover', 'HEAVY COVER'],
  'obscuring':          ['Obscuring', 'OBSCURING'],
  'traverse':           ['Traverse', 'TRAVERSE'],
  'climb':              ['Climb', 'CLIMB'],
  'jump':               ['Jump', 'JUMP'],
  'fly':                ['Fly', 'FLY'],
  'line of sight':      ['Line of Sight', 'LINE OF SIGHT'],
  'visibility':         ['Visible', 'Visibility', 'VISIBLE'],
  'coherency':          ['Coherency', 'COHERENCY'],
  'within range':       ['within range', 'Within Range'],
  'terrain':            ['Terrain', 'TERRAIN'],
  'barricade':          ['Barricade', 'BARRICADE'],
  'door':               ['Door', 'DOOR'],
  'ladder':             ['Ladder', 'LADDER'],

  // Shooting mechanics
  'hit roll':           ['Hit Roll', 'HIT ROLL'],
  'wound roll':         ['Wound Roll', 'WOUND ROLL'],
  'save':               ['Save Roll', 'SAVE', 'saving throw'],
  'armour':             ['Armour', 'Save Roll', 'ARMOUR'],
  'armor':              ['Armour', 'Save Roll', 'ARMOUR'],
  'critical hit':       ['Critical Hit', 'CRITICAL HIT'],
  'normal hit':         ['Normal Hit', 'NORMAL HIT'],
  'lethal':             ['Lethal', 'LETHAL'],
  'ceaseless':          ['Ceaseless', 'CEASELESS'],
  'balanced':           ['Balanced', 'BALANCED'],
  'rending':            ['Rending', 'RENDING'],
  'indirect':           ['Indirect', 'INDIRECT'],
  'torrent':            ['Torrent', 'TORRENT'],
  'blast':              ['Blast', 'BLAST'],
  'ap':                 ['AP', 'Armour Penetration'],
  'damage':             ['Damage', 'DAMAGE'],
  'attacks':            ['Attacks', 'attack dice'],
  'ballistic skill':    ['Ballistic Skill', 'BS'],
  'weapon skill':       ['Weapon Skill', 'WS'],

  // Fighting mechanics
  'parry':              ['Parry', 'PARRY'],
  'reroll':             ['Reroll', 'Re-roll', 'REROLL'],
  'strike first':       ['Strike First', 'STRIKE FIRST'],
  'fury':               ['Fury', 'FURY'],

  // Operative states & conditions
  'incapacitated':      ['Incapacitated', 'INCAPACITATED'],
  'injured':            ['Injured', 'INJURED'],
  'flesh wound':        ['Flesh Wound', 'FLESH WOUND'],
  'stunned':            ['Stunned', 'STUN'],
  'ready':              ['Ready', 'READY'],
  'activated':          ['Activated', 'activation'],

  // Game structure
  'turning point':      ['Turning Point', 'TURNING POINT'],
  'strategy phase':     ['Strategy Phase', 'STRATEGY PHASE'],
  'firefight phase':    ['Firefight Phase', 'FIREFIGHT PHASE'],
  'initiative':         ['Initiative', 'INITIATIVE'],
  'activation':         ['Activation', 'activate'],
  'kill point':         ['Kill Point', 'KILL POINT'],
  'victory point':      ['Victory Point', 'VP', 'VICTORY POINT'],

  // Special rules & keywords
  'leader':             ['Leader', 'LEADER'],
  'sniper':             ['Sniper', 'SNIPER'],
  'scout':              ['Scout', 'SCOUT'],
  'medic':              ['Medic', 'MEDIC'],
  'heavy':              ['Heavy', 'HEAVY'],
  'silent':             ['Silent', 'SILENT'],
  'infiltrate':         ['Infiltrate', 'INFILTRATE'],
  'reinforcement':      ['Reinforcement', 'REINFORCEMENT'],
  'scouting':           ['Scouting', 'SCOUTING'],

  // Equipment
  'equipment':          ['Equipment', 'EQUIPMENT'],
  'grenade':            ['Grenade', 'GRENADE'],
  'auspex':             ['Auspex', 'AUSPEX'],
  'breaching charge':   ['Breaching Charge', 'BREACHING CHARGE'],

  // General
  'operative':          ['Operative', 'OPERATIVE'],
  'ability':            ['Ability', 'Abilities', 'ABILITY'],
  'special rule':       ['Special Rule', 'SPECIAL RULE'],
  'unique action':      ['Unique Action', 'UNIQUE ACTION'],
  'tac op':             ['Tac Op', 'TAC OP'],
};

function detectTopicUrl(question) {
  const q = question.toLowerCase();
  for (const [key, url] of Object.entries(TOPIC_URLS)) {
    if (q.includes(key)) return url;
  }
  return null;
}

function detectFactionUrl(question) {
  const q = question.toLowerCase();
  for (const [key, url] of Object.entries(FACTION_URLS)) {
    if (q.includes(key)) return url;
  }
  return null;
}

function detectSectionKeywords(question) {
  const q = question.toLowerCase();
  for (const [topic, keywords] of Object.entries(SECTION_KEYWORDS)) {
    if (q.includes(topic)) return keywords;
  }
  return null;
}

function stripHtml(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  html = html.replace(/<header[\s\S]*?<\/header>/gi, '');
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/p>/gi, '\n');
  html = html.replace(/<\/div>/gi, '\n');
  html = html.replace(/<\/li>/gi, '\n');
  html = html.replace(/<\/h[1-6]>/gi, '\n');
  html = html.replace(/<[^>]+>/g, ' ');
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&lt;/g, '<');
  html = html.replace(/&gt;/g, '>');
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&#39;/g, "'");
  html = html.replace(/[ \t]+/g, ' ');
  html = html.replace(/\n{3,}/g, '\n\n');
  return html.trim();
}

// Extract the most relevant section from the full page text
function extractRelevantSection(fullText, sectionKeywords) {
  if (!sectionKeywords) {
    // No specific section — return a broad middle chunk that skips nav
    const start = Math.min(2000, Math.floor(fullText.length * 0.1));
    return fullText.slice(start, start + 8000);
  }

  // Find the earliest occurrence of any section keyword
  let bestIndex = -1;
  for (const kw of sectionKeywords) {
    const idx = fullText.toLowerCase().indexOf(kw.toLowerCase());
    if (idx !== -1 && (bestIndex === -1 || idx < bestIndex)) {
      bestIndex = idx;
    }
  }

  if (bestIndex === -1) {
    // Keyword not found — return middle of document
    const start = Math.min(2000, Math.floor(fullText.length * 0.1));
    return fullText.slice(start, start + 8000);
  }

  // Return 500 chars before and 7500 chars after the found section
  const start = Math.max(0, bestIndex - 500);
  return fullText.slice(start, start + 8000);
}

async function fetchRulesContext(url, sectionKeywords) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; KTCompanion/1.0)' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const fullText = stripHtml(html);
    return extractRelevantSection(fullText, sectionKeywords);
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
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured.' }) };
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

  const factionUrl = detectFactionUrl(question);
  const topicUrl = detectTopicUrl(question);
  const sectionKeywords = detectSectionKeywords(question);
  const rulesUrl = factionUrl || topicUrl || CORE_RULES_URL;
  const rulesContext = await fetchRulesContext(rulesUrl, sectionKeywords);

  const sourceLabel = factionUrl ? 'faction page' : topicUrl ? 'rules page' : 'core rules page';
  const system = `You are a Kill Team 3rd Edition rules expert. You have been given rules text fetched directly from the Wahapedia ${sourceLabel} to answer this question accurately.

RULES TEXT FROM WAHAPEDIA:
${rulesContext || 'Could not fetch rules — answer from training knowledge and flag any uncertainty.'}

END OF RULES TEXT

Instructions:
- Answer based on the rules text above, not from memory
- Quote exact rule names and text when relevant
- If the specific answer is not in the provided text, say so and suggest the user check Wahapedia directly
- Keep answers concise unless the rule requires detail
- Write in plain prose, no markdown`;

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
        messages: [{ role: 'user', content: 'Kill Team 3rd Edition rules question: ' + question }],
      }),
    });

    const rawText = await response.text();
    if (!rawText || rawText.trim() === '') {
      return { statusCode: 502, body: JSON.stringify({ error: 'Empty response from Anthropic' }) };
    }

    let data;
    try { data = JSON.parse(rawText); }
    catch(e) { return { statusCode: 502, body: JSON.stringify({ error: 'Bad API response: ' + rawText.slice(0, 200) }) }; }

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

