export async function generateMonth(monthNumber, previousMonths) {
  const prevSummary = previousMonths.map(m => ({
    month: m.id,
    theme: m.theme,
    split: m.weeks?.[0]?.days?.map(d => d.label).join(', ')
  }));

  const prompt = `You are an expert personal trainer creating a detailed gym workout plan.

User profile: Male, 38 years old, 174.5cm, 87kg, goal: fat loss + muscle building + general fitness.
Previous training: ${JSON.stringify(prevSummary)}

Generate Month ${monthNumber} of a 6-month progressive training plan.
The plan should logically progress from Month ${monthNumber - 1}.

Guidelines for Month ${monthNumber}:
${monthNumber === 3 ? '- Introduce Push/Pull/Legs (PPL) split, 5-6 days/week, higher frequency' : ''}
${monthNumber === 4 ? '- PPL with higher intensity, introduce supersets and drop sets' : ''}
${monthNumber === 5 ? '- Strength-focused: 5/3/1 style for main lifts + hypertrophy accessories' : ''}
${monthNumber === 6 ? '- Peak month: advanced techniques, periodization, final strength testing' : ''}
${monthNumber > 2 && monthNumber < 3 ? '- Continue Upper/Lower with more advanced exercises' : ''}

Return ONLY valid JSON, no markdown, no explanation. Follow this exact structure:
{
  "id": ${monthNumber},
  "label": "Month ${monthNumber}",
  "theme": "Theme Name",
  "description": "Brief description of this month",
  "gradient": ["#hexcolor1", "#hexcolor2"],
  "weeks": [
    {
      "id": 1,
      "label": "Week 1",
      "theme": "Week theme",
      "note": "Coach note for this week",
      "days": [
        {
          "day": "Day 1",
          "label": "Day label",
          "tag": "Push|Pull|Legs|Upper|Lower|Strength|Cardio|Recovery",
          "color": "#hexcolor",
          "exercises": [
            {
              "name": "Exercise Name",
              "sets": 4,
              "reps": "10",
              "rest": "90s",
              "tip": "Form cue"
            }
          ]
        }
      ]
    }
  ]
}

Include 4 weeks, each week 4-5 days. 5-7 exercises per day. Make it genuinely progressive and realistic.`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await res.json();
  const text = data.content?.[0]?.text || '';
  
  // Strip any markdown fences
  const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  
  try {
    return JSON.parse(clean);
  } catch (e) {
    throw new Error('Failed to parse generated month: ' + e.message);
  }
}
