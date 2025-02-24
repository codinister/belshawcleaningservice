'use client'


import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Image from 'next/image'
import useGetQuery from '@/data/queryprovider/useGetQuery';
import { PostType } from '@/@types/postTypes';
import BlockContent from '@sanity/block-content-to-react';




const Ourcorevalues = () => {
const post: PostType = useGetQuery('post','/post') || [];

    //Get Laundry Service
    const laundryservice = Object.values(post).filter((v) => {
      return v.slug === 'our-core-values'
    }).map((vl,k) =>(
      <div key={k} className="about">
        <div>
          <h1>{vl.title}</h1>
          <div>
            <BlockContent blocks={vl.body}  />
          </div>
        </div>
        <div>
    <Image width="5" height="6" layout="responsive" src={vl.image+''} alt="" />
        </div>
      </div>
  ))


  return (
    <>
        <Banner img="/aboutus.jpeg" />

      <Bannertitle 
        mainheading='Our Core Values' 
        subheading='Among our competitors we stand out!' 
      />

      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}




export default Ourcorevalues
