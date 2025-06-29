import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreCategories/ExploreCategories'
import FoodDisplay from '../../components/CourseDisplay/CourseDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>

    </>
  )
}

export default Home
