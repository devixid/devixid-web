import clsx from "clsx";
import { motion } from "framer-motion";

import ECommerceIllustration from "@/assets/illustrations/ecommerce-illustration.svg";
import MeetingIllustration from "@/assets/illustrations/meeting-illustration.svg";
import ServiceEcommerceDevIllustration from "@/assets/illustrations/service--ecommerce-dev-illustration.svg";
import ServiceWebDesignIllustration from "@/assets/illustrations/service--webdesign-illustration.svg";
import ServiceWebDevIllustration from "@/assets/illustrations/service--webdev-illustration.svg";

import { Button } from "@/components/atoms";
import { initialAnimation, viewportAnimation, whileInViewAnimation } from "@/constants/framer-motion";

export default function HomePage() {
  const ourServices = [
    {
      title: "Website Design",
      subtitle:
        "We will help you design a modern, attractive and responsive website that will provide the best experience for visitors.",
      Image: ServiceWebDesignIllustration
    },
    {
      title: "Website Development",
      subtitle:
        "We will help you build a modern, attractive and responsive website that will provide the best experience for visitors.",
      Image: ServiceWebDevIllustration
    },
    {
      title: "E-Commerce Development",
      subtitle:
        "We can help you build an online store that will make it easy for your customers to make online transactions.",
      Image: ServiceEcommerceDevIllustration
    }
  ];

  return (
    <>
      <header
        className={clsx(
          "container mx-auto p-4 pt-24 md:p-6",
          "md:h-[calc(100vh-100px)] lg:max-h-[900px]",
          "mx-auto mb-20 md:pt-[90px] lg:mb-0 lg:pt-[100px]",
          "flex flex-col items-center justify-center gap-6 md:flex-col-reverse lg:flex-row"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-start justify-start gap-4 sm:items-center sm:justify-center md:gap-6 lg:items-start lg:justify-start",
            "sm:text-center lg:text-left",
            "md:max-w-[576px]"
          )}
        >
          <motion.h1
            initial={initialAnimation}
            viewport={viewportAnimation}
            whileInView={whileInViewAnimation}
            className={clsx(
              "text-5xl font-bold text-headline md:text-[56px] xl:text-7xl",
              "leading-tight tracking-tighter md:leading-[67.77px] xl:leading-[1.2]"
            )}
          >
            Let&rsquo;s build your dream website together!
          </motion.h1>

          <motion.p
            initial={initialAnimation}
            viewport={viewportAnimation}
            whileInView={whileInViewAnimation}
            transition={{
              delay: 0.1
            }}
            className={clsx("text-lg font-medium md:text-2xl")}
          >
            Your Ideas + Our Web Development Services = Your Dream Website.
          </motion.p>

          <motion.div
            transition={{
              delay: 0.2
            }}
            initial={initialAnimation}
            viewport={viewportAnimation}
            whileInView={whileInViewAnimation}
          >
            <Button type="button" size="base" title="Get Your Custom Website Now">
              Get Your Custom Website Now
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={initialAnimation}
          viewport={viewportAnimation}
          whileInView={whileInViewAnimation}
          className={clsx("w-full max-w-[300px] sm:max-w-[400px] md:max-w-[379.98px] lg:max-w-[50%]")}
        >
          <ECommerceIllustration className="h-full w-full" />
        </motion.div>
      </header>

      {/* About Us Section */}
      <div
        id="about-us"
        className={clsx(
          "container mx-auto my-12 p-4 md:p-6 lg:my-24",
          "sm:text-center lg:text-left",
          "lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4"
        )}
      >
        <motion.h2
          initial={initialAnimation}
          viewport={viewportAnimation}
          whileInView={whileInViewAnimation}
          className={clsx(
            "text-4xl font-bold text-headline",
            "tracking-tighter",
            "mb-4",
            "lg:!invisible lg:hidden lg:!opacity-0"
          )}
          title="about-us"
          about="about-us"
        >
          About Us
        </motion.h2>

        <div
          className={clsx(
            "sm:flex sm:flex-col-reverse lg:flex-row lg:items-center lg:justify-center lg:gap-4",
            "md:mx-auto lg:max-w-[unset]"
          )}
        >
          <section
            className={clsx(
              "flex flex-col items-start justify-start gap-4 sm:items-center sm:justify-center md:gap-6 lg:items-start lg:justify-start",
              "mb-8 lg:w-1/2"
            )}
          >
            <motion.h2
              initial={initialAnimation}
              viewport={viewportAnimation}
              whileInView={whileInViewAnimation}
              className={clsx(
                "text-4xl font-bold text-headline lg:text-[56px]",
                "tracking-tighter md:leading-[67.77px]",
                "lg:unset hidden"
              )}
              title="about-us"
              about="about-us"
            >
              About Us
            </motion.h2>

            <motion.p
              initial={initialAnimation}
              viewport={viewportAnimation}
              whileInView={whileInViewAnimation}
              transition={{
                delay: 0.1
              }}
              className={clsx("text-lg")}
            >
              We are Devix.id, a team of young website developers based in Indonesia since 2020. We are ready to work
              with you to build your dream website. Contact us for more information and feel free to talk to us about
              your ideas. We look forward to helping you build a website that will promote your business or organization
              effectively.
            </motion.p>

            <motion.div
              initial={initialAnimation}
              transition={{
                delay: 0.2
              }}
              viewport={viewportAnimation}
              whileInView={whileInViewAnimation}
            >
              <Button type="button" size="base" title="More about us">
                More about us
              </Button>
            </motion.div>
          </section>

          <motion.div
            initial={initialAnimation}
            viewport={viewportAnimation}
            whileInView={whileInViewAnimation}
            className={clsx("mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:mx-0 lg:max-w-[50%]")}
          >
            <MeetingIllustration className="h-full w-full" />
          </motion.div>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        id="our-services"
        className={clsx("container mx-auto my-12 p-4 md:p-6 lg:my-24", "sm:text-center lg:text-left")}
      >
        <motion.h2
          initial={initialAnimation}
          viewport={viewportAnimation}
          whileInView={whileInViewAnimation}
          className={clsx(
            "text-4xl font-bold text-headline lg:text-[56px]",
            "tracking-tighter md:leading-[67.77px]",
            "mb-4 md:mb-0 lg:mb-4"
          )}
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={initialAnimation}
          viewport={viewportAnimation}
          whileInView={whileInViewAnimation}
          className={clsx("text-lg")}
        >
          Let Us Help You Achieve Your Online Goals
        </motion.p>

        <div className={clsx("flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch", "mt-6")}>
          {ourServices.map(({ title, subtitle, Image: ServiceImage }, index) => {
            const key = index.toString();

            return (
              <motion.div
                key={key}
                initial={initialAnimation}
                viewport={viewportAnimation}
                whileInView={whileInViewAnimation}
                transition={{
                  delay: (() => {
                    switch (index) {
                      case 0:
                        return 0;

                      case 1:
                        return 0.15;

                      default:
                        return 0.3;
                    }
                  })()
                }}
                className={clsx(
                  "w-full rounded-2xl bg-white text-center",
                  "p-3 pb-6",
                  "flex flex-col items-center justify-center gap-4"
                )}
              >
                <ServiceImage className={clsx("h-52 w-52")} />
                <h4 className={clsx("text-2xl font-semibold text-headline", "tracking-tighter", "max-w-sm")}>
                  {title}
                </h4>
                <p className={clsx("max-w-sm", "text-lg font-medium")}>{subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
