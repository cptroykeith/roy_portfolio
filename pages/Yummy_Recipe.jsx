import Image from 'next/image';
import React from 'react';
import Yummy_RecipeImg from '../public/assets/projects/yummy_recipe.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Yummy_Recipe = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Yummy_RecipeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Yummy_Recipe</h2>
          <h3>Python / Flask / HTML / Css / Circle CI </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Yummy_Recipe</p>
          <h2>Overview</h2>
          <p> Yummy recipes web app is an online platform that provides users with access to a collection of delicious recipes for various types of meals and cuisines. It is designed to be user-friendly and easy to navigate, allowing users to search for recipes by ingredients, meal type, dietary restrictions, and other criteria.</p>

            <p>The app typically provides users with step-by-step instructions for preparing the recipes, along with ingredient lists and cooking times. It may also include nutritional information for each recipe, helping users make informed choices about their food intake.</p>

            <p>Some yummy recipes web apps may also have features such as a shopping list generator, where users can add ingredients to a list and easily access it while shopping for groceries. Additionally, the app may have a social component that allows users to save and share their favorite recipes with friends and family.</p>

            <p>Overall, a yummy recipes web app is a valuable resource for anyone who enjoys cooking and wants to try new and exciting dishes. It provides a convenient and accessible way to discover and prepare delicious meals from the comfort of one's home.</p>
          <a
            href='https://github.com/cptroykeith/-yummy_recipes_frontend-'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='/'
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
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flask
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Circle CI
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

export default Yummy_Recipe;