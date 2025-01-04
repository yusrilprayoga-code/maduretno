import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    // <!-- ========== HEADER ========== -->
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          {/* <!-- Logo --> */}
          <a
            className="flex items-center gap-x-2 rounded-xl text-xl font-semibold focus:outline-none focus:opacity-80"
            href="../../templates/creative-agency/index.html"
            aria-label="Preline"
          >
            <Image
              src="https://cdn.digitaldesa.com/uploads/landing/logo-desa/kebumenkab.png"
              alt="maduretno"
              width={50}
              height={50}
            />
            <span>Maduretno</span>
          </a>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Button Group --> */}
        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <a href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/" target="_blank" rel="noreferrer">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Website Resmi
            </button>
          </a>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
          >
            Contact Us
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}

        {/* <!-- Collapse --> */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link
                className="relative inline-block text-black hover:text-gray-600 hover:underline hover:underline-offset-4 "
                href="/"
                aria-current="page"
              >
                Beranda
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-black hover:text-gray-600 hover:underline hover:underline-offset-4 "
                href="/profile"
              >
                Profile Desa
              </Link>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 hover:underline hover:underline-offset-4"
                href="#"
              >
                Infografis
              </a>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 hover:underline hover:underline-offset-4 "
                href="/listing"
              >
                Listing
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
    // <!-- ========== END HEADER ========== -->
  );
};

export default NavBar;
