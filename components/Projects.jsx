import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ErrandsImg from '../public/assets/projects/errands.jpg';
import MobiDocImg from '../public/assets/projects/mobidoc.jpg'
import Yummy_RecipeImg from '../public/assets/projects/yummy_recipe.jpg'
import MimiStoreImg from '../public/assets/projects/mimiStore.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#d64040]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Errands App'
            backgroundImg={ErrandsImg}
            projectUrl='/Errands'
            tech='Django'
          />
          <ProjectItem
            title='MobiDoc App'
            backgroundImg={MobiDocImg}
            projectUrl='/MobiDoc'
            tech='React JS'

          />
          <ProjectItem
            title='Yummy_Recipe App'
            backgroundImg={Yummy_RecipeImg}
            projectUrl='/Yummy_Recipe'
            tech='Flask'

          />
          <ProjectItem
            title='MimiStore'
            backgroundImg={MimiStoreImg}
            projectUrl='/MimiStore'
            tech='HTML'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;