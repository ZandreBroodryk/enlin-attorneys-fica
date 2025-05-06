import Header from "@/components/header";
import Slogan from "@/components/slogan";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col place-items-center gap-7 px-7 pt-20 lg:px-20">
      <Header />
      <Slogan />
      <Image
        src="/b-card.jpeg"
        alt="business card"
        width={363.5}
        height={182.3}
      />
      <section className="flex flex-col gap-7 text-left">
        <h2 className="text-lg font-bold">
          Expert Legal Services with a Focus on Compliance & Labour Law
        </h2>
        <p>
          With a strong foundation in law and business, I offer expert legal
          guidance tailored to your needs. Holding a{" "}
          <em className="font-bold">
            B. Com in Law, LL.B, and LL.M in Labour Law
          </em>
          , along with a{" "}
          <em className="font-bold">
            Postgraduate Certificate in Education (Economics & Business Studies)
          </em>
          , I provide comprehensive legal solutions that bridge the gap between
          legal expertise and business acumen.
        </p>
        <p>
          Specializing in{" "}
          <em className="font-bold">
            FICA compliance, labour law, and corporate legal services
          </em>
          , I help individuals and businesses navigate complex regulations with
          confidence. Whether you require{" "}
          <em className="font-bold">
            FICA verification, employment law guidance, or business legal
            consulting
          </em>
          , my services are designed to ensure compliance, mitigate risks, and
          protect your interests.
        </p>
        <p>
          <em className="font-bold">
            Get in touch today to ensure your legal matters are handled with
            precision and professionalism.
          </em>
        </p>
        <h2 className="font-bold">Legal Disclaimer:</h2>
        <ul className="ml-4 list-disc p-0">
          <li>
            This communication does not constitute legal advice. For
            professional consultation, please contact us directly.
          </li>
          <li>
            All services are provided in accordance with applicable laws and
            regulations.
          </li>
          <li>
            I operate in full compliance with the Protection of Personal
            Information Act (POPIA), ensuring the confidentiality and security
            of your personal data.
          </li>
        </ul>
      </section>
    </div>
  );
}
