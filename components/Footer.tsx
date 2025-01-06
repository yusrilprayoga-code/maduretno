import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Maduretno"
          >
            Maduretno
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} KKN AA.82.121 & KKN AA.82.122 - Desa
            Maduretno - Kebumen
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Pricing
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Changelog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Docs
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Download
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Careers
              </a>{" "}
              <span className="inline text-blue-600">— We're hiring</span>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Customers
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Newsroom
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Sitemap
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Community
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Help & Support
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                eBook
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                What's New
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Status
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Developers
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Api
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Status
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                GitHub
              </a>{" "}
              <span className="inline text-blue-600">— New</span>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase">
            Industries
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Financial Services
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Education
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200">
        <div className="sm:flex sm:justify-between sm:items-center">
          {/* copyright and social media */}
          <div className="text-xs text-gray-600">
            <p>
              © {new Date().getFullYear()} KKN AA.82.121 & KKN AA.82.122 - Desa
              Maduretno - Kebumen
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
