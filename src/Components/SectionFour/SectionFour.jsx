import React, { useEffect, useState } from 'react'
import "./Sectionfour.scoped.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";


export default function SectionFour() {
    const [data , setData] = useState([])
    const getData =async ()=>{
        try{
const data = await fetch("menu.json")
const AllData = await data.json()
console.log(AllData)
setData(AllData)

        }
catch{
    console.log("thre is error")
}
    }
    useEffect(()=>{
        getData()
    } , [])
  return (
    
    <>
    <div className="section-four">
<div className="container-lg">
    <div className="top-text">
        <div className="p-with-img">
           
<p> <img src="https://zcube.in/bruin/img/bg/circle-left.png" alt="" />  Our Features</p>
        </div>  
      
        <h3>What We Provide You</h3>
        <p className='lastpara'>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus <br /> interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
    </div>
    <div className="row  mt-5">
    <div className="col-lg-3 mb-3">
        <div className="card-sec">
            <img src="https://zcube.in/bruin/img/icon/fe-icon01.png" alt="" />
            <h4> High Quality Coffee</h4>
            <p className='up'>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <p className='dwn'>Read More <FaLongArrowAltRight className='arrow'  size={"20px"}/>
            </p>
        </div>

    </div>
    <div className="col-lg-3 mb-3">
        <div className="card-sec">
            <img src="https://zcube.in/bruin/img/icon/fe-icon04.png" alt="" />
            <h4> High Quality Coffee</h4>
            <p className='up'>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <p className='dwn'>Read More <FaLongArrowAltRight className='arrow'  size={"20px"}/>
            </p>
        </div>

    </div>
    <div className="col-lg-3 mb-3">
        <div className="card-sec">
            <img src="https://zcube.in/bruin/img/icon/fe-icon05.png" alt="" />
            <h4> High Quality Coffee</h4>
            <p className='up'>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <p className='dwn'>Read More <FaLongArrowAltRight className='arrow'  size={"20px"}/>
            </p>
        </div>

    </div>
    <div className="col-lg-3 mb-3">
        <div className="card-sec">
            <img src="https://zcube.in/bruin/img/icon/fe-icon06.png" alt="" />
            <h4> High Quality Coffee</h4>
            <p className='up'>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <p className='dwn'>Read More <FaLongArrowAltRight className='arrow'  size={"20px"}/>
            </p>
        </div>

    </div>
</div>
</div>


</div>

<section className='sectionFv'>
<div className='container-lg'>
<div className="row">
<div className="col-lg-12">
    <div className="row">
 {data.map((e)=>{
    return(
                    <div className=" col-sm-12 col-md-6 col-12 col-lg-6 mb-3 d-flex  flex-column   ">
                        <div className="card-se ">
                            <img src={e.imgURL} className='me-2' />
                            <div className="text-se">
                                <h6>{e.title}</h6>
                                <p>{e.disc}</p>
                            </div>
                            <p>---------------      {e.price} </p>
                            {console.log(e.price)}

                    
                    </div>

                </div>
          

        
         
    )   
 })}  


 </div>

 </div>

 </div>

</div>
<button className='  buttonDiscover'>DISCOVER MORE</button>

</section>

<section className='sectionsix'>
    <div className="containerr">
        <div className="row 1g-0">
            <div className="col-lg-6">
                <div className="img-pa">
                <img src="https://zcube.in/bruin/img/gallery/protfolio-img01.png" />
                </div>
                </div>
              
            <div className="col-lg-6 p-0 m-0">
                <div className="row">
                    <div className="col-lg-6 p-0 m-0">
                        <div className="img-pa">
                        <img src="https://zcube.in/bruin/img/gallery/protfolio-img02.png"  />

                        </div>
                    </div>
                    <div className="col-lg-6 p-0 m-0">
                        <div className="img-pa">
                        <img src="https://zcube.in/bruin/img/gallery/protfolio-img04.png"  />

                        </div>
                    </div>
                    <div className="col-lg-6 p-0 m-0">
                        <div className="img-pa">
                        <img src="https://zcube.in/bruin/img/gallery/protfolio-img03.png"  />

                        </div>
                    </div>
                    <div className="col-lg-6 p-0 m-0">
                        <div className="img-pa">
                        <img src="https://zcube.in/bruin/img/gallery/protfolio-img05.png"  />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<footer className='footer'>
    <div className="container-lg">
        <div className="row">
            <div className="col-lg-3 d-flex align-items-center mb-5">
            <ul>
        <li className='mb-5'><img src="https://zcube.in/bruin/img/logo/logo.png" /></li>
        <li className='d-flex align-items-center lliii'>
        <CiPhone size={"30px"} />
        <div className='text-lli d-flex flex-column'>
<p className='m-0 p-0'>1800-121-3637</p>
<p className='m-0 p-0'>+91-7052-101-786</p>
        </div>
        </li>
        <li className='d-flex align-items-center lliii'>
        <MdEmail size={"30px"}/>

        <div className='text-lli d-flex flex-column'>
<p className='m-0 p-0'>info@example.com</p>
<p className='m-0 p-0'>help@example.com</p>
        </div>
        </li>
        <li className='d-flex align-items-center lliii'>
        <FaMap size={"30px"} />
        <div className='text-lli d-flex flex-column'>
<p className='m-0 p-0'>1247/Plot No. 39, 15th Phase,</p>
<p className='m-0 p-0'>LHB Colony, Kanpur</p>
        </div>
        </li>
    </ul>
            </div>
            <div className="col-lg-3 d-flex align-items-center mb-5">
                <ul>
                    <li>
                        <h6 className='mb-5 p-0'>our links</h6>
                    </li>
                    
                 
                    <li><a>Home</a></li>
                    <li><a>about</a></li>
                    <li><a>contact us</a></li>
                    <li><a>sevices</a></li>
                    <li><a>blog</a></li>
    


                </ul>
            </div>
            <div className="col-lg-6 d-flex align-items-center mb-5">
                <ul>
                    <li>
                        <h6 className='mb-5 p-0'>Our Shop Location
                        </h6>
                    </li>
                    
                 
                    <li>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d851146.9309473292!2d-111.884837!3d33.558762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1731952646536!5m2!1sen!2sin" width="450" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </li>
    


                </ul>
            </div>


    </div>
    </div>
</footer>


    </>
  )
}
