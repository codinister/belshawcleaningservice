'use client'

import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Image from 'next/image'
import useGetQuery from '@/data/queryprovider/useGetQuery';
import BlockContent from '@sanity/block-content-to-react';
import { PostType } from '@/@types/postTypes';


const Ourmission = () => {
  const  post: PostType  = useGetQuery('post','/post') || [];

    //Get Laundry Service
    const laundryservice = Object.values(post).filter((v) => {
      return v.slug === 'our-mission'
    }).map((vl,k) =>(
      <div key={k} className="about">
        <div>
          <h1>{vl.title}</h1>
          <div>
               <BlockContent
                   blocks={vl.body}
                   projectId={process.env.NEXT_PUBLIC_SANITY_ID}
                   dataset="production"
                 />
          </div>
        </div>
        <div>
    <Image width="5" height="4" layout="responsive" src={vl.image+''} alt="" />
        </div>
      </div>
  ))


  return (
    <>
        <Banner img="/aboutus.jpeg" />

      <Bannertitle 
        mainheading='Our Mission' 
        subheading='Our customers are our top priority' 
      />

      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}



export default Ourmission
