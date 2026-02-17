exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured on server. Add ANTHROPIC_API_KEY to Netlify environment variables.' }) };
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
        system: 'You are a Kill Team 3rd Edition rules expert with comprehensive knowledge of the core rules, ploys, equipment, and kill zones as of early 2025. Answer rules questions precisely and concisely. Lead with the direct ruling, then explain the reasoning. Quote exact rule text when it matters. Flag common misconceptions or edge cases if relevant. Mention errata or FAQ clarifications if you know of any. Keep answers brief: 3-6 sentences unless the rule genuinely requires more. If uncertain about something, say so clearly rather than guessing. Write in plain prose, no markdown formatting.',
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
      return { statusCode: 502, body: JSON.stringify({ error: 'Bad response: ' + rawText.slice(0, 200) }) };
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
