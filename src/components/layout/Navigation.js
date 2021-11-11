import { Col, Container, Row } from "react-bootstrap";
import title from "../img/AlgoCorp_Solutions_4K.png";
import logo from "../img/Algo_Logo_8K.png";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

/* Navigation  */
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Cart", href: "/cart", current: false },
    { name: "Contact Us", href: `/${"#contact"}`, current: false },
    // { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Disclosure
            as="nav"
            className="bg-gradient-to-r from-green-800 via-green-500 to-blue-300  border-b-2 border-black"
          >
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 lg:pt-3 lg:pb-2 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex-shrink-0 flex items-center">
                        <span className="inline">
                          <h1 className="font-Nunito text-white text-lg border rounded-2xl p-1">
                            Company Logo
                          </h1>
                        </span>
                      </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-blue-800 text-white"
                                  : "text-gray-300 hover:bg-blue-800 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue-800 text-white"
                            : "text-gray-300 hover:bg-purple-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
