import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'mehdipfe437@gmail.com',
        pass: 'gdft xpqt icqd vxbo',
      },
    });

    // Verify connection
    await transporter.verify();

    // Prepare subject mapping
    const subjectMap: Record<string, string> = {
      general: 'General Inquiry',
      support: 'Technical Support',
      feature: 'Feature Request',
      bug: 'Bug Report',
      enterprise: 'Enterprise Inquiry',
      other: 'Other',
    };

    const subjectText = subjectMap[subject] || 'Other';

    // Email to recipient (mehdichebbi111@gmail.com)
    const mailOptions = {
      from: 'mehdipfe473@gmail.com',
      to: 'mehdichebbi111@gmail.com',
      subject: `📬 New Contact Form Submission - ${subjectText}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background-color: #f3f4f6;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #326ce5 0%, #00b4d8 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              font-size: 14px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 24px;
            }
            .field-label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #6b7280;
              margin-bottom: 8px;
              font-weight: 600;
            }
            .field-value {
              font-size: 16px;
              color: #1f2937;
              line-height: 1.5;
            }
            .field-value.name {
              font-size: 20px;
              font-weight: 600;
              color: #326ce5;
            }
            .field-value.email {
              color: #00b4d8;
            }
            .message-box {
              background-color: #f9fafb;
              border-left: 4px solid #326ce5;
              padding: 20px;
              border-radius: 8px;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #1f2937;
              color: #9ca3af;
              padding: 20px;
              text-align: center;
              font-size: 12px;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              background-color: #e0e7ff;
              color: #326ce5;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Message Received</h1>
              <p>Someone has sent you a message through the KubeMate contact form</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value name">${name}</div>
                <div class="field-value email">${email}</div>
              </div>

              <div class="field">
                <div class="field-label">Subject</div>
                <div class="badge">${subjectText}</div>
              </div>

              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>

              <div class="field">
                <div class="field-label">Received At</div>
                <div class="field-value">${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'UTC'
                })} UTC</div>
              </div>
            </div>

            <div class="footer">
              <p>This message was sent from the KubeMate contact form.</p>
              <p style="margin-top: 5px;">© ${new Date().getFullYear()} KubeMate</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
