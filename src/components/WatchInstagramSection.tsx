import watchInsta1 from '@/assets/watch-insta-1.jpg';
import watchInsta2 from '@/assets/watch-insta-2.jpg';
import watchInsta3 from '@/assets/watch-insta-3.jpg';
import { Instagram } from 'lucide-react';

const instagramImages = [
  {
    id: 1,
    image: watchInsta1,
    caption: "Precision meets style in our latest collection #LuxuryWatches"
  },
  {
    id: 2,
    image: watchInsta2,
    caption: "Behind the scenes: Master craftsmen at work #SwissMade"
  },
  {
    id: 3,
    image: watchInsta3,
    caption: "Time is the most valuable currency #TimeIsLuxury"
  }
];

const WatchInstagramSection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-[3px] text-primary mb-4">Follow Us</h2>
          <p className="text-muted text-lg">@timepiece_official</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instagramImages.map((item) => (
            <div key={item.id} className="group cursor-pointer relative overflow-hidden">
              <img
                src={item.image}
                alt="Instagram post"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchInstagramSection;