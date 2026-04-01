import React from 'react'
import Hero from './Hero';
import TopNotes from './TopNotes';
import AboutUs from './AboutUs';
import  UploadSection from './UploadNotes/Section'
import Contact from './Contact';
function Home() {
  return (
    <>
    <Hero></Hero>
    <TopNotes></TopNotes>
    <AboutUs></AboutUs>
  <UploadSection></UploadSection>
  <Contact></Contact>
    </>
  )
}

export default Home