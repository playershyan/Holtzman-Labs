import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export function EmailTemplate({ name, email, projectType, message }: EmailTemplateProps) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>New Inquiry</title>
      </head>
      <body
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          backgroundColor: "#0b1120",
          color: "#e5e7eb",
          padding: "24px",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#020617",
            borderRadius: "16px",
            border: "1px solid #1f2937",
            overflow: "hidden",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "24px 24px 8px" }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontWeight: 600,
                    color: "#f9fafb",
                  }}
                >
                  New project inquiry
                </h1>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#9ca3af",
                  }}
                >
                  You&apos;ve received a new message from the portfolio contact form.
                </p>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px 24px 24px" }}>
                <table
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: "8px 0", width: "120px", color: "#6b7280" }}>Name</td>
                      <td style={{ padding: "8px 0", color: "#e5e7eb" }}>{name}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px 0", width: "120px", color: "#6b7280" }}>Email</td>
                      <td style={{ padding: "8px 0" }}>
                        <a
                          href={`mailto:${email}`}
                          style={{ color: "#38bdf8", textDecoration: "none" }}
                        >
                          {email}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px 0", width: "120px", color: "#6b7280" }}>
                        Project type
                      </td>
                      <td style={{ padding: "8px 0", color: "#e5e7eb" }}>{projectType}</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "16px 0 4px",
                          width: "120px",
                          verticalAlign: "top",
                          color: "#6b7280",
                        }}
                      >
                        Message
                      </td>
                      <td style={{ padding: "16px 0 4px", color: "#e5e7eb", whiteSpace: "pre-wrap" }}>
                        {message}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "16px 24px 20px",
                  borderTop: "1px solid #1f2937",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#6b7280",
                }}
              >
                <p style={{ margin: 0 }}>This message was sent from your portfolio contact form.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}


