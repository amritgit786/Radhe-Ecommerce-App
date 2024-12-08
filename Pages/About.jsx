import { assets } from "../assets/assets";
import Title from "../Components/Title";
import NewsLetterBox from "../Components/NewsLetterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4 ">
          <p>
            Radhe Selection was born out of a passion for quality and a vision
            to transform the online shopping experience. Our journey started
            with a simple mission: to create a platform where customers can
            seamlessly discover, browse, and purchase a wide array of products
            from the comfort of their homes.
          </p>
          <p>
            Since our inception, we have dedicated ourselves to curating a
            diverse selection of top-quality products that appeal to all tastes
            and preferences. From the latest in fashion and beauty to essential
            home goods and electronics, Radhe Selection offers an expansive
            collection sourced from reliable brands and trusted suppliers.
          </p>
          <b className="text-gray-800">Our Misson</b>
          <p>
            At Radhe Selection, our mission is to empower customers with a world
            of choice, convenience, and confidence. We are committed to
            delivering a seamless shopping experience that goes above and beyond
            expectations, from exploring our products to placing orders,
            receiving deliveries, and beyond.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier..
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
