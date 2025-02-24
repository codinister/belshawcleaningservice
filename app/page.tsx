'use client'


import Headertitle from '@/components/Headertitle';
import Link from 'next/link';
import Image from 'next/image';
import Slider from '@/components/Slider';
import FreeQuote from '@/components/FreeQuote';
import FreeQuoteQuestions from '@/components/FreeQuoteQuestions';
import useGetQuery from '@/data/queryprovider/useGetQuery';
import { PostType } from '@/@types/postTypes';
import BlockContent from '@sanity/block-content-to-react';

export default function Home() {
  const post: PostType = useGetQuery('post', '/post') || [];

  //Get Residention Cleaning
  const residentialInfo = Object.values(post)
    .filter((v) => {
      return v.slug === 'residential-cleaning-excerpt';
    })
    .map((vl, k) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>
          <BlockContent
            blocks={vl.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_ID}
            dataset="production"
          />
        </div>
      </div>
    ));

  //Get Residention Cleaning Services thumbnails
  const residentialCleaning = Object.values(post)
    .filter((v) => {
      return v.cat_title === 'Residential Cleaning  ';
    })
    .map((vl, k) => (
      <div key={k}>
        <div className="imageBx">
          <Image
            width="4"
            height="3"
            layout="responsive"
            src={vl.image + ''}
            alt=""
          />
        </div>
        <h3>{vl.title}</h3>
      </div>
    ));

  //Get Commercial Cleaning
  const commercialInfo = Object.values(post)
    .filter((v) => {
      return v.slug === 'commercial-cleaning-excerpt';
    })
    .map((vl, k) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>
          <BlockContent
            blocks={vl.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_ID}
            dataset="production"
          />
        </div>
      </div>
    ));

  //Get Commercial Cleaning Services thumbnails
  const commercialCleaning = Object.values(post)
    .filter((v) => {
      return v.cat_title === 'Commercial Cleaning ';
    })
    .map((vl, k) => (
      <div key={k}>
        <div className="imageBx">
          <Image
            width="4"
            height="3"
            layout="responsive"
            src={vl.image + ''}
            alt=""
          />
        </div>
        <h3>{vl.title}</h3>
      </div>
    ));

  //Get Laundry Service
  const laundryservice = Object.values(post)
    .filter((v) => {
      return v.slug === 'laundry-services';
    })
    .map((vl, k) => (
      <div key={k} className="homepage-laundry">
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
          <Image
            width="4"
            height="3"
            layout="responsive"
            src={vl.image + ''}
            alt=""
          />
        </div>
      </div>
    ));

  //Get Our Customes

  const ourcustomers = Object.values(post)
    .filter((v) => {
      return v.cat_title === 'Customers';
    })
    .map((vl, k) => (
      <div key={k}>
        <div className="custbx">
          <div>
            <Image
              width="4"
              height="3"
              layout="responsive"
              src={vl.image + ''}
              alt=""
            />
          </div>
          <h5>{vl.title}</h5>
        </div>
      </div>
    ));

  return (
    <>
      <section className="slideshow">
        <Slider />
        <Headertitle />
      </section>

      <section className="sectiontwo residentialCleaning">
        <div className="container">{residentialInfo}</div>
        <div className="container">{residentialCleaning}</div>
        <Link href="/services">
          <a>View All</a>
        </Link>
      </section>
      <section className="sectiontwo residentialCleaning">
        <div className="container">{commercialInfo}</div>
        <div className="container">{commercialCleaning}</div>
        <Link href="/services">
          <a>View All</a>
        </Link>
        <br />
      </section>
      <section className="sectionone aboutus">{laundryservice}</section>
      <section className="sectiontwo ourclients">
        <h1>Our Clients</h1>
        <div className="container">{ourcustomers}</div>
        <br />
      </section>
      <section className="sectionone">
        <div className="container">
          <div>
            <FreeQuote />
            <FreeQuoteQuestions />
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
