'use client';

import Headertitle from '@/components/Headertitle';
import Link from 'next/link';
import Image from 'next/image';
import Slider from '@/components/Slider';
import FreeQuote from '@/components/FreeQuote';
import FreeQuoteQuestions from '@/components/FreeQuoteQuestions';
import useGetQuery from '@/data/queryprovider/useGetQuery';
import { useEffect, useState } from 'react';

export default function Home() {
  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];

  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  //Get Residention Cleaning
  const residentialInfo = post
    .filter((v) => {
      return v.slug === 'residential-cleaning-excerpt';
    })
    .map((vl, k) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>{vl.excerpt}</div>
      </div>
    ));

  //Get Residention Cleaning Services thumbnails
  const residentialCleaning = post
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
  const commercialInfo = post
    .filter((v) => {
      return v.slug === 'commercial-cleaning-excerpt';
    })
    .map((vl, k) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>{vl.excerpt}</div>
      </div>
    ));

  //Get Commercial Cleaning Services thumbnails
  const commercialCleaning = post
    .filter((v) => {
      return v.cat_title === 'Commercial Cleaning ';
    })
    .map((vl, k) => (
      <div key={k}>
        <div
          className="imageBx"
          style={{
            backgroundImage: `url(${vl.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <h3>{vl.title}</h3>
        {vl.excerpt}
      </div>
    ));

  //Get Laundry Service
  const laundryservice = post
    .filter((v) => {
      return v.slug === 'laundry-services';
    })
    .map((vl, k) => (
      <div key={k} className="homepage-laundry">
        <div>
          <h1>{vl.title}</h1>
          <div>{vl.excerpt}</div>
        </div>
        <div style={{
          backgroundImage: `url(${vl.image})`, 
          backgroundPosition: 'center', 
          backgroundSize: 'cover'
        }}>
         
  
        </div>
      </div>
    ));

  //Get Our Customes

  const ourcustomers = Object.values(post)
    .filter((v) => {
      return v.cat_title == 'Customers';
    })
    .map((vl, k) => (
      <div key={k}>
        <div className="custbx">
          <div>
            <Image
              width="40"
              height="30"
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
        <Slider width="100%" height={getHeight} />

        <Headertitle />
      </section>

      <section className="sectiontwo residentialCleaning">
        <div className="container">{residentialInfo}</div>
        <div className="container">{residentialCleaning}</div>
        <Link href="/services">View All</Link>
      </section>
      <section className="sectiontwo residentialCleaning">
        <div className="container">{commercialInfo}</div>
        <div className="container">{commercialCleaning}</div>
        <Link href="/services">View All</Link>
        <br />
      </section>
      <section className="sectionone aboutus">{laundryservice}</section>
      <section className="sectiontwo ourclients">
        <h1>Our Clients</h1>
        <div>{ourcustomers}</div>
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
