import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto my-1 flex justify-between items-center">
          <a href="#" className="text-black font-bold">
            <Image src="/log.png" alt="Mylogo Logo" width={60} height={30} />
          </a>
          <div>
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white">
              Button
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="bg-gray-100 text-black py-5">
          <div className="container mx-auto text-center">
            <p className="text-4xl font-bold mb-2">
              Start making Money from digital Products today
            </p>
            <h1 className="text-4xl mb-4">
              Video Games, Gift Cards, and Softwares
            </h1>
            <p className="text-lg mb-8">
              Explore our collection of digital products and start enjoying your favorite games and software today!
            </p>
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600">
              <a href="#">Create a Free Account</a>
            </button>
            <div className="mt-5 rounded-lg overflow-hidden">
              <video controls className="mx-auto" width="640" height="360">
                <source src="/web.mkv" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Logos section */}
        <section className="py-8 overflow-x-auto">
          <div className="container mx-auto flex justify-center items-center">
            <div className="flex space-x-2 animate-marquee">
              <img src="/ps.png" alt="PlayStation" className="h-12" />
              <img src="/spot.png" alt="Spotify" className="h-12" />
              <img src="/gp.png" alt="Google Play" className="h-12" />
              <img src="/origin.png" alt="Origin" className="h-12" />
              <img src="/steam.png" alt="Steam" className="h-12" />
            </div>
          </div>
        </section>

        {/* Scroll down feature */}
        <div className="container text-black mx-auto text-center mt-4">
          <p>Scroll down for more</p>
          <svg
            className="w-6 h-6 mx-auto mt-2 text-gray-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>

        {/* Collaboration section */}
        <section className="bg-gray-100 text-black py-5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Why should you collaborate with us?
            </h2>
            <div className="flex flex-wrap justify-center">
              {/* Reliable Suppliers section */}
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <Image
                    src="/rel.png"
                    alt="Supplier Logo"
                    width={70}
                    height={50}
                    className="mx-auto mb-4"
                  />
                  <h2 className="text-lg font-bold uppercase mb-4">
                    Our Reliable Suppliers
                  </h2>
                  <p className="text-lg mb-8">
                    We work with trusted suppliers who provide high-quality
                    products and excellent service. Our partnerships ensure that
                    you receive the best digital products and experiences.
                  </p>
                </div>
              </div>

              {/* Expert Support section */}
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <Image
                    src="/sup.png"
                    alt="Export Logo"
                    width={60}
                    height={50}
                    className="mx-auto mb-4"
                  />
                  <h2 className="text-lg font-bold uppercase mb-4">
                    Expert Support
                  </h2>
                  <p className="text-lg mb-8">
                    We provide comprehensive expert support to ensure smooth
                    transactions for international clients. Our team handles all
                    the necessary documentation and logistics.
                  </p>
                </div>
              </div>

              {/* Multiple Payments section */}
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <Image
                    src="/pay.png"
                    alt="Payments Logo"
                    width={60}
                    height={50}
                    className="mx-auto mb-4"
                  />
                  <h2 className="text-lg font-bold uppercase mb-4">
                    Multiple Payments
                  </h2>
                  <p className="text-lg mb-8">
                    We offer multiple payment options to make transactions
                    convenient for our customers. Choose from a variety of
                    secure payment methods for hassle-free shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Partnership Program section */}
        <section className="bg-gray-100 text-black py-5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Partnership Program
            </h2>
            <p className="text-lg mb-4">
              Our partnership program offers exclusive benefits and resources for businesses looking to grow with us. Collaborate with our team to unlock new opportunities and expand your reach in the digital marketplace.
            </p>
            <Image
              src="/part.png"
              alt="Partnership Program"
              width={500}
              height={300}
              className="mx-auto mb-8"
            />
            <div className="border-l-4 border-r-4 border-blue-500 pl-4 pr-4">
              {/* Exclusive Prices and Offers */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Exclusive Prices and Offers for You
                </h3>
                <p className="text-lg">
                  Enjoy special pricing and unique offers that are only available to our partners. Maximize your profits and take advantage of our competitive rates.
                </p>
              </div>

              {/* Stocks Never Run Out */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  The Stocks Never Run Out
                </h3>
                <p className="text-lg">
                  We ensure a consistent supply of products so you never have to worry about running out of stock. Keep your customers happy with our reliable inventory.
                </p>
              </div>

              {/* Special Customer Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Special Customer Services Just for You
                </h3>
                <p className="text-lg">
                  Receive dedicated customer service tailored to your needs. Our support team is here to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Games and Gift Cards section */}
        <section className="bg-gray-100 text-black py-5">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
              {/* Video Games section */}
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-bold mb-4">Video Games</h2>
                  <p className="text-lg mb-4">
                    Discover an extensive selection of video games across various genres and platforms. From the latest releases to timeless classics, we have something for every gamer.
                  </p>
                  <a href="#" className="text-blue-500 font-bold">
                    Visit Video Games Page
                  </a>
                </div>
              </div>

              {/* Gift Cards section */}
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-bold mb-4">Gift Cards</h2>
                  <p className="text-lg mb-4">
                    Browse our wide range of gift cards for popular platforms and services. Whether for gaming, streaming, or shopping, our gift cards offer convenience and great value.
                  </p>
                  <a href="#" className="text-blue-500 font-bold">
                    Visit Gift Cards Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mr.Nite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
 