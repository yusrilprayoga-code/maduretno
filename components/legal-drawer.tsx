"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function LegalDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Privacy Policy & Terms of Service
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Legal Information</DrawerTitle>
            <DrawerDescription>
              View our Privacy Policy and Terms of Service
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col space-y-4 items-start">
              <section>
                <h2 className="text-lg font-semibold">Privacy Policy</h2>
                <p className="text-sm text-gray-500">
                  We value your privacy. All personal data collected will be
                  used solely for the purpose of providing and improving our
                  services. We do not share your information with third parties
                  without your consent. For detailed information, please refer
                  to our complete Privacy Policy.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold">Terms of Service</h2>
                <p className="text-sm text-gray-500">
                  By accessing or using our website and services, you agree to
                  abide by our Terms of Service. This includes compliance with
                  all applicable laws and regulations. We reserve the right to
                  update these terms at any time. Continued use of our services
                  signifies your acceptance of the changes.
                </p>
              </section>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">
                Accept
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}