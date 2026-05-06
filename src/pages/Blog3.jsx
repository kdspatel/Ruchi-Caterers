import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, User, MessageCircle, Send, Search } from "lucide-react";

export default function Blog3() {
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
      <section className="relative min-h-[45vh] sm:min-h-[55vh] overflow-hidden flex items-center justify-center pt-14 sm:pt-32">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
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

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold max-w-5xl leading-tight">
            Crafting Unforgettable Culinary Experiences: Exploring Thrissur’s
            Premier Catering Services
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
                <span>Oct 17, 2023</span>
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
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* BLOG CONTENT */}
            <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8 text-white/75 leading-[2] text-[15px] sm:text-lg">
              <p>
                In the vibrant city of Thrissur, orchestrating an event or
                celebration is like painting a canvas of cherished gastronomic
                moments. Be it the grandeur of weddings, the corporate elegance
                of business gatherings, the warmth of social gatherings, or the
                intimacy of family parties, one key element takes center stage –
                the choice of exquisite catering services. This article brings
                forth the heart and soul of Thrissur’s catering landscape, with
                a special focus on those culinary artists who tantalize the
                taste buds of meat enthusiasts. These culinary visionaries are
                celebrated not only for their exceptional quality but also for
                their passion and unwavering commitment to delivering seamless
                dining experiences. Whether it’s a lavish wedding reception or
                an intimate family affair, these professionals know how to paint
                the palate with unforgettable flavors.
              </p>

              <p>The Essence of Exceptional Catering:</p>

              <p>
                Catering services are the architects of the event’s ambiance.
                Thrissur’s most distinguished catering services understand that
                they play a pivotal role in crafting enduring memories.
              </p>

              <p>Thrissur’s Premier Catering Services:</p>

              <p>
                A. Ruchi Caterers: Revered for their impeccable catering
                services, Ruchi Caterers take immense pride in offering an
                extensive menu that caters to a diverse array of tastes and
                preferences. Their culinary prowess spans from traditional
                Kerala delicacies to global cuisine. Ruchi Caterers’ meticulous
                attention to detail ensures that every dish is a work of art,
                not only in terms of flavor but also in its visual presentation.
              </p>

              <p>Thrissur’s Finest Non-Vegetarian Caterers:</p>

              <p>
                Thrissur boasts a cadre of distinguished non-vegetarian caterers
                who specialize in crafting culinary masterpieces for lovers of
                meat.
              </p>

              <p>
                In Conclusion:In Thrissur, the pursuit of the finest catering
                services invariably leads to Ruchi Caterers and Spice Fusion.
                These are more than culinary professionals; they are creators of
                memorable experiences. Their unwavering commitment to culinary
                excellence and their meticulous attention to detail set them
                apart. Whether you are in search of the finest catering services
                in the city or the top non-vegetarian caterers in Thrissur,
                these establishments deliver unmatched quality, impeccable
                service, and cuisine that tantalizes every palate. So, when you
                plan your next event in Thrissur, be sure to engage the finest
                catering services available. Your guests will embark on a
                memorable and delightful culinary journey that will stay with
                them for years to come.
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
