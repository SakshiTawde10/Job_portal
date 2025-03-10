// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="home-footer-container p-6 bg-gray-900 text-white flex gap-5">
//       <div className="main-footer-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Description Section */}
//         <div className="description-container space-y-4">
//           <div className="main-logo-container flex items-center space-x-2">
//             <a href="/" className="flex items-center text-white text-xl font-bold">
//               <img alt="logo" src="/_nuxt/img/main.6e304f5.svg" className="main-logo w-10 h-10" />
//               <span className="hidden md:inline">Airtribe</span>
//             </a>
//           </div>
//           <p>Transforming the way individuals learn and network for professional excellence!</p>
//           <div className="socials flex space-x-4">
//             <a href="https://www.linkedin.com/company/airtribe/" target="_blank" rel="noopener noreferrer" title="Airtribe's LinkedIn page">
//               <img src="" alt="LinkedIn" />
//             </a>
//             <a href="https://www.youtube.com/@airtribe" target="_blank" rel="noopener noreferrer" title="Airtribe's YouTube channel">
//               <img src="" alt="YouTube" />
//             </a>
//             <a href="https://www.instagram.com/airtribe.live/" target="_blank" rel="noopener noreferrer" title="Airtribe's Instagram page">
//               <img src="/_nuxt/img/instagram_white.a527e82.svg" alt="Instagram" />
//             </a>
//             <a href="https://twitter.com/Airtribe_live" target="_blank" rel="noopener noreferrer" title="Airtribe's Twitter page">
//               <img src="/_nuxt/img/twitter_white.933709e.svg" alt="Twitter" />
//             </a>
//           </div>
//           <div className="contact-us flex flex-col space-y-1">
//             <span>Contact:</span>
//             <a href="mailto:support@airtribe.live" className="text-blue-400 hover:underline">support@airtribe.live</a>
//             <a href="tel:+917204287636" className="text-blue-400 hover:underline">+91 7204287636</a>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="links-container grid grid-cols-2 md:grid-cols-3 gap-6">
//           <div className="links-section">
//             <h3 className="font-semibold">Product Courses</h3>
//             <ul className="space-y-2">
//               <li><a href="/courses/product-management-launchpad">Product Management Launchpad</a></li>
//               <li><a href="https://lp.airtribe.live/pm-interview-mastery" target="_blank">PM Interview Mastery</a></li>
//               <li><a href="https://lp.airtribe.live/tech-mastery" target="_blank">Tech Mastery for PMs</a></li>
//             </ul>
//           </div>
//           <div className="links-section">
//             <h3 className="font-semibold">Tech Courses</h3>
//             <ul className="space-y-2">
//               <li><a href="/courses/fullstack-development-launchpad">Full-stack Development Launchpad</a></li>
//               <li><a href="/courses/data-science-launchpad">Data Science Launchpad</a></li>
//               <li><a href="/courses/backend-engineering-launchpad">Backend Engineering Launchpad</a></li>
//               <li><a href="https://lp.airtribe.live/dsa-16-week-course" target="_blank">DSA course for professionals</a></li>
//             </ul>
//           </div>
//           <div className="links-section">
//             <h3 className="font-semibold">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="/jobs">Job board</a></li>
//               <li><a href="/free-resume-review">Free resume review</a></li>
//               <li><a href="/project-showcase">Projects showcase</a></li>
//               <li><a href="/events">Events</a></li>
//               <li><a href="/upskill-for-free">Upskill for free</a></li>
//               <li><a href="https://airtribe.substack.com/" target="_blank">Newsletter</a></li>
//               <li><a href="https://www.airtribe.live/blog/" target="_blank">Blog</a></li>
//             </ul>
//           </div>
//           <div className="links-section">
//             <h3 className="font-semibold">Airtribe</h3>
//             <ul className="space-y-2">
//               <li><a href="/reviews">Reviews</a></li>
//               <li><a href="https://lp.airtribe.live/community">Community</a></li>
//               <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSepnSomDp2GAccHeIxEuSpVDkAkY1qUCE-foiTfY-pPxEF5iA/viewform">Hire from us</a></li>
//               <li><a href="https://wellfound.com/company/airtribe" target="_blank">Careers at Airtribe</a></li>
//               <li><a href="/about-us" target="_blank">About us</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Mail, Phone, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1328] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Left Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img src="/logo.png" alt="Airtribe" className="h-8" />
              <span className="text-xl font-semibold ml-2">Airtribe</span>
            </div>
            <p className="text-sm text-gray-300">
              Transforming the way individuals learn and network for professional excellence!
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Linkedin className="cursor-pointer text-gray-400 hover:text-white" />
              <Youtube className="cursor-pointer text-gray-400 hover:text-white" />
              <Instagram className="cursor-pointer text-gray-400 hover:text-white" />
              <Twitter className="cursor-pointer text-gray-400 hover:text-white" />
            </div>
            {/* Contact */}
            <p className="mt-4 text-sm">
              <Mail className="inline-block mr-2 text-gray-400" />
              support@airtribe.live
            </p>
            <p className="text-sm">
              <Phone className="inline-block mr-2 text-gray-400" />
              +91 7204287636
            </p>
          </div>

          {/* Product Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">PRODUCT COURSES</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Product Management Launchpad</li>
              <li className="hover:text-white cursor-pointer">PM Interview Mastery</li>
              <li className="hover:text-white cursor-pointer">Tech Mastery for PMs</li>
            </ul>
          </div>

          {/* Tech Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">TECH COURSES</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Full-stack Development Launchpad</li>
              <li className="hover:text-white cursor-pointer">Data Science Launchpad</li>
              <li className="hover:text-white cursor-pointer">Backend Engineering Launchpad</li>
              <li className="hover:text-white cursor-pointer">DSA course for professionals</li>
            </ul>
          </div>

          {/* Resources & Airtribe */}
          <div className="flex flex-col md:flex-row md:gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Job board</li>
                <li className="hover:text-white cursor-pointer">Free resume review</li>
                <li className="hover:text-white cursor-pointer">Projects showcase</li>
                <li className="hover:text-white cursor-pointer">Events</li>
                <li className="hover:text-white cursor-pointer">Upskill for free</li>
                <li className="hover:text-white cursor-pointer">Newsletter</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">AIRTRIBE</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Reviews</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Hire from us</li>
                <li className="hover:text-white cursor-pointer">Careers at Airtribe</li>
                <li className="hover:text-white cursor-pointer">About us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
          <p>© 2025 Airtribe Inc.</p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
