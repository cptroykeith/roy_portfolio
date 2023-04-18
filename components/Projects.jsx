import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Errands App'
            backgroundImg={propertyImg}
            projectUrl='/Errands'
            tech='React JS'
          />
          <ProjectItem
            title='Mobidoc App'
            backgroundImg={cryptoImg}
            projectUrl='/Mobidoc'
            tech='React JS'

          />
          <ProjectItem
            title='Yummy_Recipes App'
            backgroundImg={netflixImg}
            projectUrl='/Yummy_Recipes'
            tech='React JS'

          />
          <ProjectItem
            title='mimiStore'
            backgroundImg={twitchImg}
            projectUrl='/mimiStore'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;