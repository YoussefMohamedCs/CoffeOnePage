import React from 'react'
import "./Sectionthree.scoped.css"

export default function SectionThree() {
  return (
    <>
<div className="section-three">
<div className="container-lg">
    <div className="row">
        <div className="col-lg-6">
            <div className="images">
                         <img className='image-parent' src="https://zcube.in/bruin/img/features/about_img_02.png" alt="image section two" />
            <img className='image-child' src="https://zcube.in/bruin/img/features/about_img_03.png" alt="" />
            </div>
   

        </div>
        <div className="mt-sm-5 mt-md-5 mt-5 mt-xl-0 col-lg-6 d-flex flex-column justify-content-center">
            <div className="text">
            <p className='text-up'><img src="https://zcube.in/bruin/img/bg/circle-left.png"  /> About Us</p>
<h2 className='text-middle'>Would You Like Delicious Coffee
</h2>
<p className='text-before-last'>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p>
<p className='last-text'>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.</p>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-4">
                    <img src="https://zcube.in/bruin/img/features/signature.png" alt="" />
                    <p className='VincentSmith'>Vincent Smith
                    </p>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                    <button className='buttonLast'>Discover More</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    </>
  )
}
