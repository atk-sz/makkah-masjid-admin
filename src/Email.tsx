import React from "react";

interface EmailLinkProps {
  recipients: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({
  recipients,
  cc = [],
  bcc = [],
  subject,
  body,
}) => {
  const mailtoLink = `mailto:${recipients.join(
    ","
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}${
    cc.length ? `&cc=${cc.join(",")}` : ""
  }${bcc.length ? `&bcc=${bcc.join(",")}` : ""}`;

  return <a href={mailtoLink}>Send Mail</a>;
};

export default EmailLink;
