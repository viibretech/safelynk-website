import Footer from "@/components/footer";
import Header from "@/components/header";
import { Chip } from "@heroui/react";

const Page = () => {
  return (
    <>
      <Header />
      <div className="z-20 lg:px-40 px-5">
        {/* Assuming Header is included here */}

        {/* Main Content Area */}
        <div className="flex flex-col items-center mt-10 mb-10">
          <div className="items-center mb-2">
            {/* day/month/year */}
            <Chip className="bg-[#C2F5DA]">UPDATED 08/11/2025</Chip>
          </div>
          <h1 className="text-2xl transition-all md:text-4xl font-inter-display-bold text-center mb-6">
            Terms of Service
          </h1>
        </div>

        {/* Terms of Service Content */}
        <div className="max-w-4xl mx-auto pb-20 text-gray-700 space-y-8">
          {/* Terms of Service Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Introduction
            </h2>
            <p>
              This Website Terms of Use (the “Agreement”) governs the terms and
              conditions around your use of the Safelynk website (the “Website”)
              and related materials made available by Safelynk (collectively,
              including all updates and other modifications thereto) through the
              Website. This Agreement is a contract between you (“you,” “your,”
              or “user”) and Viibre Technology LTD (“Safelynk,” “we,” “us,”
              “our,” or “The Company”) and applies to your use of:
            </p>
            <ul className="list-lower-alpha ml-6 space-y-2">
              <li>
                the Website and any associated Safelynk-hosted websites or
                mobile applications, and
              </li>
              <li>
                any other services provided to you by Safelynk (the “Services”).
              </li>
            </ul>
            <p>
              The terms of this Agreement are effective as of the date that you
              register, access, or use the Website (the “Effective Date”).
              Before registering, accessing, or using the Website, please read
              on. By registering, accessing, or using the Website or any tools
              provided herein, you accept the terms and conditions outlined in
              this Agreement. If you do not agree to the Agreement, you may not
              access the Website or tools. If you use any of the services
              offered on the Website or mobile app on behalf of a business, you
              represent and warrant that you can enter into this Agreement with
              Safelynk on behalf of that business, that you accept the terms and
              conditions contained herein on behalf of that business, and that
              you have received a copy of the Agreement.
            </p>
          </section>

          {/* Privacy Policy Link */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Privacy Policy
            </h2>
            <p>
              You agree to the terms of the Safelynk privacy policy (available
              at{" "}
              <a
                href="https://safelynk.io/privacy/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://safelynk.io/privacy/
              </a>
              ) as it may be updated by Safelynk from time to time.
            </p>
          </section>

          {/* Intellectual Property Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Intellectual Property and Proprietary Rights
            </h2>
            <p>
              Safelynk asserts its ownership of all intellectual property rights
              associated with the Website, mobile app and tools provided herein.
              This includes, but is not limited to, the design, text, content,
              photographs, video, audio, interfaces, graphics, and their
              arrangement, which are protected by applicable laws and treaties.
            </p>
            <p>
              Any submissions or feedback provided voluntarily by users to
              Safelynk regarding the mobile app and tools are deemed
              non-confidential, and Safelynk reserves the right to utilize and
              distribute such submissions for any purpose, commercial or
              otherwise, without acknowledgment or compensation to the user.
            </p>
            <p>
              Unauthorized use of the materials on the Website or tools,
              including reproduction, modification, distribution, or
              republication, is strictly prohibited without prior written
              permission from Safelynk.
            </p>
            <p>
              Users are granted a nonexclusive and nontransferable license to
              access and use the Website, mobile app and tools electronically,
              as described in this Agreement. Safelynk does not grant the right
              to sublicense any of its intellectual property.
            </p>
          </section>

          {/* Restrictions and Obligations Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Restrictions and Obligations
            </h2>
            <p>
              Users of the Safelynk website are subject to certain restrictions
              and obligations to ensure proper use of the platform. These
              include:
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Limited Purpose:
            </h3>
            <p className="pl-4">
              Users may only use the Website for purposes expressly outlined in
              this Agreement and must obtain prior written consent from Safelynk
              for any other use. This includes refraining from accessing
              Safelynk’s user data or information without authorization or
              engaging in activities that violate laws, regulations, or the
              rights of others, including intellectual property rights or rights
              of privacy.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Content Restrictions:
            </h3>
            <p className="pl-4">
              Users are prohibited from submitting or linking to any content
              that violates privacy or publicity rights of others. Additionally,
              users may not use the Website or tools to develop products or
              services that compete with Safelynk or its Services, or engage in
              practices that discriminate against or discourage the use of
              Safelynk’s Services.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Prohibited Activities:
            </h3>
            <p className="pl-4">
              Users must not promote or engage in activities related to
              prohibited goods or services, including spyware, counterfeit
              goods, hate materials, hacking tools, illegal substances, or
              weapons. The Website, mobile app and tools may not be used for
              illegal purposes or to promote illegal activities.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Unauthorized Use:
            </h3>
            <p className="pl-4">
              Users are not permitted to copy, rent, lease, sell, transfer,
              assign, sublicense, disassemble, reverse engineer, or modify any
              part of the Website or tools without express authorization. The
              Website and tools may not be used on behalf of any third party
              without explicit permission.
            </p>
          </section>

          {/* Payment Processing Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Payment Processing
            </h2>
            <p>
              Please note that all platform charges for the use of our platform
              will be deducted automatically before funds arrive in your wallet.
              Once a transaction has been initiated, refunds are generally not
              provided. However, Safelynk reserves the right to assess and
              potentially process refunds on a case-by-case basis. Refunds, if
              granted, will be at the sole discretion of Safelynk, and users may
              be required to undergo a review and investigation process.
            </p>
            <p>
              We encourage users to review the privacy statements of our payment
              partners to understand how their personal information is
              collected, used, and protected during the payment process.
              It&apos;s essential to note that all fees charged by Safelynk are
              exclusive of any applicable taxes, levies, or duties imposed by
              taxing authorities. Users are responsible for the payment of any
              such taxes, levies, or duties associated with their use of the
              platform and its services.
            </p>
          </section>

          {/* Service Modifications and Pricing Updates Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Service Modifications and Pricing Updates
            </h2>
            <p>
              Safelynk retains the right, at its sole discretion, to modify or
              discontinue the Service, or any part thereof, temporarily or
              permanently, with or without prior notice.
            </p>
            <p>
              Prices for all Services may be subject to change without prior
              notice. Safelynk shall not be held liable to you or any third
              party for any modifications, changes in pricing, suspension, or
              discontinuation of the Service.
            </p>
          </section>

          {/* Account Suspension and Termination Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Account Suspension and Termination
            </h2>
            <p>
              Safelynk reserves the sole discretion to suspend or terminate your
              account and reject any current or future use of the Service or any
              other Safelynk service, for any reason, at any time.
            </p>
          </section>

          {/* Notices Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Notices
            </h2>
            <p>
              All notices and other communications under this Agreement must be
              in writing to{" "}
              <a
                href="mailto:hello@safelynk.io"
                className="text-blue-600 hover:underline"
              >
                hello@safelynk.io
              </a>
              . Notices to you will be delivered to the email address provided
              to Safelynk.
            </p>
          </section>

          {/* Contact Us Section */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <p>
              If you have any questions, comments, or concerns with respect to
              your Personal Information or this Terms of Service, you may
              contact us by:
            </p>
            <ul className="list-decimal ml-6 space-y-2">
              <li>
                Reaching out to our customer support via{" "}
                <a
                  href="mailto:support@safelynk.io"
                  className="text-blue-600 hover:underline"
                >
                  support@safelynk.io
                </a>
              </li>
              <li>
                Sending an email to{" "}
                <a
                  href="mailto:hello@safelynk.io"
                  className="text-blue-600 hover:underline"
                >
                  hello@safelynk.io
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
