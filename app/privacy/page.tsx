import Header from "@/components/header";

const Page = () => {
  return (
    // z-20 for stacking context, px-5 lg:px-40 for padding/max-width
    <div className="z-20 px-5 lg:px-40">
      {/* Assuming Header is included here */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-col items-center mt-10 mb-10">
        <h1 className="text-2xl transition-all md:text-4xl font-inter-display-bold text-center mb-6">
          SAFELYNK PRIVACY STATEMENT
        </h1>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto pb-20 text-gray-700 space-y-8">
        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Introduction
          </h2>
          <p>
            This privacy policy outlines how we collect, use, and safeguard the
            information you provide to us when accessing or using our platform.
          </p>
          <p>
            By using Safelynk, you consent to the collection and use of your
            information as described in this privacy policy. Please take the
            time to read this policy carefully to understand our practices
            regarding your personal data and how we handle it.
          </p>
        </section>

        {/* Data Collection and Usage Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Data Collection and Usage
          </h2>
          <p>
            We strive to provide you with the best possible experience while
            using our service. In order to achieve this, we may collect certain
            personally identifiable information from you. This information may
            include, but is not limited to: full name, e-mail address, phone
            number, business details. This also includes information you provide
            through your continued use of our services, your participation in
            discussion boards or other social media functions on our website,
            mobile app or other tools through entering a competition, promotion
            or survey, and by reporting problems with our services.
            Additionally, you may be asked to provide information about your
            buyer as part of our service offerings.
          </p>
          <p>
            Please note that Safelynk may utilize other third-party services to
            enhance your experience. These services may collect information and
            use it to identify you. It’s important to understand that these
            third-party services operate under their own privacy policies, which
            may differ from ours. We encourage you to review the privacy
            policies of any third-party service providers utilized by Safelynk
            to understand how your information is handled. While we strive to
            partner with reputable service providers, we cannot control their
            privacy practices.
          </p>
        </section>

        {/* External Websites Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            External Websites
          </h2>
          <p>
            Our website may occasionally feature links to external websites
            belonging to our partner networks, advertisers, and affiliates. It’s
            important to note that these external websites have their own
            privacy policies, which may differ from ours.
          </p>
          <p>
            We want to emphasize that Safelynk does not assume any
            responsibility or liability for the privacy practices or policies of
            these external websites. Therefore, we encourage you to review the
            privacy policies of these websites before submitting any personal
            information.
          </p>
        </section>

        {/* Security Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Security
          </h2>
          <p>
            At Safelynk, we prioritize the security of your personal and
            business information. While we implement stringent security
            measures, it’s important to recognize that no method of electronic
            transmission or storage over the internet can guarantee 100%
            security.
          </p>
          <p>
            As a user of Safelynk, you also play a crucial role in safeguarding
            your personal and business information. We urge you to take the
            following precautions:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Safeguard your Safelynk account password and refrain from sharing
              it with others.
            </li>
            <li>
              Be vigilant against phishing attempts and malicious activities.
            </li>
            <li>
              Notify us immediately if you suspect any unauthorized use of your
              Safelynk account or detect a security breach.
            </li>
          </ul>
          <p>
            Please be aware that if we receive instructions using your Safelynk
            account login information, we will consider those instructions as
            authorized by you.
          </p>
          <p>
            In the event of unauthorized use of your Safelynk account or any
            security breach, we reserve the right, at our sole discretion, to
            take appropriate actions. This may include refusing to provide
            services, terminating Safelynk accounts, or removing/editing
            content.
          </p>
        </section>

        {/* Disclosure Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Disclosure
          </h2>
          <p>
            Safelynk may disclose personally identifiable information in special
            circumstances, such as:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Compliance with legal obligations</li>
            <li>Violation of terms of service</li>
            <li>Investigation and prevention of illegal activities</li>
            <li>As permitted or required by law</li>
          </ul>
          <p>
            Your privacy is important to us, and we will only disclose
            information when necessary and in accordance with the law.
          </p>
        </section>

        {/* Changes to Our Privacy Policy Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Changes to Our Privacy Policy
          </h2>
          <p>
            Any changes we may make to our privacy policy at a later date will
            be posted on this page and, where appropriate, notified to you by
            e-mail. Please check back frequently to see any updates or changes
            to our privacy policy.
          </p>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Contact
          </h2>
          <p>
            If you have any questions or comments relating to this privacy
            policy, they are welcomed and should be addressed to{" "}
            <a
              href="mailto:hello@safelynk.io"
              className="text-blue-600 hover:underline"
            >
              hello@safelynk.io
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
