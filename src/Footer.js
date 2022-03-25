

export default function Footer() {
  
  return (
    <div className="  text-cyan-500  ">
      <div className=" grid grid-cols-2  md:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
        <div className="relative bg-cover top-2 transition duration-500 hover:scale-105">
          <div className="w-0 h-0 md:w-auto md:h-auto">
            <img
              layout="responsive"
              width={1920}
              height={1080}
              //src="https://media.istockphoto.com/photos/wood-table-top-on-blurred-of-counter-cafe-shop-with-light-for-or-picture-id924418708?k=20&m=924418708&s=612x612&w=0&h=dtmYnoc2NN3uBisSHP4m35cY4KVFtNJJvQfqrU1n4-s="
              src="https://media.istockphoto.com/vectors/south-asia-map-high-detailed-political-map-of-southern-asian-region-vector-id1272699434?k=20&m=1272699434&s=612x612&w=0&h=Lmy0_7Q75NHA5U3i4o72wNhkOwdVG8Xe5KlWtj6mCkI="
             alt=""
            />
          </div>
          <div className="md:absolute top-0 bg-gradient-to-b  h-full w-full" />
          <div className="md:absolute bottom-0  bg-gradient-to-t  h-full w-full">
            <div className="flex items-center justify-center md:my-10">
              <div className="bg-black bg-opacity-50 md:bg-opacity-70 p-5 pb-4  w-full mx-0.5 md:min-w-0 md:mx-10 md:max-w-lg rounded-lg">
                <img className="relative left-12 " src="" alt="" />
                <div className=" text-center">
                  <h1 className="footerdiv font-bold text-lg mb-0  text-red-500">
                    {" "}
                    Get to Know Us{" "}
                  </h1>

                  <p className="sidebar_sub_items hover:text-white">About Us</p>
                  <p className="sidebar_sub_items hover:text-white">Careers</p>
                  <p className="sidebar_sub_items hover:text-white">
                    Press Releases
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Amazon Cares
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Gift a Smile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-7 transition duration-500 hover:scale-105 ">
          <div className="w-0 h-0 md:w-auto md:h-auto">
            <img
              layout="responsive"
              width={1920}
              height={1080}
              src="https://media.istockphoto.com/vectors/glowing-low-polygonal-pricing-tag-or-item-label-with-string-isolated-vector-id1069320226?k=20&m=1069320226&s=612x612&w=0&h=lbrnky4AUVgkB7piMsql3DIZg3TWPpZpE9kBZHXPMfQ="
              alt=""
            />
          </div>
          <div className="md:absolute top-0 bg-gradient-to-b   h-full w-full" />
          <div className="md:absolute bottom-0  bg-gradient-to-t h-full w-full">
            <div className="flex items-center justify-center md:my-20">
              <div className="bg-black bg-opacity-50 md:bg-opacity-70 p-5 pb-4  w-full mx-0.5 md:min-w-0 md:mx-10 md:max-w-lg rounded-lg">
                <img className="relative left-12 " src="" alt="" />
                <div className=" text-center">
                  <h1 className="font-bold text-lg mb-3 text-red-500">
                    Make Money with Us{" "}
                  </h1>
                  <p className="sidebar_sub_items hover:text-white">
                    Sell on Amazon
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Sell under Amazon Accelerator
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Amazon Global Selling
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Become an Affiliate
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Fulfilment by Amazon
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Advertise Your Products
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Amazon Pay on Merchants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative transition duration-500 hover:scale-105 ">
          <div className="w-0 h-0 md:w-auto md:h-auto">
            <img
              layout="responsive"
              width={1920}
              height={1080}
              src="https://media.istockphoto.com/vectors/route-planning-city-driving-road-network-destination-map-vector-id1268054405?k=20&m=1268054405&s=612x612&w=0&h=6m5T-2jzr31HEvglXzkinqSGMS-GKWZG6IedMZsoot8="
              alt=""
            />
          </div>
          <div className="md:absolute top-0 bg-gradient-to-b  h-full w-full" />
          <div className="md:absolute bottom-0  bg-gradient-to-t  h-full w-full">
            <div className="flex items-center justify-center md:my-10">
              <div className="bg-black bg-opacity-50 md:bg-opacity-70 p-5 pb-4  w-full mx-0.5 md:min-w-0 md:mx-10 md:max-w-lg rounded-lg">
                <img className="relative left-12 " src="" alt="" />
                <h1 className="font-bold text-lg mb-3 text-center text-red-500">
                  Connect with Us{" "}
                </h1>
                
                  <div className="sidebar_sub_items relative  flex hover:text-white left-2 items-center justify-center max-w-sm m-auto  ">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/07/27/08/20/instagram-icon-6496194__340.png"
                      className="h-10 w-10  relative "
                      alt=""
                    />
                    <div className="pl-3">
                      Instagram
                    </div>
                  </div>

                  {/* <div className="sidebar_sub_items  left-1 p-1 relative  flex hover:text-white  items-center justify-center max-w-sm m-auto">
                    <img
                     src="https://raw.githubusercontent.com/RaviRafaliya11/Amazon/efb451d538e9daea9e0e79e9e047b02d165d4151/public/Facebook.svg"
                      className="h-9 w-10 relative left-1 pl-1 rounded-full"
                      alt=""
                    />
                    <div className="pl-5"> 
                      Facebook
                    </div>
                  </div> */}

                  <div className="sidebar_sub_items p-2  relative   hover:text-white flex items-center justify-center max-w-sm m-auto">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCA1O-zO4tq38TX_za98cpXXGEuDD1M1RQQ&usqp=CAU"
                      className="h-8 w-8 relative left-1    rounded-full"
                      alt=""
                    />
                    <div className="pl-6">Twitter</div>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-4 transition duration-500 hover:scale-105">
          <div className="w-0 h-28 md:w-auto md:h-auto">
            <img
              layout="responsive"
              width={1920}
              height={1080}
              src="https://media.istockphoto.com/vectors/india-map-glowing-purple-neon-lamp-sign-vector-id1299161795?k=20&m=1299161795&s=612x612&w=0&h=JMkSrrEFtem-cNW-IEJbg9agG3OFztJVlw5VrXDjteY="
              alt=""
            />
          </div>
          <div className="md:absolute top-0  bg-gradient-to-b  h-full w-full" />
          <div className="md:absolute bottom-0  bg-gradient-to-t  h-full w-full">
            <div className="flex items-center justify-center md:my-10">
              <div className="bg-black bg-opacity-50 md:bg-opacity-70 p-5 pb-4  w-full mx-0.5 md:min-w-0 md:mx-10 md:max-w-lg rounded-lg">
                <img className="relative left-12 " src="" alt="" />
                <div className=" text-center">
                  <h1 className="font-bold text-lg mb-0 text-red-500">
                    {" "}
                    Let Us Help You{" "}
                  </h1>

                  <p className="sidebar_sub_items hover:text-white">
                    COVID-19 and Amazon
                  </p>
                  <p  className="sidebar_sub_items hover:text-white">
                    Your Account
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Returns Centre
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    100% Purchase Protection
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Amazon App Download
                  </p>
                  <p className="sidebar_sub_items hover:text-white">
                    Amazon Assistant Download
                  </p>
                  <p className="sidebar_sub_items hover:text-white">Help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-2 items-center justify-center ">
        {/* <img
          src="https://links.papareact.com/f90"
          width={76}
          height={23}
          //objectFit="contain"
          className="cursor-pointer"
          alt=""
        /> */}
        <p>
          COMPANY NAME
        </p>
      </div>
      <div className="text-center pb-3 text-sm text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">
        © 2022 Hardik Patoliya&trade;
      </div>
    </div>
  );
}
