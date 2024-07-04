
const Faq = () => {
    return (
      <div className="mt-5 space-y-2  w-[1200px] mx-auto">
        <button className="p-2 px-4 rounded-2xl border-2">Faq</button>
        <h2 className="text-3xl font-semibold">Frequntly Asked Question</h2>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p>
              You will always get notified about new components through our
              discord and other social accounts. You can also see the newest
              components on the main component page as well as the websites side
              navigation with a new badge next to their name.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p>
              All updated components will be accompanied by an updated badge.
              YOu will be able to see that on our main components page as well
              as our side navigation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p>
              You will get notified by us about any major news or releases
              through our newsletter and our social accounts.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Faq;