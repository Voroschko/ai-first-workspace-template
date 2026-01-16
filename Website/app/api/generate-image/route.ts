import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { prompt, size = '1792x1024', style = 'vivid' } = await request.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY не настроен. Установите переменную окружения или добавьте в .env.local' },
      { status: 500 }
    );
  }

  try {
    // Используем DALL-E 3 для лучшего качества
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: `${prompt}. Professional photography, high quality, cinematic lighting, 4K resolution.`,
        n: 1,
        size: size,
        style: style,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API Error:', error);
      return NextResponse.json(
        { error: error.error?.message || 'Ошибка при генерации изображения', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: 'Ошибка при генерации изображения', details: error.message },
      { status: 500 }
    );
  }
}
