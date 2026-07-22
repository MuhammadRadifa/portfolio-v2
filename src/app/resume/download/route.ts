import { NextResponse } from 'next/server'

export async function GET() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL

  if (!resumeUrl) {
    return NextResponse.json(
      { message: 'Resume URL is not configured' },
      { status: 500 },
    )
  }

  const response = await fetch(resumeUrl)

  if (!response.ok || !response.body) {
    return NextResponse.json(
      { message: 'Unable to download resume' },
      { status: response.status || 500 },
    )
  }

  return new NextResponse(response.body, {
    headers: {
      'Content-Disposition': 'attachment; filename="resume.pdf"',
      'Content-Type': response.headers.get('Content-Type') ?? 'application/pdf',
    },
  })
}
