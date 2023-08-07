import React from 'react'
import Header from '../../components/header'
import FeaturedProductSection from '../../features/featuredProductSection/featuredProductSection'
import { useAppSelector } from '../../utils/hooks'
import Carousel from '../../components/Carousel/carousel'
import { Footer } from '../../components/footer/footer'
import "./homepage.css"

export const Homepage: React.FC = () => {
  const products = useAppSelector(state => state.searchbar.products)
  //reason for not dispatching any async thunk: products will already be fetched by header components by the time we populate carousel component with product props
  const menCarouselproducts = products.filter(product => product.category === "men")
  const womenCarouselproducts = products.filter(product => product.category === "women")
  const kidCarouselproducts = products.filter(product => product.category === "kids")
     

  return (
    <>
    <Header/>
    <div style={{ paddingTop: '50px' }}>
        <FeaturedProductSection />
      </div>
    <Carousel products={menCarouselproducts} heading= {"MEN Latest"}/>
    <Carousel products={kidCarouselproducts} heading= {"KIDS Latest"}/>
    <Carousel products={womenCarouselproducts} heading= {"WOMEN Latest"}/>
    <Footer/>
    </>
  )
}
