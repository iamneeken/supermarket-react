import React from "react";
import offer from "../../images/offer.png";
import img1 from "../../images/6.png";
import { Container, Tabs } from "react-bootstrap";

function TopOffer() {
  return (
    <div class="top-brands">
      <Container className="container">
        <h2>Top selling offers</h2>
        <div class="grid_3 grid_5">
          <div
            class="bs-example bs-example-tabs"
            role="tabpanel"
            data-example-id="togglable-tabs"
          >
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="#expeditions"
                  id="expeditions-tab"
                  role="tab"
                  data-toggle="tab"
                  aria-controls="expeditions"
                  aria-expanded="true"
                >
                  Advertised offers
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tours"
                  role="tab"
                  id="tours-tab"
                  data-toggle="tab"
                  aria-controls="tours"
                >
                  Today Offers
                </a>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div
                role="tabpanel"
                class="tab-pane fade in active"
                id="expeditions"
                aria-labelledby="expeditions-tab"
              >
                <div class="agile-tp">
                  <h5>Advertised this week</h5>
                  <p class="w3l-ad">
                    We've pulled together all our advertised offers into one
                    place, so you won't miss out on a great deal.
                  </p>
                </div>
                <div class="agile_top_brands_grids">
                  <div class="col-md-4 top_brand_left">
                    <div class="hover14 column">
                      <div class="agile_top_brand_left_grid">
                        <div class="agile_top_brand_left_grid_pos">
                          <img src={offer} alt=" " class="img-responsive" />
                        </div>
                        <div class="agile_top_brand_left_grid1">
                          <figure>
                            <div class="snipcart-item block">
                              <div class="snipcart-thumb">
                                <a href="products.html">
                                  <img title=" " alt=" " src={img1} />
                                </a>
                                <p>Tata-salt</p>
                                <div class="stars">
                                  <i
                                    class="fa fa-star blue-star"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-star blue-star"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-star blue-star"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-star blue-star"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-star gray-star"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <h4>
                                  $20.99 <span>$35.00</span>
                                </h4>
                              </div>
                              <div class="snipcart-details top_brand_home_details">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="business"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="item_name"
                                      value="Fortune Sunflower Oil"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="20.99"
                                    />
                                    <input
                                      type="hidden"
                                      name="discount_amount"
                                      value="1.00"
                                    />
                                    <input
                                      type="hidden"
                                      name="currency_code"
                                      value="USD"
                                    />
                                    <input
                                      type="hidden"
                                      name="return"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="cancel_return"
                                      value=" "
                                    />
                                    <input
                                      type="submit"
                                      name="submit"
                                      value="Add to cart"
                                      class="button"
                                    />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"> </div>
      </Container>
    </div>
  );
}

export default TopOffer;
