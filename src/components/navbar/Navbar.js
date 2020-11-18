import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import './Navbar.css'
import images from '../images/image.jpg'

function Navbar() {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark center">
<img src="data:image/webp;base64,UklGRiYEAABXRUJQVlA4TBkEAAAvkkAHEN+joG0jx2CPP4UftygICRL+L7YpEEgC2V9zBm0bSdqknbmHP8+DcETTNlTNZW/gnP/xLUUBAAIxuACEKIRpABACiCYAQIBCDAZAFMVABEIIMQALAEByYdKHQBRAiDfBKAYgWAyCTSs2OaBWAeUMhLRt285Guu431fRt8s56PGvbtm0bYzxr/fw36aSjzxH9nwDaHui+eLF7gGXlrmffP378/mzXcmLHxPAWsy3DEzuWD4Oj97lidoX7o4PLhe730z28M3tHz/T77mXCPbtFn5lZH7fs3nLg1889NruO49Fx1s3anp+/FrdWM3Ts65H/n+whPIoewUP79P/I1/mSNZvZ/KtLCp06NXTWbAM/RqKRH2wwOzt0qpSsUs2ttNpwUnMepc1mBrh5sO366lF7ARstdyO8sNHV17eV4VXo2/PzyElNoCGJzq74sOaS2UE4nnccDppdWvNhxSKUSB4gZHT4zrWVIzbyF+7m3YW/Izay8tqdclzIBZqVJGmQRK1KtStqVqs+atWSJGmEnGYlSRo0q5VWqEpKqjXSarURpbUkqdSzqFGtpGk1cbUArJ/tOWl2F3iT9wa4a3ayZ3Z9ORQ6xc5FNakW1aQqUFW+B5xiJ8l75Tq8JKCm/C7ASYlyU3j85Nt7s93wZyZv5g/sNnv/7cnjjlTV5hxqUFdxoKo2ixQ5aKjY5xQ6eu3QVrOJvzBkhUPwd8Js6yHrLUNJkiQVMklqZI1SgiT5rCqpkUlSI2vkhJaTGmmaFySpK6tLcnn1kDpJ4ex09w2zp8C+on3AU7Mb3dNnS4kdXpIHfBleUgokkvOSPOAjcJKHPC+pBTQkZVEVyCT5l695a3YWOFF0Ajhr9pbXL0tL6JIcsSuhKTmAEELokhyxK6FLcgBBko88QDRy45+Z7QQuFF0AdprZvxsjZThy652oF8T1TtRLcpK3owNmtha4WXQTWGtmA0etA15SAIIKKpGLvKQA1JOk4iUFIKgELykALUnpHMYPbDezX8DtotvALzPbfmC8Ay1JLiNzRfLQpSiTVAl4SdWWJJeRuTaqRZmkJJBKUpjDq/17zL4wN76Y7dn/qgw555w8Tm16WpKUOOVQUXGKU5seKpLk8qhIkpOkOnM4fWxHwY2iGwU7jp0uJdeTtkei4hqEohqkc2i1F6K4wly6z/ebTUbnis5Fk2b957s7QZpIcmmSQy3y9RxCLXIeIE0kuVaSQytpB+qR62JO8HPMbBVwuOgwsMps7CedDiHQZsgCbYcsUBhCoPwQAuU+MNsFDBcNA7vMHrCUbza7Cvz8nPf5J3DVbPOSxh37/B+4nncd+P/Z7rC0/3lul4GeqWiqB7hsz/8scfy+MrMXOBmdBPbOXPnN0t+7Cfh65suXM1+BTb0s6QA=" alt="" title="" data-pagespeed-url-hash="1554750824" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse head" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0">
    <li class="nav-item active">
        <a class="nav-link element" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link element" href="#">About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link element" href="#">Online/Offline <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link element" href="#">Our Services <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link element" href="#">Programs<span class="sr-only">(current)</span></a>
      </li>
    </form>
  </div>
</nav>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={images} height='600px' width="1500px" class="d-block w-100" alt="..."/>
    </div>
  
  </div>
</div>
    </div>
  );
}


export default Navbar;
