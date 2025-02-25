'use client'
import useGetQuery from '@/data/queryprovider/useGetQuery';


const Headertitle = () => {
  const  post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post','/post') || [] 

  const sliderCaption = Object.values(post)
    .filter((v) => {
      return v.slug === 'spotless-cleaning-at-your-doorstep';
    })
    .map((vl, k) => (
      <div key={k} className="headeer-title">
        <h1>{vl.title}</h1>
        <div>
        {vl.excerpt}
        </div>
      </div>
    ));

  return <>{sliderCaption}</>;
};

export default Headertitle;
