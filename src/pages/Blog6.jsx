import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, User, MessageCircle, Send, Search } from "lucide-react";

export default function Blog6Details() {
  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [comments, setComments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  // SEARCH STATES
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const recentPosts = [
    {
      blog: "Blog 1",
      title: "Embarking on a Culinary Journey with Ruchi Caterers in Kochi",
      link: "/blog/1",
    },
    {
      blog: "Blog 2",
      title: "Corporate Catering Excellence – Ruchi Caterers Experience",
      link: "/blog/2",
    },
    {
      blog: "Blog 3",
      title: "Crafting Unforgettable Catering Experiences for Every Occasion",
      link: "/blog/3",
    },
    {
      blog: "Blog 4",
      title:
        "Elegant Wedding Catering Services Across Kerala by Ruchi Caterers",
      link: "/blog/4",
    },
    {
      blog: "Blog 5",
      title: "Top Event Catering Mistakes You Must Avoid for a Perfect Event",
      link: "/blog/5",
    },
    {
      blog: "Blog 6",
      title: "Premium Corporate Catering Services in Trivandrum",
      link: "/blog/6",
    },
    {
      blog: "Blog 7",
      title: "Luxury Outdoor & Festive Catering Services by Ruchi Caterers",
      link: "/blog/7",
    },
  ];

  // SEARCH FILTER
  const filteredPosts = recentPosts.filter((post) => {
    if (activeSearch.trim() === "") {
      return true;
    }

    return (
      post.blog.toLowerCase().includes(activeSearch.toLowerCase()) ||
      post.title.toLowerCase().includes(activeSearch.toLowerCase())
    );
  });

  // HANDLE SEARCH
  const handleSearch = () => {
    if (search.trim() === "") {
      setActiveSearch("");
      return;
    }

    setActiveSearch(search);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comment) {
      return;
    }

    const newComment = {
      name: formData.name,
      text: formData.comment,
      date: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);

    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] overflow-hidden flex items-center justify-center pt-10 sm:pt-32">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-6"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-4">
            Ruchi Caterers Blog
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight">
            SUPER COST-EFFECTIVE CORPORATE CATERING SERVICES IN TRIVANDRUM
          </h1>
        </motion.div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* LEFT CONTENT */}
          <div>
            {/* META */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-white/60 mb-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>ruchigroupkkm</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>Aug 26, 2023</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>
                  {comments.length}{" "}
                  {comments.length === 1 ? "Comment" : "Comments"}
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[25px] sm:rounded-[35px] border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* BLOG CONTENT */}
            <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8 text-white/75 leading-[2] text-[15px] sm:text-lg">
              <p>
                Ruchi offers affordable corporate catering services in
                Trivandrum for a diverse range of events. This encompasses Iftar
                dinners during Ramadan, exclusive private dinners featuring live
                cooking, various business gatherings, well-equipped setups for
                production houses that include tents, mobile kitchens, tables,
                and more, as well as weddings and more.
              </p>

              <p>
                Established since 1955, Ruchi Caterers have ingrained a culture
                of exquisite taste into our catering business. The inception of
                Ruchi Caterers can be traced back to the visionary concept of T.
                M. Aboobakar. In 1955, he inaugurated his first restaurant in
                Mumbai, later relocating to Kerala where he introduced the famed
                Rajmahal restaurant in 1983.
              </p>

              <p>
                Presently, under the guidance of his son T.N Usman, Ruchi
                Caterers spearheads both outdoor and corporate catering services
                in Trivandrum. Over the span of six decades, we have evolved
                from not just serving exceptional food, but also offering
                unparalleled service and steadfast stability. Our emphasis on
                process-driven structures, rather than being solely reliant on
                individuals, has paved the way for enhanced reliability.
              </p>

              <p>
                We have successfully orchestrated and catered to gatherings of
                20–2000 attendees at significant events since our inception in
                1995, spanning across various cities in Kerala. Ruchi stands as
                a dynamic leader among the premium corporate caterers in
                Trivandrum, renowned for its outstanding cuisine and grandeur
                events.
              </p>

              <p>
                <b>
                  Key Attributes of Corporate Catering Services in Trivandrum:
                </b>
              </p>

              <p>
                Ruchi Caters’ pricing is highly competitive when juxtaposed with
                the majority of corporate catering services in Trivandrum. Our
                track record includes collaborating with an array of esteemed
                local and international clients spanning diverse industries, all
                facilitated from our main office located in Thrissur.
              </p>

              <p>
                The expertise of Ruchi Caterers’ 120+ skilled staff members,
                including accomplished chefs, is complemented by our
                state-of-the-art kitchen. It has earned accreditation in
                compliance with ISO 22000:2018 for the scope of Preparing and
                Serving Food, significantly contributing to the bright future of
                our business.
              </p>

              <p>
                We possess the capability to curate delectable meals for every
                event, backed by a competent team focused on consistently
                delivering top-notch customer service. This feat is made
                possible through our global operations and an extensive network
                of strategically positioned central kitchens throughout Kerala.
                Ruchi caters to a wide array of clients, ranging from
                businesses, corporations, and academic institutions to hotels,
                hospitals, retail establishments, banquets, parties, events, and
                office spaces.
              </p>

              <p>
                Our tireless efforts go into creating the perfect ambiance,
                facilitated by our dedicated and knowledgeable staff. From
                skilled waiters and bartenders to accomplished chefs and event
                managers, our team is committed to ensuring that every aspect of
                your event, from seating arrangements to food presentation and
                service, is executed flawlessly.
              </p>

              <p>
                Ruchi’s offerings encompass affordably exquisite catering
                services in Trivandrum for a multitude of occasions. This
                includes live station events, houseboat parties, corporate
                gatherings, coffee breaks, and lunches. Armed with a cumulative
                experience of 30 years, we are experts in outdoor food catering
                for both small and large events, spanning weddings, birthday
                celebrations, and private parties.
              </p>

              <p>
                Embark on a culinary paradise replete with gourmet flavors and
                captivating aromas! Ruchi Caterers brings a personalized dining
                experience to your doorstep, whether it’s at home, your
                workplace, an outdoor setting, or one of our carefully chosen
                stunning venues an unforgettable dining experience for your
                guests, complete with innovative culinary theatrics performed by
                our exceptional master chefs in an open kitchen setting.
              </p>

              <p>
                <b>
                  Our Comprehensive Corporate Catering Services in Trivandrum
                  include:
                </b>
              </p>

              <p>
                Convocation: Ruchi, the premier caterers in Trivandrum, offers
                catering solutions for college and institution convocation
                events. Students and clients seeking catering for special
                occasions, such as events or parties, can benefit from our
                distinctive corporate catering services in the Trivandrum style.
              </p>

              <p>
                Off-Site Premier Catering Services in Trivandrum: Irrespective
                of the scale of your corporate event, we stand as your reliable
                source for off-site corporate catering services in Trivandrum.
                Be it fleet catering or off-site arrangements, we guarantee
                seamless execution. Rest assured, your clients will not only
                appreciate but also seek more of our services.
              </p>

              <p>
                We extend to our clients the finest culinary offerings and
                services presented by the premier corporate catering company in
                Kerala. Our repertoire includes a luxurious multi-cuisine menu,
                attractively priced to suit a range of preferences. Our
                facilities boast an extensive range of catering options,
                spanning breakfast, lunch, and dinner. We pledge to meet all
                your upcoming corporate catering requirements, ensuring your
                experience with our services is truly gratifying.
              </p>

              <p>
                Festive Celebrations in Educational Institutions: Kerala’s rich
                history is punctuated by a diverse array of festivals, serving
                as a reflection of the nation’s cultural identity. These
                celebrations are invariably accompanied by delectable culinary
                offerings, with Kerala’s cuisine encompassing an extensive
                spectrum of vegetarian and non-vegetarian delights.
              </p>

              <p>
                With a versatile team and a comprehensive range of services, we
                cater to a multitude of events in Trivandrum and beyond. From
                intimate outdoor gatherings to sprawling open festivals
                necessitating elaborate catering arrangements, our skilled chefs
                and servers take care of every detail. Additionally, we proudly
                present Kerala’s premier outdoor catering services, ensuring you
                can sit back and relax.
              </p>

              <p>
                <b>Why Choose Ruchi Caterers?</b>
              </p>

              <p>
                We take pride in serving delectable, nutritious, and wholesome
                cuisines.
              </p>
              <p>
                Our team of professional chefs meticulously curates the events’
                culinary journey, crafting cuisines tailored to your
                preferences.
              </p>
              <p>
                We adapt and diversify our culinary offerings to align with your
                budgetary considerations.
              </p>
              <p>
                The timely and seamless delivery of premium catering services in
                Trivandrum is a commitment upheld by our dedicated team.
              </p>

              <p>
                Our diverse dinner assortment is thoughtfully curated to appeal
                to a wide range of palates. We welcome specific dietary
                requests, including vegetarian, gluten-free, vegan, halal, pure
                vegetarian, or Jain preferences. If a corporate event is on your
                horizon, schedule a tasting session without delay. We pledge to
                create a menu that perfectly aligns with your requirements and
                budget.
              </p>

              <p>
                “Ruchi,” headquartered in Kerala, extends its exceptional
                hospitality services to notable personalities and organizations
                across the globe. Our burgeoning catering company, rooted in
                Kerala, seamlessly blends style and quality, crafting an
                unparalleled experience for our esteemed guests.
              </p>

              <p>
                Our adept chefs orchestrate a symphony of flavors, utilizing the
                finest ingredients to curate an ideal dining experience. Through
                our premier culinary services, we breathe life into your
                concepts, guaranteeing that Ruchi’s delectable offerings satiate
                the culinary aspirations of every visitor.
              </p>
            </div>

            {/* COMMENTS */}
            <div className="mt-20 sm:mt-24">
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
                {comments.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
              </h2>

              {/* COMMENT LIST */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="min-w-[50px] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                        {comment.name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                          <h3 className="font-bold text-base sm:text-lg text-white break-all">
                            {comment.name}
                          </h3>

                          <span className="text-white/40 text-xs sm:text-sm">
                            {comment.date}
                          </span>
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* COMMENT FORM */}
              <div className="mt-16 sm:mt-20">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
                  Leave a Comment
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Write your comment..."
                    rows="6"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-5 sm:px-6 py-4 sm:py-5 outline-none focus:border-yellow-400 resize-none text-sm sm:text-base"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />

                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 px-6 sm:px-8 py-4 rounded-full bg-yellow-400 text-black font-bold flex items-center gap-3 hover:scale-105 transition duration-300 text-sm sm:text-base"
                  >
                    Post Comment
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="lg:sticky lg:top-28 space-y-8">
              {/* SEARCH */}
              <div className="bg-white/5 border border-white/10 rounded-[25px] sm:rounded-[30px] p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Search</h3>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    className="flex-1 bg-black border border-white/10 rounded-l-full px-4 sm:px-5 py-3 outline-none text-sm sm:text-base"
                  />

                  <button
                    onClick={handleSearch}
                    className="bg-yellow-400 text-black px-5 sm:px-6 rounded-r-full font-semibold"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* RECENT POSTS */}
              <div className="bg-white/5 border border-white/10 rounded-[25px] sm:rounded-[30px] p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                  Recent Posts
                </h3>

                <div className="mt-6">
                  {filteredPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={post.link}
                      className="block mt-5 first:mt-0"
                    >
                      <div className="bg-black/40 border border-white/10 rounded-2xl p-4 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition duration-300 cursor-pointer">
                        <p className="text-yellow-400 font-semibold text-sm mb-2">
                          {post.blog}
                        </p>

                        <p className="text-white/70 hover:text-yellow-400 transition leading-relaxed text-sm sm:text-base">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
