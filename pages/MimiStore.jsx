import Image from 'next/image';
import React from 'react';
import MimiStoreImg from '../public/assets/projects/mimiStore.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const MimiStore = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={MimiStoreImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>MimiStore</h2>
          <h3>HTML / Css / PHP</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>MimiStore</p>
          <h2>Overview</h2>
          <p> A web app that offers clothing for children, women, and men is an online retail platform designed to provide users with a convenient and accessible way to shop for a variety of clothing items. The app typically features a range of clothing items, including shirts, pants, dresses, skirts, jackets, and accessories such as shoes, bags, and jewelry.</p>

            <p>Users can browse through the app's inventory, filtering results by size, color, style, and other criteria. They can also view product descriptions and images, and add items to their cart for purchase.</p>

            <p>To make the shopping experience more personalized, the app may offer recommendations based on a user's browsing and purchase history. It may also provide user reviews and ratings for each product, helping shoppers make informed decisions about their purchases.</p>

            <p>Overall, a web app that offers clothing for children, women, and men is a convenient and accessible way to shop for a wide range of clothing items from the comfort of one's home or office.</p>
          <a
            href='/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://mstore.co.ke/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Css
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PHP
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default MimiStore;