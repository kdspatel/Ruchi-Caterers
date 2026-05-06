// BlogPage.jsx

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "Embarking on a delightful culinary journey in Kochi promises a symphony of flavors and unforgettable experiences",
    date: "Jan 9, 2024",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Ruchi Caters, standing tall in culinary excellence, transforms events into extraordinary affairs, bringing a creative flair to every occasion. Savor the sensory symphony as elite caterers craft exquisite masterpieces.",

    content: `
      Ruchi Caters, standing tall in culinary excellence, transforms events into extraordinary affairs, bringing a creative flair to every occasion.

      Savor the sensory symphony as elite caterers craft exquisite masterpieces, offering diverse options from traditional Kerala delicacies to international flavors.

      Beyond delectable dishes, Kochi’s finest caterers prioritize exceptional service, ensuring meticulous attention from planning to the grand finale.

      Customization is key, with top catering services in Kochi tailoring menus to perfection while reflecting your vision and enhancing the overall event experience.
    `,
  },

  {
    id: 2,
    title:
      "Embarking on a Flavorful Journey: The Art of Wedding Catering in Kerala",
    date: "Oct 8, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Weddings in Kerala are more than celebrations; they are a grand symphony of vibrant traditions, soulful music, colorful attire, and unforgettable culinary experiences.",

    content: `
      Weddings in Kerala are more than just ceremonies; they are unforgettable celebrations filled with culture, emotions, and incredible cuisine.

      Ruchi Caterers specializes in bringing luxurious wedding dining experiences with authentic Kerala flavors and premium hospitality.
    `,
  },

  {
    id: 3,
    title:
      "An Exquisite Culinary Journey: Unveiling Best Catering Service in Kerala",
    date: "Aug 8, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Kerala, known as God’s Own Country, is famous for its rich culinary heritage and breathtaking beauty. Discover premium catering services for unforgettable events.",

    content: `
      Kerala’s culinary legacy is world famous. From traditional sadya to modern gourmet experiences, Ruchi Caterers creates memorable moments with food.
    `,
  },

  {
    id: 4,
    title: "Let’s delve into the world of corporate catering",
    date: "Nov 8, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Corporate catering includes expertly curated meals for business gatherings, anniversaries, AGM meetings, breakfast sessions, and premium office events.",

    content: `
      Corporate catering is essential for creating professional and memorable business events. Ruchi Caterers delivers premium office dining solutions with exceptional service.
    `,
  },

  {
    id: 5,
    title:
      "THE ULTIMATE CHECKLIST FOR PERFECT EVENT CATERING: 5 MISTAKES TO AVOID",
    date: "Sep 5, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "When hosting a formal event, every detail matters. Avoid common catering pitfalls and create an unforgettable experience for your guests.",

    content: `
      Avoiding common catering mistakes can elevate your event experience. From menu planning to service timing, every detail matters in event catering.
    `,
  },

  {
    id: 6,
    title:
      "Crafting Unforgettable Culinary Experiences: Exploring Thrissur’s Premier Catering Services",
    date: "Oct 17, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "From weddings to social gatherings and corporate events, discover how Thrissur’s catering services craft cherished gastronomic moments.",

    content: `
      Thrissur’s catering industry is filled with elegance, tradition, and innovation. Ruchi Caterers crafts experiences that blend taste and luxury perfectly.
    `,
  },

  {
    id: 7,
    title:
      "SUPER COST-EFFECTIVE CORPORATE CATERING SERVICES IN TRIVANDRUM",
    date: "Aug 26, 2023",
    author: "ruchigroupkkm",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Affordable corporate catering services in Trivandrum for business events, Ramadan Iftar dinners, private dining, production houses, and more.",

    content: `
      Affordable yet premium catering services in Trivandrum help businesses host successful events with elegant food presentation and exceptional hospitality.
    `,
  },
];

export default function BlogPage() {

  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, {
      state: {
        blog,
      },
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden mt-10">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover scale-110 opacity-30"
          />

          <div className="absolute inset-0 bg-black/70" />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >

          <p className="uppercase tracking-[8px] text-yellow-400 text-sm mb-4">
            Ruchi Caterers Blog
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            Culinary
            <span className="block text-yellow-400">
              Stories & Insights
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Explore Kerala’s finest catering experiences, wedding inspirations,
            corporate events, and unforgettable culinary journeys.
          </p>

        </motion.div>

      </section>

      {/* BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">

        <div className="flex flex-wrap justify-center gap-10">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group w-full sm:w-[340px] bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-yellow-400/50 transition duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col min-h-[340px]">

                <div className="flex items-center gap-3 text-sm text-white/60 mb-4 flex-wrap">

                  <CalendarDays size={16} />

                  <span>{blog.date}</span>

                  <span>•</span>

                  <span>{blog.author}</span>

                </div>

                <h2 className="text-2xl font-bold leading-snug mb-4 line-clamp-3 group-hover:text-yellow-400 transition duration-300">
                  {blog.title}
                </h2>

                <p className="text-white/65 leading-relaxed line-clamp-5 flex-1">
                  {blog.excerpt}
                </p>

                <button
                  onClick={() => handleReadMore(blog)}
                  className="mt-6 flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all duration-300"
                >

                  Read More

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}