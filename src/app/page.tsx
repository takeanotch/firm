

import { projects } from '@/lib/utils'
import { FaBolt } from 'react-icons/fa6'
import FAQ from '@/components/FAQ'
import TestimonialPage from '@/components/TestimonialPage'
import TextImageFill from '@/components/TextImageFill';
import LuxuraGrid from '@/components/LuxuraGrid'
import TeamPage from '@/components/TeamPage';
import HeroPage from '@/components/HeroPage'
import QuiSommesNousPage from '@/components/QuiSommesNousPage';
import NewsLeterSubscribe from '@/components/NewsletterSubscribe';
import Services from '@/components/services';
import FeaturedBlogsSection from '@/components/FeaturedBlogsSection';
import WhereWeWork from '@/components/WhereWeWork';
import ServicesPresentation from '@/components/ServicesPresentation';
export default function Home() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <>
      <main className="min-h-screen  pt-5 relative  dark:bg-black">
        <section className="py-4 px- max-w-7xl mx-auto">
        <HeroPage/>
          <div className='z-50'>
<QuiSommesNousPage/>
 
  <WhereWeWork/>
{/* <LuxuraGrid/>
<Services/> */}
<ServicesPresentation />
   

 
<TeamPage/>
          </div>
         
        </section>


        <TestimonialPage/>
        <div className="fle md:flex-rowflex-col px-2">
          <div className='bg-re-500 w-max mx-auto'>


   <TextImageFill
  text="Great"
  image="/nine.jpg"
  fontSize="100px"
  fontWeight="900"
/>

          </div>
<FeaturedBlogsSection/>
      <FAQ/>
        </div>
        <NewsLeterSubscribe/>
          {/* <ServicesShowcase/> */}
      </main>
    </>
  )
}