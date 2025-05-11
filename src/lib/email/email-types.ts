import { MailDataRequired } from "@sendgrid/mail";

export type EmailMessage = Omit<MailDataRequired, "from"> &
  ({ text?: string } | { html?: string } | { templateId?: string });
