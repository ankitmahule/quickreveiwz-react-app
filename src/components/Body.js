import "../scss/body.scss";
const Body = () => {
  return (
    <main>
      <section className="upper-section">
        <section className="banner flex">
          <section className="container search-container">
            <h1 className="banner-heading leading-tight">
              Curated and pertinent information for the e-commerce products your
              are looking for
            </h1>
            <ul className="highlights md:text-2xl">
              <li>A detailed analysis of the products to help you buy right</li>
              <li>Navigate easily to marketplace to buy the product</li>
              <li>Clear and concise reviews</li>
            </ul>
            {/* <div className="search-section">
              <input
                type="text"
                placeholder="Type your favorite product name"
                className="search-input text-slate-400 w-3/4 mt-12 text-2xl px-6 py-4"
              />
              <button className="search-button text-2xl px-6 py-4">
                <em className="fa fa-search"></em>
              </button>
            </div> */}
          </section>
        </section>
      </section>

      <section className="black-bg">
        <section className="container mx-auto py-40">
          <h1 className="text-center text-6xl text-gray-400 mb-24">
            Did you Know?
          </h1>
          <div className="facts lg:flex lg:space-x-20">
            <div className="lg:flex items-center shadow-xl h-64 justify-around facts-section p-10">
              <div className="xs:block numbers text-7xl mr-5">54%</div>
              <div className="text-2xl">
                of online shoppers read reviews for everything they purchase
              </div>
            </div>
            <div className="lg:flex items-center justify-around shadow-xl facts-section p-10">
              <div className="xs:block numbers text-7xl mr-4">100+</div>
              <div className="text-2xl">
                reviews make a business trustworthy, say 39% of online shoppers
              </div>
            </div>
            <div className="lg:flex items-center justify-around shadow-xl facts-section p-10">
              <div className="xs:block numbers text-7xl mr-4">88%</div>
              <div className="text-2xl">
                of online shoppers read at least 3 reviews before purchase
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="container mx-auto py-40">
        <h1 className="text-center text-6xl text-gray-600 mb-24">
          Your Guide To Buy Right
        </h1>
        <div className="lg:flex lg:space-x-20 justify-evenly">
          <div className="features flex rounded h-64 items-center justify-center p-10 shadow-xl xs:my-24">
            <em className="text-7xl far fa-file-alt mr-7"></em>
            <div className="text-4xl">Top Articles</div>
          </div>
          <div className="features flex rounded h-64 items-center justify-center p-10 shadow-xl xs:my-24">
            <em className="text-7xl fas fa-cart-plus mr-7"></em>
            <div className="text-4xl">Top Rated Products</div>
          </div>
          <div className="features flex rounded h-64 items-center justify-center p-10 shadow-xl xs:my-24">
            <em className="text-7xl fas fa-check mr-7"></em>
            <div className="text-4xl">Best Buy</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-40">
        <h1 className="text-center text-6xl text-gray-600 mb-24">
          Recent Reviews
        </h1>
        <div className="products-section lg:flex justify-evenly lg:space-x-20">
          <div className="product-desc py-10 md:mb-52 w-10/12">
            <p className="text-2xl mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              similique repudiandae dolorem necessitatibus, id maxime fugiat
              error aut perferendis totam corrupti nobis vitae. Quis cumque
              animi vol Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Sapiente similique repudiandae dolorem necessitatibus, id
              maxime fugiat error aut perferendis totam corrupti nobis vitae.
              Quis cumque animi vol Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente similique repudiandae dolorem
              necessitatibus, id maxime fugiat error aut perferendis totam
              corrupti nobis vitae. Quis cumque animi vol
            </p>
            <div className="flex items-center">
              <p className="text-4xl mr-10">
                <em className="fa fa-rupee"></em>400.00
              </p>
              <button className="buy-now">More Details</button>
            </div>
          </div>
          <div className="product-image py-10">
            <img
              src="../../public/assets/images/placeholder.webp"
              alt="product"
            />
          </div>
        </div>
        <div className="products-section lg:flex justify-evenly lg:space-x-20">
          <div className="product-image py-10">
            <img
              src="../../public/assets/images/placeholder.webp"
              alt="product"
            />
          </div>
          <div className="product-desc py-10 md:mb-52 w-10/12">
            <p className="text-2xl mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              similique repudiandae dolorem necessitatibus, id maxime fugiat
              error aut perferendis totam corrupti nobis vitae. Quis cumque
              animi vol Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Sapiente similique repudiandae dolorem necessitatibus, id
              maxime fugiat error aut perferendis totam corrupti nobis vitae.
              Quis cumque animi vol Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente similique repudiandae dolorem
              necessitatibus, id maxime fugiat error aut perferendis totam
              corrupti nobis vitae. Quis cumque animi vol
            </p>
            <div className="flex items-center">
              <p className="text-4xl mr-10">
                <em className="fa fa-rupee"></em>2400.00
              </p>
              <button className="buy-now">More Details</button>
            </div>
          </div>
        </div>
        <div className="products-section lg:flex justify-evenly lg:space-x-20">
          <div className="product-desc py-10 md:mb-52 w-10/12">
            <p className="text-2xl mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              similique repudiandae dolorem necessitatibus, id maxime fugiat
              error aut perferendis totam corrupti nobis vitae. Quis cumque
              animi vol Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Sapiente similique repudiandae dolorem necessitatibus, id
              maxime fugiat error aut perferendis totam corrupti nobis vitae.
              Quis cumque animi vol Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente similique repudiandae dolorem
              necessitatibus, id maxime fugiat error aut perferendis totam
              corrupti nobis vitae. Quis cumque animi vol
            </p>
            <div className="flex items-center">
              <p className="text-4xl mr-10">
                <em className="fa fa-rupee"></em>100.00
              </p>
              <button className="buy-now">More Details</button>
            </div>
          </div>
          <div className="product-image py-10">
            <img src="assets/images/placeholder.webp" alt="product" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Body;
