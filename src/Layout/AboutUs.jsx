import { FaStar } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="mt-5 space-y-5  w-[1200px] mx-auto">
      <button className="p-2 px-4 rounded-2xl border-2">Testimonial</button>
      <h1 className="text-3xl font-semibold">What they say about us</h1>
      <div className="flex gap-4 ">
        <div className="bg-yellow-50 rounded-xl p-6">
          <h4 className="text-2xl font-semibold">
            Expertise and Compassion Combined
          </h4>
          <p>
            I can`t thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex space-x-4">
            <div>
              <img
                src="https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg?w=996&t=st=1720064686~exp=1720065286~hmac=527d95ad044408c877354563dadbf35cdffb4602927da38d04b2ded93c2d75fc"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Leroy Jenkins</h4>
              <span className="text-xs dark:text-gray-600 flex">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-6">
          <h4 className="text-2xl font-semibold">
            Life-Saving Care, Life-Changing Experience
          </h4>
          <p>
            I can`t thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex space-x-4">
            <div>
              <img
                src="https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg?w=996&t=st=1720064686~exp=1720065286~hmac=527d95ad044408c877354563dadbf35cdffb4602927da38d04b2ded93c2d75fc"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Leroy Jenkins</h4>
              <span className="text-xs dark:text-gray-600 flex">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-6">
          <h4 className="text-2xl font-semibold">
            {" "}
            A Partner in Health and Wellness
          </h4>
          <p>
            I can`t thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex space-x-4">
            <div>
              <img
                src="https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg?w=996&t=st=1720064686~exp=1720065286~hmac=527d95ad044408c877354563dadbf35cdffb4602927da38d04b2ded93c2d75fc"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Leroy Jenkins</h4>
              <span className="text-xs dark:text-gray-600 flex">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
