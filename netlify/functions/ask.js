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

// Maps known faction-specific equipment/ability/operative names to their faction URL
const FACTION_ITEMS = {
  // ── VOID-DANCERS ──────────────────────────────────────────────────────
  'shimmershield':          'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'harlequins kiss':        'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  "harlequin's kiss":       'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'fusion pistol':          'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'choreographer':          'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'troupe master':          'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'mirror aegis':           'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'prismatic cannon':       'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'veil of tears':          'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'cegorach':               'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'motley':                 'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'shadowseer':             'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',
  'death jester':           'https://wahapedia.ru/kill-team3/kill-teams/void-dancers/',

  // ── BLADES OF KHAINE ──────────────────────────────────────────────────
  'howling banshee':        'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'striking scorpion':      'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'exarch':                 'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'mandiblaster':           'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'scorpion chainsword':    'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'executioner':            'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'mirrorswords':           'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'war shout':              'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'acrobatic':              'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'khaine':                 'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'dire avenger':           'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'dire avengers':          'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'avenger exarch':         'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'avenger shuriken':       'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'shuriken catapult':      'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'diresword':              'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',
  'power glaive':           'https://wahapedia.ru/kill-team3/kill-teams/blades-of-khaine/',

  // ── KOMMANDOS ─────────────────────────────────────────────────────────
  'bomb squig':             'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'rokkit pistol':          'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'burna':                  'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'kommando nob':           'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'snipa boy':              'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'dakka boy':              'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'breacha boy':            'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'grot':                   'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',
  'waaagh':                 'https://wahapedia.ru/kill-team3/kill-teams/kommandos/',

  // ── PATHFINDERS ───────────────────────────────────────────────────────
  'recon drone':            'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'rail rifle':             'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'ion rifle':              'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'grav inhibitor':         'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'shas':                   'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'pulse carbine':          'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'markerlight':            'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'pathfinder ui':          'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',
  'tau':                    'https://wahapedia.ru/kill-team3/kill-teams/pathfinders/',

  // ── NOVITIATES ────────────────────────────────────────────────────────
  'novitiate superior':     'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'penitent':               'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'condemnor':              'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'flail of the faithful':  'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'purgatus':               'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'ministorum':             'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'dialogus':               'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'imagifier':              'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'repentia':               'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',
  'famulous':               'https://wahapedia.ru/kill-team3/kill-teams/novitiates/',

  // ── CORSAIR VOIDSCARRED ───────────────────────────────────────────────
  'voidscarred felarch':    'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'soul weaver':            'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'way seeker':             'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'shade runner':           'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'corsair kurnite':        'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'voidreaver':             'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',
  'felarch':                'https://wahapedia.ru/kill-team3/kill-teams/corsair-voidscarred/',

  // ── HEARTHKYN SALVAGERS ───────────────────────────────────────────────
  'etacarn plasma':         'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'magna-rail':             'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'kin warden':             'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'huntr':                  'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'theyn':                  'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'leagues of votann':      'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'votann':                 'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'grudge':                 'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',
  'ancestor core':          'https://wahapedia.ru/kill-team3/kill-teams/hearthkyn-salvagers/',

  // ── HAND OF THE ARCHON ────────────────────────────────────────────────
  'kabalite':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'sybarite':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'blaster':                'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'shredder':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'drukhari':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'soul trap':              'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'incubus':                'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'klaivex':                'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'wych':                   'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'hekatrix':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'agoniser':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'splinter rifle':         'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'phantasm':               'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',
  'power from pain':        'https://wahapedia.ru/kill-team3/kill-teams/hand-of-the-archon/',

  // ── DEATH KORPS OF KRIEG ──────────────────────────────────────────────
  'grenadier':              'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'watchmaster':            'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'mole mortar':            'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'krieg':                  'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',
  'demo charge':            'https://wahapedia.ru/kill-team3/kill-teams/death-korps-of-krieg/',

  // ── IMPERIAL NAVY BREACHERS ───────────────────────────────────────────
  'void sergeant':          'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'navis':                  'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'hatchcutter':            'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'boarding sabre':         'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'endurant':               'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'breachers':              'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'gheistskull':            'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',
  'armsman':                'https://wahapedia.ru/kill-team3/kill-teams/imperial-navy-breachers/',

  // ── EXACTION SQUAD ────────────────────────────────────────────────────
  'vigilant':               'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'arbites':                'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'proctor':                'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'cyber-mastiff':          'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'mastiff':                'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'executioner maul':       'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'adeptus arbites':        'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'shock maul':             'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',
  'lawbringer':             'https://wahapedia.ru/kill-team3/kill-teams/exaction-squad/',

  // ── FARSTALKER KINBAND ────────────────────────────────────────────────
  'kroot':                  'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'krootox':                'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'kroot hound':            'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'trail shaper':           'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'kill broker':            'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'kroot rifle':            'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',
  'kinband':                'https://wahapedia.ru/kill-team3/kill-teams/farstalker-kinband/',

  // ── HIEROTEK CIRCLE ───────────────────────────────────────────────────
  'cryptek':                'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'canoptek':               'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'plasmacyte':             'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'acanthrite':             'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'apprentek':              'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'necron':                 'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'reanimation':            'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'living metal':           'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'aeonstave':              'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',
  'voltaic staff':          'https://wahapedia.ru/kill-team3/kill-teams/hierotek-circle/',

  // ── FELLGOR RAVAGERS ──────────────────────────────────────────────────
  'fellgor shaman':         'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'beastgor':               'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'pestigor':               'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'beastman':               'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'chaos bray':             'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'gore-drenched':          'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',
  'runehorn':               'https://wahapedia.ru/kill-team3/kill-teams/fellgor-ravagers/',

  // ── TEMPESTUS AQUILONS ────────────────────────────────────────────────
  'aquilon':                'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'scion':                  'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'tempestor':              'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'hot-shot':               'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'hotshot':                'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'volley gun':             'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',
  'taurox':                 'https://wahapedia.ru/kill-team3/kill-teams/tempestus-aquilons/',

  // ── INTERCESSION SQUAD ────────────────────────────────────────────────
  'bolt carbine':           'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'auto bolt rifle':        'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'aggressor':              'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'intercessor':            'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'infiltrator comms':      'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'incursor sergeant':      'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'eliminator':             'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'las fusil':              'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',
  'bolt sniper':            'https://wahapedia.ru/kill-team3/kill-teams/intercession-squad/',

  // ── VETERAN GUARDSMEN ─────────────────────────────────────────────────
  'veteran sergeant':       'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'confidant':              'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'spotter':                'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'hardened veteran':       'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'trooper':                'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'ogryn':                  'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'comms operator':         'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',
  'medi-pack':              'https://wahapedia.ru/kill-team3/kill-teams/veteran-guardsmen/',

  // ── HUNTER CLADE ─────────────────────────────────────────────────────
  'skitarii ranger':        'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'skitarii vanguard':      'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'sicarian':               'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'ruststalker':            'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'sicarian infiltrator':   'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'galvanic rifle':         'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'radium carbine':         'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'omnispex':               'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'phosphor':               'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'arc rifle':              'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',
  'data-tether':            'https://wahapedia.ru/kill-team3/kill-teams/hunter-clade/',

  // ── WYRMBLADE ─────────────────────────────────────────────────────────
  'hybrid metamorph':      'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'neophyte':               'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'acolyte hybrid':         'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'kelermorph':             'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'locus':                  'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'sanctus':                'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'purestrain':             'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'genestealer':            'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'cult ambush':            'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',
  'four armed':             'https://wahapedia.ru/kill-team3/kill-teams/wyrmblade/',

  // ── LEGIONARY ─────────────────────────────────────────────────────────
  'aspiring champion':      'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'icon bearer':            'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'balefire acolyte':       'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'chaos bolter':           'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'accursed weapon':        'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'mark of chaos':          'https://wahapedia.ru/kill-team3/kill-teams/legionary/',
  'undivided':              'https://wahapedia.ru/kill-team3/kill-teams/legionary/',

  // ── WARPCOVEN ─────────────────────────────────────────────────────────
  'tzaangor':               'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'rubric marine':          'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'rubricae':               'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'sorcerer':               'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'inferno bolt':           'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'warpflame pistol':       'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'tzeentch':               'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'psyker':                 'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',
  'cabal ritual':           'https://wahapedia.ru/kill-team3/kill-teams/warpcoven/',

  // ── HERNKYN PIONEERS ──────────────────────────────────────────────────
  'hernkyn':                'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'cthonian':               'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'ironhead':               'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'pan spectral scanner':   'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'hylas':                  'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',
  'magna-coil':             'https://wahapedia.ru/kill-team3/kill-teams/hernkyn-pioneers/',

  // ── PHOBOS STRIKE TEAM ────────────────────────────────────────────────
  'reiver':                 'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'incursor':               'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'suppressed bolt':        'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'grapnel launcher':       'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',
  'mark of the imperium':   'https://wahapedia.ru/kill-team3/kill-teams/phobos-strike-team/',

  // ── KASRKIN ───────────────────────────────────────────────────────────
  'scion of cadia':         'https://wahapedia.ru/kill-team3/kill-teams/kasrkin/',
  'cadian':                 'https://wahapedia.ru/kill-team3/kill-teams/kasrkin/',
  'hot-shot lasgun':        'https://wahapedia.ru/kill-team3/kill-teams/kasrkin/',

  // ── TALONS OF THE EMPEROR ─────────────────────────────────────────────
  'custodian':              'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'allarus':                'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'vertus praetor':         'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'sisters of silence':     'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'guardian spear':         'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'castellan axe':          'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',
  'pyrithite spear':        'https://wahapedia.ru/kill-team3/kill-teams/talons-of-the-emperor/',

  // ── GREY KNIGHTS ──────────────────────────────────────────────────────
  'grey knight':            'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'paladin':                'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'purifier':               'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'purgation':              'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'nemesis force':          'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'psycannon':              'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'warding stave':          'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'incinerator':            'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',
  'psilencer':              'https://wahapedia.ru/kill-team3/kill-teams/grey-knights/',

  // ── INQUISITORIAL AGENTS ──────────────────────────────────────────────
  'inquisitor':             'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'acolyte warband':        'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'jokaero':                'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'deathwatch':             'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'daemonhost':             'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',
  'penitent engine':        'https://wahapedia.ru/kill-team3/kill-teams/inquisitorial-agents/',

  // ── BLOOD ANGELS ─────────────────────────────────────────────────────
  'blood angel':            'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'sanguinary':             'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'death company':          'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'black rage':             'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'red thirst':             'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'glaive encarmine':       'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',
  'inferno pistol':         'https://wahapedia.ru/kill-team3/kill-teams/blood-angels/',

  // ── VESPID STINGWINGS ─────────────────────────────────────────────────
  'stingwing':              'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',
  'strain leader':          'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',
  'neutron carbine':        'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',
  'compound eyes':          'https://wahapedia.ru/kill-team3/kill-teams/vespid-stingwings/',

  // ── COMPURGATION ─────────────────────────────────────────────────────
  'canoness':               'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'battle sister':          'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'seraphim':               'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'zephyrim':               'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'celestian':              'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'act of faith':           'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'miracle dice':           'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
  'ardent blade':           'https://wahapedia.ru/kill-team3/kill-teams/compurgation/',
};

function detectFactionItem(question) {
  const q = question.toLowerCase();
  const sorted = Object.entries(FACTION_ITEMS).sort((a, b) => b[0].length - a[0].length);
  for (const [item, url] of sorted) {
    if (q.includes(item)) return { url, item };
  }
  return null;
}

const FACTION_NAMES_FOR_AI = Object.keys(FACTION_URLS).filter(k => k.length > 4);

async function detectFactionViaAI(question, apiKey) {
  // Cheap single-token classification call to identify faction
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 20,
        system: 'You identify which Kill Team faction a question is about. Reply with ONLY the faction name from the list, exactly as written, or "none" if unclear. Factions: ' + FACTION_NAMES_FOR_AI.join(', '),
        messages: [{ role: 'user', content: question }],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const reply = (data.content[0]?.text || '').trim().toLowerCase();
    if (reply === 'none' || reply === '') return null;
    // Find matching URL — only check if reply contains a known key, not the reverse
    for (const [key, url] of Object.entries(FACTION_URLS)) {
      if (reply.includes(key)) return url;
    }
    return null;
  } catch {
    return null;
  }
}

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
  'vantage':             'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'terrain':             'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'light terrain':       'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'heavy terrain':       'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'traversable':         'https://wahapedia.ru/kill-team3/the-rules/killzones/',
  'barricade':           'https://wahapedia.ru/kill-team3/the-rules/killzones/',
};

// Keywords to help find the right section in the page
const SECTION_KEYWORDS = {
  // Ploys
  'firefight ploy':     ['Firefight Ploy', 'FIREFIGHT PLOY'],
  'strategic ploy':     ['Strategic Ploy', 'STRATEGIC PLOY'],
  'tactical ploy':      ['Tactical Ploy', 'TACTICAL PLOY'],
  'ploy':               ['Firefight Ploy', 'Strategic Ploy', 'PLOY'],

  // Actions — include specific phrases from the actual rules sections
  'normal move':        ['Normal Move', 'NORMAL MOVE', 'Normal Move action', 'make a Normal Move'],
  'dash':               ['Dash', 'DASH', 'Dash action', 'make a Dash move'],
  'fall back':          ['Fall Back', 'FALL BACK', 'Fall Back action', 'make a Fall Back move'],
  'charge':             ['Charge action', 'CHARGE', 'make a Charge move', 'Charge move', 'within Engagement Range'],
  'shoot':              ['Shoot action', 'SHOOT', 'make a shooting attack'],
  'fight':              ['Fight action', 'FIGHT', 'make a combat attack', 'resolve combat'],
  'overwatch':          ['Overwatch', 'OVERWATCH', 'Overwatch action'],
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
  'engagement range':   ['Engagement Range', 'ENGAGEMENT RANGE', 'Engagement Range of an enemy'],
  'control range':      ['Control Range', 'CONTROL RANGE', 'within control range'],
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

function detectTopicUrls(question) {
  const q = question.toLowerCase();
  // Sort by key length descending so more specific matches win
  const sorted = Object.entries(TOPIC_URLS).sort((a, b) => b[0].length - a[0].length);
  const urls = [];
  for (const [key, url] of sorted) {
    if (q.includes(key) && !urls.includes(url)) {
      urls.push(url);
    }
  }
  return urls;
}

// Classify question complexity for model routing
// Complex questions (rule interactions, edge cases) → Sonnet
// Simple questions (stat lookups, factual) → Haiku
function isComplexQuestion(question) {
  const q = question.toLowerCase();
  const complexPatterns = [
    /\bcan\s+(i|you|my|we|a|an)\b/,
    /\bdoes\b.*\b(work|interact|stack|combine|affect|apply|override|prevent|allow)\b/,
    /\bwhat\s+happens\b/,
    /\bif\s+(i|you|my|we|a|an)\b/,
    /\b(allowed|legal|permitted|possible|able to)\b/,
    /\b(during|while|after|before)\b.*\b(action|move|charge|shoot|fight|activation)\b/,
    /\b(vs|versus|against|between|or)\b.*\b(rule|ability|interact)\b/,
    /\b(both|two|multiple)\b.*\b(operatives?|enemies?|targets?|actions?)\b/,
    /\b(interrupt|react|respond|counter|prevent|negate|override)\b/,
    /\b(how|when|where)\b.*\b(interact|resolve|trigger|apply)\b/,
    /\b(still|also|even if|despite|regardless)\b/,
    /\b(simultaneously|at the same time|in addition)\b/,
    /\bpast\b.*\benemy\b/,
    /\bengage\b.*\bmultiple\b/,
  ];
  return complexPatterns.some(p => p.test(q));
}

function detectSectionKeywords(question) {
  const q = question.toLowerCase();
  const allKeywords = [];
  // Short keywords that cause false substring matches need word-boundary checks
  const WORD_BOUNDARY_KEYS = new Set(['ap', 'fly', 'dash', 'save', 'heavy', 'blast']);
  for (const [topic, keywords] of Object.entries(SECTION_KEYWORDS)) {
    if (WORD_BOUNDARY_KEYS.has(topic)) {
      const regex = new RegExp(`\\b${topic}\\b`, 'i');
      if (regex.test(q)) allKeywords.push(...keywords);
    } else {
      if (q.includes(topic)) allKeywords.push(...keywords);
    }
  }
  return allKeywords.length > 0 ? [...new Set(allKeywords)] : null;
}

function stripHtml(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  html = html.replace(/<header[\s\S]*?<\/header>/gi, '');
  // Strip Wahapedia sidebar, settings panels, and ad sections
  html = html.replace(/<aside[\s\S]*?<\/aside>/gi, '');
  html = html.replace(/<div[^>]*class="[^"]*(?:sidebar|side-nav|menu|modal|popup|ad-)[^"]*"[\s\S]*?<\/div>/gi, '');
  html = html.replace(/<img[^>]*>/gi, ''); // Strip all images
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
// Finds keyword matches but skips early ones (likely table of contents) when later matches exist
function extractRelevantSection(fullText, sectionKeywords, largeContext) {
  const windowSize = largeContext ? 20000 : 12000;

  if (!sectionKeywords) {
    return fullText.slice(0, windowSize);
  }

  // Find ALL occurrences of each keyword
  const allMatches = [];
  const lowerText = fullText.toLowerCase();
  for (const kw of sectionKeywords) {
    const lowerKw = kw.toLowerCase();
    let searchFrom = 0;
    while (searchFrom < lowerText.length) {
      const idx = lowerText.indexOf(lowerKw, searchFrom);
      if (idx === -1) break;
      allMatches.push(idx);
      searchFrom = idx + lowerKw.length;
    }
  }

  if (allMatches.length === 0) {
    return fullText.slice(0, windowSize);
  }

  allMatches.sort((a, b) => a - b);

  // Skip matches in the first 10% of the document (likely ToC/overview) if later matches exist
  const tocThreshold = Math.min(3000, Math.floor(fullText.length * 0.1));
  const deepMatches = allMatches.filter(idx => idx > tocThreshold);
  const bestIndex = deepMatches.length > 0 ? deepMatches[0] : allMatches[0];

  const start = Math.max(0, bestIndex - 500);
  return fullText.slice(start, start + windowSize);
}

// In-memory cache for fetched pages (persists across warm invocations)
const pageCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

async function fetchRulesContext(url, sectionKeywords, largeContext) {
  try {
    const now = Date.now();
    let fullText;
    const cached = pageCache.get(url);
    if (cached && (now - cached.ts) < CACHE_TTL_MS) {
      fullText = cached.text;
    } else {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; KTCompanion/1.0)' },
      });
      if (!res.ok) return null;
      const html = await res.text();
      fullText = stripHtml(html);
      pageCache.set(url, { text: fullText, ts: now });
    }
    return extractRelevantSection(fullText, sectionKeywords, largeContext);
  } catch {
    return null;
  }
}

// Targeted extraction: find a specific item deep in a page
// Used when the main extraction missed the item we know should be there
function extractAroundItem(fullText, itemName, windowSize) {
  const lowerText = fullText.toLowerCase();
  const lowerItem = itemName.toLowerCase();
  // Find ALL occurrences and pick the one most likely to be the rule definition
  // (longer surrounding context = more likely to be the actual rule, not a ToC mention)
  let bestIdx = -1;
  let bestScore = 0;
  let searchFrom = 0;
  while (searchFrom < lowerText.length) {
    const idx = lowerText.indexOf(lowerItem, searchFrom);
    if (idx === -1) break;
    // Score: prefer matches with more text after them on the same "line" (rule definitions are longer)
    const lineEnd = lowerText.indexOf('\n', idx);
    const lineLen = lineEnd === -1 ? lowerText.length - idx : lineEnd - idx;
    if (lineLen > bestScore) {
      bestScore = lineLen;
      bestIdx = idx;
    }
    searchFrom = idx + lowerItem.length;
  }
  if (bestIdx === -1) return null;
  const start = Math.max(0, bestIdx - 500);
  return fullText.slice(start, start + windowSize);
}

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'API key not configured.' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  const { question } = body;
  if (!question) {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Missing question' }) };
  }
  if (question.length > 500) {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Question too long (max 500 characters)' }) };
  }

  // 1. Fast keyword detection — find up to two factions
  const q = question.toLowerCase();
  const allFactionEntries = Object.entries(FACTION_URLS).sort((a,b) => b[0].length - a[0].length);
  const detectedFactionUrls = [];
  const detectedItemNames = []; // Track matched item names for targeted extraction
  for (const [key, url] of allFactionEntries) {
    if (q.includes(key) && !detectedFactionUrls.includes(url)) {
      detectedFactionUrls.push(url);
      if (detectedFactionUrls.length === 2) break;
    }
  }
  // Check faction items if we haven't found anything yet
  if (detectedFactionUrls.length === 0) {
    const itemMatch = detectFactionItem(question);
    if (itemMatch) {
      detectedFactionUrls.push(itemMatch.url);
      detectedItemNames.push(itemMatch.item);
    }
  }
  // Also check faction items even when faction URL was found — we want the item name for extraction targeting
  if (detectedItemNames.length === 0) {
    const itemMatch = detectFactionItem(question);
    if (itemMatch) detectedItemNames.push(itemMatch.item);
  }
  // 2. AI classification if still nothing found
  if (detectedFactionUrls.length === 0) {
    const aiUrl = await detectFactionViaAI(question, apiKey);
    if (aiUrl) detectedFactionUrls.push(aiUrl);
  }

  const topicUrls = detectTopicUrls(question);
  let sectionKeywords = detectSectionKeywords(question);
  // Add detected item names as section keywords so extraction targets the right part of the page
  if (detectedItemNames.length > 0) {
    const itemKeywords = detectedItemNames.flatMap(name => [name, name.charAt(0).toUpperCase() + name.slice(1)]);
    sectionKeywords = sectionKeywords ? [...sectionKeywords, ...itemKeywords] : itemKeywords;
  }
  const isListQuestion = /\b(?:list|complete list|every|each of the)\b/.test(question.toLowerCase());

  // Determine question complexity for model routing
  const isComplex = isComplexQuestion(question);

  // Always fetch core rules — disputes almost always involve core + faction rules
  // Also fetch terrain/killzones if relevant
  const terrainTopics = ['vantage', 'terrain', 'barricade', 'traversable'];
  const isTerrainQ = terrainTopics.some(t => q.includes(t));

  const fetchUrls = new Set([CORE_RULES_URL]);
  detectedFactionUrls.forEach(u => fetchUrls.add(u));
  topicUrls.forEach(u => fetchUrls.add(u));
  if (isTerrainQ) fetchUrls.add('https://wahapedia.ru/kill-team3/the-rules/killzones/');

  // Fetch all relevant pages in parallel
  const fetchedTexts = await Promise.all(
    [...fetchUrls].map(url => fetchRulesContext(url, sectionKeywords, isListQuestion))
  );
  let rulesContext = fetchedTexts.filter(Boolean).join('\n\n---\n\n');

  // Verify: if we detected specific items, check the extracted text contains them
  // If not, do a targeted extraction from the cached full page text
  if (detectedItemNames.length > 0) {
    const contextLower = rulesContext.toLowerCase();
    for (const itemName of detectedItemNames) {
      if (!contextLower.includes(itemName.toLowerCase())) {
        // Item not found in extracted context — search cached pages for a targeted window
        for (const url of detectedFactionUrls) {
          const cached = pageCache.get(url);
          if (cached) {
            const targeted = extractAroundItem(cached.text, itemName, 8000);
            if (targeted) {
              rulesContext += '\n\n---\nTARGETED EXTRACTION for ' + itemName + ':\n' + targeted;
              break;
            }
          }
        }
      }
    }
  }

  const sourceLabel = detectedFactionUrls.length > 0 ? 'faction and core rules pages' : topicUrls.length > 0 ? 'rules page and core rules' : 'core rules page';
  const system = `You are a Kill Team 3rd Edition rules referee. Players come to you mid-game to resolve rules disputes and answer rules questions. You give clear, definitive rulings.

RULES TEXT FROM WAHAPEDIA (${sourceLabel}):
${rulesContext || 'Could not fetch rules — answer from training knowledge and flag any uncertainty.'}

END OF RULES TEXT

REASONING EXAMPLES — follow this rigorous approach:

Example 1 — Read what a rule ACTUALLY prohibits, not what you assume it prohibits:
Q: "If my operative enters control range of an enemy during a Charge, can it keep moving?"
Rule says: "it cannot leave that operative's control range"
CORRECT reasoning: The rule constrains WHERE the operative can be (must stay within range). It does NOT say "must stop moving." The operative can keep moving freely — including past and around the enemy — as long as it remains within control range throughout. A positional constraint is not a movement stop.
WRONG reasoning: "Once you enter control range you must stop" — this adds a restriction the rule does not state.

Example 2 — A rule that explicitly limits to one:
Q: "Can my operative fight two enemies it is in control range of?"
Rule says: "select one valid target within control range of the active operative"
CORRECT reasoning: The word "one" explicitly limits you to a single target per Fight action. Even if multiple enemies are in range, you pick one.

Example 3 — Absence of prohibition is permission:
Q: "Can I use both a Strategic Ploy and a Firefight Ploy in the same turning point?"
CORRECT reasoning: The rules define when each ploy type can be used but never state they are mutually exclusive. Since no rule prohibits using both, you can.

Instructions:
- Start your response with exactly "VERIFIED:" if your ruling is clearly supported by the rules text above
- Start your response with exactly "UNVERIFIED:" if you are drawing on training knowledge because the answer is not in the provided text
- When using UNVERIFIED: still give a full, definitive answer — never refuse or say you cannot answer
- CRITICAL: Only cite restrictions that are EXPLICITLY written in the rules. If a rule does not say "cannot", "must not", or "only", do not invent that restriction. Absence of a prohibition is permission.
- CRITICAL: Read constraints precisely. "Cannot leave X range" means "must stay within X range" — it does NOT mean "must stop moving". Distinguish between constraints on POSITION and constraints on MOVEMENT.
- For dispute questions: identify which rules are in tension, quote the exact relevant rule text, then give a clear ruling
- For factual questions: lead with the direct answer, then cite the relevant rule
- Be definitive — players need a ruling, not a discussion. Say "the ruling is" not "it depends"
- Keep answers concise: 2-4 sentences for simple questions, up to 8 for complex interactions
- Write in plain prose, no markdown, no bullet points`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: isComplex ? 'claude-sonnet-4-5-20250929' : 'claude-haiku-4-5-20251001',
        max_tokens: 2048,
        system: system,
        messages: [{ role: 'user', content: 'Kill Team 3rd Edition rules question: ' + question }],
      }),
    });

    const rawText = await response.text();
    if (!rawText || rawText.trim() === '') {
      return { statusCode: 502, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Empty response from Anthropic' }) };
    }

    let data;
    try { data = JSON.parse(rawText); }
    catch(e) { return { statusCode: 502, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Bad API response: ' + rawText.slice(0, 200) }) }; }

    if (!response.ok) {
      return { statusCode: response.status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: data.error ? data.error.message : 'API error ' + response.status }) };
    }

    let answer = '';
    for (let i = 0; i < (data.content || []).length; i++) {
      if (data.content[i].type === 'text') answer += data.content[i].text;
    }
    answer = answer.trim();

    let usedFallback = false;
    if (answer.startsWith('UNVERIFIED:')) {
      usedFallback = true;
      answer = answer.replace(/^UNVERIFIED:\s*/i, '').trim();
    } else if (answer.startsWith('VERIFIED:')) {
      answer = answer.replace(/^VERIFIED:\s*/i, '').trim();
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: answer || 'No answer returned.', usedFallback }),
    };

  } catch (err) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Function error: ' + err.message }) };
  }
};
