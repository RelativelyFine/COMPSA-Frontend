import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";
import Footer from "../components/FooterCollection/Footer";

export default function Home() {
  const topLinks = [
    {
      href: "https://www.bouncelife.com/events/636aacaaf06dd12682beec50l",
      text: "Fall Night Out Tickets",
      subText: "November/18/2022",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLScFtcUdYCFCcPehOEqENal-okyNDoTyDHx-7Muqn-uqG61Oaw/viewform",
      text: "Tech Committee Application",
      subText: "November/16/2022",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeSlDm2Jv8yTucyUPt_qWXvnJVCsemtOfTBHmTPWmbEzXM9sA/viewform",
      text: "Networking Workshop",
      subText: "November/14/2022",
    },
  ];

  const infoPackageLinks = [
    {
      header: "General",
      links: [
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeSLWO4c-QB3rMj3NV9K8jN7qRppKK9mbOvClYR-8AUEWYE3w/viewform",
          text: "Student Experience Survey",
        },
      ],
    },
    {
      header: "Academics",
      links: [
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSebseoqRym3KOZsQHE9zYtjzcZL0otMDcflmPuoxSku6gsTyA/viewform",
          text: "Tutor Request Form",
        },
        {
          href: "https://docs.google.com/document/d/1bPfn8PnaK2YIhkKg4rGuCA5qCa9EPKA07jOW8JxuwXA/edit",
          text: "Academic Resources",
        },
        {
          href: "https://docs.google.com/document/d/1bPfn8PnaK2YIhkKg4rGuCA5qCa9EPKA07jOW8JxuwXA/edit",
          text: "Academic Grievance Form",
        },
        {
          href: "https://www.queensu.ca/artsci/undergrad-students/first-year-students/plan-selection",
          text: "Plan Selection",
        },
        {
          href: "https://docs.google.com/document/d/1ZZtvRp7-H9Plot4v6rbYNSFLXts8B9nJE0hOeJ_7JqU/edit",
          text: "1st Year Course Selection Guide",
        },
      ],
    },
    {
      header: "Equity",
      links: [
        {
          href: "https://docs.google.com/document/d/1TOI9UOpqk9ahZjp7GYstwU5VoavAIUQeKu6dISHI0bU/edit",
          text: "Ukraine Statement",
        },
        {
          href: "https://docs.google.com/document/d/1rVHGMjIVGpg9mMCbYMY4GCaWXX1ikeggc80rMNbYCpE/edit",
          text: "Equity Resources",
        },
        {
          href: "https://www.youtube.com/watch?v=q9ihaF5bG8U",
          text: "Diversity in Tech Recording",
        },
      ],
    },
    {
      header: "Events",
      links: [
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeURF0FdzVDZlhbtz9JYr0uFDGjdU_orKuPxkABqaOPcM-Wxw/viewform",
          text: "Bursary Form",
        },
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSdlizszGiuo_5nO0khWAoXek9GDsspmPpRwPhI7aiB5a1abDw/viewform",
          text: "Event Accommodation Form",
        },
      ],
    },
    {
      header: "Personal Development",
      links: [
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeURF0FdzVDZlhbtz9JYr0uFDGjdU_orKuPxkABqaOPcM-Wxw/viewform",
          text: "Bursary Form",
        },
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSdlizszGiuo_5nO0khWAoXek9GDsspmPpRwPhI7aiB5a1abDw/viewform",
          text: "Event Accommodation Form",
        },
        {
          href: "https://github.com/Queen-s-COMPSA/Canadian-Tech-Internships-2023",
          text: "Canadian Internships List",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="fixed w-screen h-[53px] sm:h-[70px]"></div>
      <Header />
      <Resources topLinks={topLinks} infoPackageLinks={infoPackageLinks} />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
