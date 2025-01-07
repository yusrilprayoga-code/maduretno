import NavBar from "@/components/NavBar"
import GoogleMap from "@/components/GoogleMap"
import Footer from "@/components/Footer"

const MapPage = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-[100vw] overflow-x-hidden">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Peta Desa <span className="text-lime-700">Maduretno</span>
        </h1>
        <div className="flex justify-center">
          <GoogleMap width="1200" height="600" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MapPage