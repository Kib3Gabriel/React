import './ProductPage.css';

function App() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src="https://m.media-amazon.com/images/I/51AISrjclNL.jpg" alt="nike shoe" />
        </div>
        <div className="product-info">
          <div className="product-details">
            <h2>Product Name</h2>
            <p>More info</p>
          </div>

          <div className="product-description">
            <p>PRODUCT DESCRIPTION</p>
            <hr />
            <hr />
            <hr />
          </div>

          <div className="colors">
            <div className="col black"></div>
            <div className="col blue"></div>
            <div className="col orange"></div>
            <div className="col green"></div>
            <div className="col yellow"></div>
          </div>

          <div className="size">
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
          </div>

          <div className="buy-section">
            <button>Buy</button>
            <p>$45,98</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
