"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  UserCircle,
  Home,
  UserPlus,
  UsersRound,
  UserCog,
} from "lucide-react";

const stats = [
  { number: "2.134", label: "Penduduk", icon: Users },
  { number: "1.079", label: "Laki-Laki", icon: UserCircle },
  { number: "1.055", label: "Perempuan", icon: UserCircle },
  { number: "608", label: "Kepala Keluarga", icon: Home },
  { number: "9", label: "RT", icon: UserPlus },
  { number: "3", label: "RW", icon: UserCog },
];

export default function Administrasi() {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mb-20 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
              Administrasi Penduduk
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Sistem digital yang berfungsi mempermudah pengelolaan data dan
              informasi terkait dengan kependudukan dan pendayagunaannya untuk
              pelayanan publik yang efektif dan efisien
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-4 flex items-center space-x-4 bg-lime-100/50 dark:bg-lime-950/50"
                >
                  <div className="shrink-0">
                    <Icon className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-600 dark:text-lime-400">
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
