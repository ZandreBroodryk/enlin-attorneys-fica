import * as sendGrid from "@sendgrid/mail";
import { EmailMessage } from "./email-types";

export async function sendEmailAsync(email: EmailMessage) {
  try {
    const toEmail = Array.isArray(email.to) ? email.to : [email.to!];

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY ?? "");

    const emailToSend: sendGrid.MailDataRequired = {
      replyTo: "info@fuelx.co.za",
      ...email,
      to: toEmail.length === 1 ? toEmail[0] : toEmail,
      from: "info@fuelx.co.za",
      text: email.text ?? email.html ?? "",
    };

    if (Array.isArray(emailToSend.to)) {
      await sendGrid.sendMultiple(emailToSend);
    } else {
      await sendGrid.send(emailToSend);
    }
    return { success: true };
  } catch (error) {
    return { success: false, data: error };
  }
}

export async function generateAttachmentFromBlob(blob: Blob, fileName: string) {
  const blobArrayBuffer = await blob.arrayBuffer();
  const blobBase64Content = Buffer.from(blobArrayBuffer).toString("base64");
  const fileType = blob.type;

  const attachment = {
    content: blobBase64Content,
    filename: fileName,
    type: fileType,
    contentId: fileName,
    disposition: "attachment",
  };

  return attachment;
}

export async function generateAttachmentFromUrl(
  url: string,
  filename: string = "AttachmentFile",
) {
  const result = await fetch(url);
  const blob = await result.blob();
  const fileName = result.headers.get("Filename") ?? filename;

  return await generateAttachmentFromBlob(blob, fileName);
}
