
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import HowWeWork from '../HowWeWork/HowWeWork'
import Recipies from '../Recipies/Recipies'
import TastyPasters from '../TastyPasters/TastyPasters'
import TestyMonials from '../TestyMonials/TestyMonials'

export default function MasterPage() {
  return (
  <>
  <TastyPasters />
  <HowWeWork />
  <AboutUs />
  <Recipies />
  <TestyMonials />
  <ContactUs />
  </>
  )
}
