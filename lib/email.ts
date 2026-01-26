import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface InquiryEmailData {
    name: string
    email: string
    phone: string
    message: string
    propertyTitle?: string
}

export async function sendInquiryEmail(data: InquiryEmailData) {
    const adminEmail = process.env.ADMIN_EMAIL || 'ghassanadil315@gmail.com'

    const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .header {
            background: linear-gradient(135deg, #1a4d8f 0%, #2563b8 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #1a4d8f;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #718096;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Property Inquiry</h1>
          </div>
          <div class="content">
            ${data.propertyTitle ? `
              <div class="field">
                <div class="label">Property:</div>
                <div class="value">${data.propertyTitle}</div>
              </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>Abdalla Alowais Real Estate - Sharjah, UAE</p>
          </div>
        </div>
      </body>
    </html>
  `

    try {
        const result = await resend.emails.send({
            from: 'Abdalla Alowais Real Estate <onboarding@resend.dev>',
            to: adminEmail,
            subject: `New Inquiry${data.propertyTitle ? ` - ${data.propertyTitle}` : ''}`,
            html: emailHtml,
        })

        return { success: true, data: result }
    } catch (error) {
        console.error('Email sending failed:', error)
        return { success: false, error }
    }
}
