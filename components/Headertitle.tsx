'use client'
import { PostType } from '@/@types/postTypes';
import useGetQuery from '@/data/queryprovider/useGetQuery';

import BlockContent from '@sanity/block-content-to-react';

const Headertitle = () => {
  const  post: PostType = useGetQuery('post','/post') || [];

  const sliderCaption = Object.values(post)
    .filter((v) => {
      return v.slug === 'spotless-cleaning-at-your-doorstep';
    })
    .map((vl, k) => (
      <div key={k} className="headeer-title">
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

  return <>{sliderCaption}</>;
};

export default Headertitle;
