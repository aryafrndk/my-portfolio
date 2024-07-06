import { Mail, Home, PhoneCall } from "lucide-react"; 
import Form from "@/components/Form"; 

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="SayHello flex items-center gap-x-4 text-primary text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 🚀
            </div>
            <h1 className="Lets h1 max-w-md mb-8 animate__animated animate__fadeInUp animate__delay-1s">Let's Work Together.</h1>
            <p className="Interested subtitle max-w-[480px] animate__animated animate__fadeInUp animate__delay-1s">
              Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat animate__animated animate__fadeInRight animate__delay-1s"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 animate__animated animate__fadeInUp animate__delay-1s">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <Mail size={18} className="text-primary" />
              <div>aryafrandika0408@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <Home size={18} className="text-primary" />
              <div>Bandung, Indonesia</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+62 877 8916 1803</div>
            </div>
          </div>
          {/* form */}
          <div>
            <Form /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
