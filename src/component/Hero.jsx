const Hero = () =>{
    return(

        
        <div className="hero container">
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE,RE HERE TO 
                    HELP YOU WITH OUR SHOES. YOUR FEET DESERVE 
                    THE BEST AND WE,RE HERE TO HELP YOU WITH OUR 
                    SHOES.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="second-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icon">
                        <img src="/public/images/flipkart.png" alt="flipcart" />
                        <img src="/public/images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>

          <div className="hero-image">
            <img src="/public/images/hero-image.png" alt="hero-img" />
          </div>
        </main>
        </div>
        

    )
}

export default Hero;