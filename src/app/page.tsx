"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/6615230/pexels-photo-6615230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A busy architectural workspace featuring blueprints, sketches, and drafting tools."},
  {"id":"about-image","url":"https://images.pexels.com/photos/34271985/pexels-photo-34271985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"creative design process - Photo by Deniz ŞENGÜL"},
  {"id":"testimonials-image1","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonials-image2","url":"https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professional women collaborating with a laptop in a modern office setting."},
  {"id":"testimonials-image3","url":"https://images.pexels.com/photos/7415122/pexels-photo-7415122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful family enjoys time together on a couch surrounded by moving boxes in their new home."},
  {"id":"testimonials-image4","url":"https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Focused woman in a red hoodie using a laptop in a dimly lit room with technology brands displayed."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Raymond Design Studio"
          buttonText="Contact"
          buttonVariant="hover-magnetic"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Raymond Design Studio"
            description="Crafting innovative and personalized design solutions."
            imageSrc={
              assetMap.find((a) => a.id === "hero-image")?.url || "/public/images/placeholder.webp"
            }
            buttons={[
              { text: "Our Work", href: "about" },
              { text: "Contact Us", href: "contact" },
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "At Raymond Design Studio, innovation meets creativity.",
              "We pride ourselves on delivering designs that inspire."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
            showBorder={true}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Client Testimonials"
            description="Hear what our clients have to say about us."
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO",
                testimonial: "The team at Raymond Design Studio transformed our ideas into reality.",
                imageSrc: assetMap.find((a) => a.id === "testimonials-image1")?.url || "/public/images/placeholder.webp",
              },
              {
                id: "2",
                name: "James Mitchell",
                role: "Architect",
                testimonial: "Exceptional attention to detail and creativity.",
                imageSrc: assetMap.find((a) => a.id === "testimonials-image2")?.url || "/public/images/placeholder.webp",
              },
              {
                id: "3",
                name: "Emily Davis",
                role: "Interior Designer",
                testimonial: "A seamless experience from start to finish.",
                imageSrc: assetMap.find((a) => a.id === "testimonials-image3")?.url || "/public/images/placeholder.webp",
              },
              {
                id: "4",
                name: "Michael Chen",
                role: "Project Manager",
                testimonial: "Their innovative designs have elevated our projects.",
                imageSrc: assetMap.find((a) => a.id === "testimonials-image4")?.url || "/public/images/placeholder.webp",
              },
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get In Touch"
            title="Let's Discuss Your Project"
            description="Reach out to us today and bring your vision to life."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Privacy Policy", href: "#privacy" },
                  { label: "Terms of Service", href: "#terms" },
                ],
              },
              {
                items: [{ label: "Contact", href: "#contact" }],
              },
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
