import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_aHbBzyV2_2UAJAqPgngcNVhYJp3i4HftM');

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, budget, timeline, message, projectType } = req.body;

    // Build email content
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #050505; color: #CCFF00; padding: 20px; margin-bottom: 20px;">
          <h2 style="margin: 0;">🎯 New Project Inquiry from ${name}</h2>
        </div>
        
        <div style="background-color: white; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #050505; border-bottom: 2px solid #CCFF00; padding-bottom: 10px;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        </div>
        
        ${projectType ? `
        <div style="background-color: #CCFF00; color: #050505; padding: 15px; margin-bottom: 20px; border-left: 4px solid #050505;">
          <p style="margin: 0;"><strong>🎨 What They Need:</strong> ${projectType}</p>
        </div>
        ` : ''}
        
        ${budget || timeline ? `
        <div style="background-color: white; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #050505; border-bottom: 2px solid #CCFF00; padding-bottom: 10px;">Project Details</h3>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        </div>
        ` : ''}
        
        <div style="background-color: white; padding: 20px;">
          <h3 style="color: #050505; border-bottom: 2px solid #CCFF00; padding-bottom: 10px;">Message</h3>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #050505; color: #CCFF00;">
          <p style="margin: 0; font-size: 12px;">💬 Click "Reply" to respond directly to ${name}</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'Costello Digital <hello@costellodigital.co.uk>',
      to: ['pucka.costello@gmail.com'], // Your verified Resend email
      reply_to: email,
      subject: `New Project Inquiry from ${name}`,
      html: emailContent,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}

