import Image from "next/image";
import Link from "next/link";

export default function DocumentTypes() {
  return (
    <section className="flex flex-wrap justify-center gap-7 bg-[url('/content-background.jpg')] bg-contain px-14 py-7 lg:bg-cover">
      <DocumentItem
        alt="Natural Person Fica"
        href="/fica/natural-person"
        label="Natural Person Fica"
        src="/natural-person.jpg"
      />
      <DocumentItem
        alt="Trust Fica"
        href="/fica/trust"
        label="Trust Fica"
        src="/trust.png"
      />
      <DocumentItem
        alt="Partnership"
        href="/fica/partnership"
        label="Partnership Fica"
        src="/partnership.png"
      />
      <DocumentItem
        alt="Estate Trust"
        href="/fica/partnership"
        label="Estate Trust Fica"
        src="/estate-trust.png"
      />
      <DocumentItem
        alt="Company"
        href="/fica/company"
        label="Company Fica"
        src="/company.png"
      />
      <DocumentItem
        alt="POPIA Concent"
        href="/fica/popia"
        label="Consent in terms of the Protection of Personal Information Act"
        src="/popia-concent.png"
      />
    </section>
  );
}

type DocumentItemProps = {
  src: string;
  alt: string;
  label: string;
  href: string;
};
function DocumentItem(props: DocumentItemProps) {
  return (
    <Link
      href={props.href}
      className="flex max-w-[365px] flex-col gap-3 text-center"
    >
      <Image src={props.src} height={225} width={365} alt={props.alt} />
      <span className="font-sans font-medium text-black underline">
        {props.label}
      </span>
    </Link>
  );
}
