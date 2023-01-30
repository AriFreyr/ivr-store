import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import React from "react";
import styles from "./nav-menu.module.css";

export default function NavMenu() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex lg:gap-x-11">
        {/*         <NavigationMenu.Item>
          <NavigationMenu.Trigger />
          <NavigationMenu.Content>
            <NavigationMenu.Link />
          </NavigationMenu.Content>
        </NavigationMenu.Item> */}

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/products"
              className="block rounded p-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              Products
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={`${styles.trigger} relative flex items-center gap-1 rounded p-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50`}
          >
            Overview{" "}
            <ChevronDown
              aria-hidden
              size={14}
              className="transition-transform"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" absolute left-0">
            <ul className="mt-4 grid w-[600px] grid-flow-col grid-rows-3 gap-4 rounded bg-white py-5 px-5 shadow-md">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/products"
              className="block rounded p-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              Marketplace
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/products"
              className="block rounded p-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              Company
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/*         <NavigationMenu.Item>
          <NavigationMenu.Trigger />
          <NavigationMenu.Content>
            <NavigationMenu.Sub>
              <NavigationMenu.List />
              <NavigationMenu.Viewport />
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
 */}
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

interface Props {
  title: string;
  className?: string;
  children?: React.ReactNode;
  href: string;
}

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li className="rounded p-2 hover:bg-gray-100">
      <NavigationMenu.Link asChild>
        <Link {...props} ref={forwardedRef}>
          <div className="text-xs font-semibold">{title}</div>
          <p className="pt-1 text-sm leading-relaxed text-gray-500">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    </li>
  ),
);
