import React from "react";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Struktur Organisasi
        </h2>
        <p className="text-sm text-gray-600 mt-2 md:text-lg">
            Kami adalah tim yang berdedikasi untuk membantu Anda dalam
            membangun desa Maduretno menjadi lebih baik.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            src="https://maduretno.kec-buluspesantren.kebumenkab.go.id/uploads/logo/12042021020029-Maduretno-Kebumen.jpg"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Beni Setyo Bowo
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                Kepala Desa
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Amil Evara
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              UI/UX Designer
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Ebele Egbuna
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Support Consultant
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Maria Powers
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Director of sales
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Delia Pawelke
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Front-end Developer
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            height={320}
            width={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Tom Lowry
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              UI/UX Designer
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Louise Donadieu
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Support Consultant
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Jeff Fisher
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Project Manager
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            className="rounded-xl sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
            width={320}
            height={320}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Sophia Harrington
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Project Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
