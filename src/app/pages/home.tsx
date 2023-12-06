import Hotel from "../components/hotel"
import Banner from "../layouts/banner"
import HotelGuide from "../components/hotelGuide"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import Navbar from "../layouts/navbar"

export default function Home() {

    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <Hotel />
            <HotelGuide />
            <Footer />
        </>
    )
}
