const socials = [
  {
    name: "linkedin",
    image: "svgs/linkedin.svg",
    url: "https://www.linkedin.com/company/safelynk/",
  },
  {
    name: "instagram",
    image: "svgs/instagram.svg",
    url: "https://www.instagram.com/safelynk.io/",
  },
  {
    name: "facebook",
    image: null,
    url: "https://www.facebook.com/profile.php?id=61584526807407",
  },
  {
    name: "x",
    image: "svgs/x.svg",
    url: "https://x.com/safelynk_io",
  },
];

const faqs = [
  {
    title: "What is Safelynk?",
    description:
      "Safelynk is a secure escrow and payment protection platform that holds funds until both parties fulfill their obligations — ensuring safer transactions for individuals and businesses.",
  },
  {
    title: "How does Safelynk work?",
    description:
      "When a buyer makes a payment, Safelynk safely holds the funds until the seller delivers the agreed product or service. Once the buyer confirms receipt, the funds are automatically released to the seller.",
  },
  {
    title: "Who can use Safelynk?",
    description:
      "Anyone can use Safelynk — individuals, freelancers, online vendors, and businesses — to build trust in payments where delivery or completion must occur before full payment.",
  },
  {
    title: "What payment methods are supported?",
    description:
      "Safelynk supports multiple payment options including mobile money, bank cards, and direct account transfers for flexibility and convenience.",
  },
  {
    title: "How much does Safelynk charge?",
    description:
      "Safelynk charges a 3% commission on every completed transaction. No hidden fees or subscription costs.",
  },
  {
    title: "Is Safelynk safe?",
    description:
      "Yes. Safelynk ensures your funds are protected in a secure, licensed escrow system until both parties confirm that all terms have been met.",
  },
  {
    title: "Can Safelynk be integrated into my app or website?",
    description:
      "Currently no but in the near future Safelynk will provision APIs that will developers to integrate escrow and payment protection features directly into their platforms.",
  },
  {
    title: "What happens if there’s a dispute?",
    description:
      "If either party raises a dispute, Safelynk’s mediation team reviews the case using provided evidence and resolves it fairly before releasing funds.",
  },
  {
    title: "How long does it take to receive funds?",
    description:
      "Once the buyer confirms receipt or completion, funds are automatically released to the seller’s Safelynk wallet and can be withdrawn instantly.",
  },
  {
    title: "Where is Safelynk available?",
    description:
      "Safelynk currently operates in Ghana and is expanding to other African markets soon.",
  },
];

const cards = [
  {
    title: (
      <span>
        Online Sellers &<br /> Vendors
      </span>
    ),
    description:
      "Safelynk helps you secure payments before you ship. The buyer pays into escrow, you deliver the item, and the funds are released to you once they confirm. No cancellations, no ghosting, no losses.",
    imagePath: "/images/online-seller.jpg",
  },
  {
    title: (
      <span>
        Freelancers &<br /> Service Providers
      </span>
    ),
    description:
      "Start projects without fear of delayed or unpaid invoices. Safelynk holds the client’s money upfront, and you receive payment automatically once the job is done.",
    imagePath: "/images/freelancer.jpg",
  },
  {
    title: (
      <span>
        Everyday
        <br /> Buyers
      </span>
    ),
    description:
      "Whether you’re purchasing a phone, a dress, a rental, or anything online, Safelynk keeps your money secure until you receive exactly what you paid for.",
    imagePath: "/images/everyday-buying.jpg",
  },
  {
    title: (
      <span>
        Marketplaces &
        <br /> Platforms (API)
      </span>
    ),
    description:
      "Integrate Safelynk’s escrow API to protect users, reduce disputes, and boost successful transactions. Ideal for e-commerce, gig platforms, delivery apps, rentals, and service marketplaces.",
    imagePath: "/images/marketplace.jpg",
  },
];

export { cards as useCases, faqs, socials };
