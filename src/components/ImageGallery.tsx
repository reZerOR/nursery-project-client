import BlurFade from "./megicUi/BlurFade";
import img from '@/assets/annie-spratt-38yKQLL11d8-unsplash.jpg'
import img2 from '@/assets/annie-spratt-vs6a4EHj_Ro-unsplash.jpg'
import img3 from '@/assets/dorne-marting-WJJ3xP5Z_vw-unsplash.jpg'
import img4 from '@/assets/goran-eidens-6T7kfc3VitU-unsplash.jpg'
import img5 from '@/assets/masaaki-komori-NoXUQ54pDac-unsplash.jpg'
import img6 from '@/assets/saffu-Ct1Mx5OTn9A-unsplash.jpg'
import img7 from '@/assets/rita-ox-eH5gAM2X2wQ-unsplash.jpg'
import { containerStyle } from "@/utils/styles";
import Heading from "./Heading";



const imageArray = [img, img5, img3, img4, img2, img6, img7]

export function ImageGallery() {
  return (
    <>
<Heading text="Garden Portraits"/>
    
    <section id="photos" className={containerStyle}>
      <div className="columns-2 gap-4 sm:columns-3">
        {imageArray.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
    </>
  );
}
