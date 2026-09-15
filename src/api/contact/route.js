import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      eventType,
      eventDate,
      guests,
      budget,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill in all required fields before submitting your enquiry.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "SATT Event Planners <onboarding@resend.dev>",

      to: [process.env.CONTACT_EMAIL],

      replyTo: email,

      subject: `New Event Enquiry — ${eventType} | ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
          </head>

          <body style="margin:0;padding:0;background:#f8f5ef;font-family:Arial,sans-serif;color:#171717;">

            <div style="max-width:700px;margin:0 auto;padding:40px 20px;">

              <div style="background:#171717;padding:30px 35px;">
                <p style="margin:0 0 8px;color:#c6a15b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">
                  New Event Enquiry
                </p>

                <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:500;">
                  SATT Event Planners
                </h1>
              </div>

              <div style="background:#ffffff;padding:35px;">

                <h2 style="margin:0 0 25px;font-size:24px;">
                  ${name}
                </h2>

                <table style="width:100%;border-collapse:collapse;">

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;width:40%;color:#6f6a61;font-size:13px;">
                      Name
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${name}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Company / Organisation
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${company || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Email
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${email}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Phone
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${phone}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Event Type
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${eventType}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Event Date
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${eventDate || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Expected Guests
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${guests || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;color:#6f6a61;font-size:13px;">
                      Estimated Budget
                    </td>

                    <td style="padding:14px 0;border-bottom:1px solid #e5e0d8;font-size:14px;">
                      ${budget || "Not decided"}
                    </td>
                  </tr>

                </table>

                <div style="margin-top:30px;padding:20px;background:#f8f5ef;">

                  <p style="margin:0 0 10px;color:#9a7635;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">
                    Event Requirements
                  </p>

                  <p style="margin:0;font-size:14px;line-height:1.7;">
                    ${message || "No additional message provided."}
                  </p>

                </div>

              </div>

              <div style="padding:20px 30px;text-align:center;">
                <p style="margin:0;color:#6f6a61;font-size:12px;">
                  This enquiry was submitted through the SATT Event Planners website.
                </p>
              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been sent successfully.",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}