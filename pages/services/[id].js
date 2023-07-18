import { blogdata, expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = expertise.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='' /> <br /> */}
            {/* <br /> */}
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Our organization strives to stay ahead of the curve in the constantly evolving field of web development.' />
              <p className='desc-p'>{post.para1}</p>
              <p className='desc-p'>{post.para2}</p>
              <p className='desc-p'>{post.para3}</p>
              <p className='desc-p'>{post.para4}</p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            {/* <div className='desc'>
              <TitleSm title="For more information on how our bespoke web development services may elevate your online presence, get in touch with us right away." />

              
              
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
